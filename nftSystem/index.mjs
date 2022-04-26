import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(10000);

const accCreator = await stdlib.newTestAccount(startingBalance);

const ctcCreator = accCreator.contract(backend);
const ctcInfo = ctcCreator.getInfo();

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const beforeCreator = await getBalance(accCreator);

var joinedAddress = new Array();

const accounts = await Promise.all(Array.from({length:5},()=> stdlib.newTestAccount(startingBalance))); 

let done = false;
const customers = [];
const contracts = [];

//startCustomers creates contracts for each account and has each of them attempt to pay and join the pool

const startCustomers= async () => {
    const runCustomer = async (acc,who) => {
        const ctc = acc.contract(backend, ctcInfo);
        contracts.push(ctc);
        try{
          if(!joinedAddress.find(x=>x==acc.getAddress())){ //checks array to see if the account has already joined the pool
          const joined = await ctc.apis.Customer.joinPool(stdlib.parseCurrency(10));
          
          joinedAddress.push(acc.getAddress()); 
          
          console.log(`${who} joined the pool!`);
          }else{  
            throw err; // throws an error on multiple join attempts
          }
        }catch(err){
          console.log(`${who} failed to join the pool`); 
        }

      
    }; 
    
  let i = 0;
    for(const account of accounts){ //iterates over all accounts associates a name with them and calls run customer for them
      const who = `Customer #${i}`;
      account.setDebugLabel(who); 
      await runCustomer(account,who);
      await runCustomer(account,who); //each account tries to join twice but should only join once!
      i++;
    }
  
};

const startClaim= async () => {
  const runClaim = async (acc,ctc,who) => {
      //try{
        //checks array to see if the account has already joined the pool
        const claimed = await ctc.apis.Customer.retrieveMint(joinedAddress[0]);
        
        
        
       // console.log(`${who} claimed their nft`);
      //}catch(err){
      //  console.log(`${who} did not claim an nft`); 
      //}

  }; 
  
let i = 0;
  for(const account of accounts){ //iterates over all accounts associates a name with them and calls run customer for them
    const who = `Customer #${i}`; 
    await runClaim(account, contracts[i], who);
    //each account tries to join twice but should only join once!
    i++;
  }

  while ( !done ) {
      await stdlib.wait(1);
  }
};


await Promise.all([
  ctcCreator.p.Creator({
    //Creator must start customers, set these params. and such
    raffleReady: ()=>{
      startCustomers();
    },
    startMint: ()=>{
      startClaim();
      
    },
    getParams: ()=>{ return{
      price: stdlib.parseCurrency(10),
      deadline: 10,
      max: 4,
    }},
  }),
  ]
);

const afterCreator = await getBalance(accCreator);

console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);
done = true;
