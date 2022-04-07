import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(10000);

const accCreator = await stdlib.newTestAccount(startingBalance);
const accCustomer = await stdlib.newTestAccount(startingBalance);

const ctcCreator = accCreator.contract(backend);
const ctcCustomer = accCustomer.contract(backend, ctcCreator.getInfo());

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const beforeCreator = await getBalance(accCreator);
const beforeCustomer = await getBalance(accCustomer);

const member = (who) =>({
  informTimeout:() => {
    console.log(`${who} observed a timeout`);
  },
});

var joinedAddress = {};


await Promise.all([
  ctcCreator.p.Creator({
    price: stdlib.parseCurrency(1),
    deadline: 10,
    max: 1,
    salt:"A3YR0EG2",
    fOne: ["RED","BLUE"],
  }),
  ctcCustomer.p.Customer({ 
    joinPool:(p) => {
        console.log(`Customer attempts to join the pool`);
        return true;
    },
    shouldJoin:(address) => {
      if(!joinedAddress.find(address)){
        joinedAddress.push(address);
        return true;
      }
      return false;
      
    },
    getAdd:() => {
      return accCustomer.getAddress();
    },
   
  }),
]);

const afterCreator = await getBalance(accCreator);
const afterCustomer = await getBalance(accCustomer);

console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);
console.log(`Customer went from ${beforeCustomer} to ${afterCustomer}.`);