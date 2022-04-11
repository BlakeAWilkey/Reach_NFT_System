import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(10000);

const howMany = 2;

const accCreator = await stdlib.newTestAccount(startingBalance);



//const accCustomer = await stdlib.newTestAccount(startingBalance);
const accCustomerArray = await Promise.all(Array.from({length:howMany},()=> stdlib.newTestAccount(startingBalance)));

const ctcCreator = accCreator.contract(backend);
const ctcInfo = ctcCreator.getInfo();
//const ctcCustomer = accCustomer.contract(backend, ctcCreator.getInfo());

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const beforeCreator = await getBalance(accCreator);


//const beforeCustomer = await getBalance(accCustomer);

const member = (who) =>({
  informTimeout:() => {
    console.log(`${who} observed a timeout`);
  },
});

var joinedAddress = new Array();


const Common = (Who) => ({
  showOutcome: (joined) => {
      console.log(`${Who} saw that ${joined} joined the pool`);
    
} });



await Promise.all([
  ctcCreator.p.Creator({
    ...Common('Creator'),
    price: stdlib.parseCurrency(20),
    deadline: 5,
    max: 1,
    salt:"A3YR0EG2",
    fOne: ["RED","BLUE"],
  }),
  ].concat(
  accCustomerArray.map((accCustomer, i) =>{
    const ctcCustomer = accCustomer.contract(backend,ctcInfo);
    const Who = `Customer #${i}`;
    return backend.Customer(ctcCustomer,{
    ...Common(Who),
    shouldJoin:(address) => {
      if(!joinedAddress.find(x => x == address)){
        console.log(`Customer ${address} joined the pool`);
        joinedAddress.push(address);
        return true;
      }
      console.log(`Customer ${address} didn't join the pool`);
      return false;
    },
    getAdd:() => {
      return accCustomer.getAddress();
    }
    });
  })

  


)
);

const afterCreator = await getBalance(accCreator);

console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);

