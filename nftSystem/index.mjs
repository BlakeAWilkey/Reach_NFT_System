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


const accounts = await Promise.all(Array.from({length:5},()=> stdlib.newTestAccount(startingBalance))); 

let done = false;

const map = new Map();


//startCustomers creates contracts for each account and has each of them attempt to pay and join the pool

const startCustomers= async () => {
    const runCustomer = async (acc,who) => {
        try{
          const ctc = acc.contract(backend, ctcInfo);
          const joined = await ctc.apis.Customer.joinPool(stdlib.parseCurrency(10));
          console.log(`${who} joined the pool!`);
          map.set(acc,ctc);
        }catch(err){
          console.log(`${who} failed to join the pool`); 
        }

      
    }; 
    
  let i = 0;
    for(const account of accounts){ //iterates over all accounts associates a name with them and calls run customer for them
      const who = `Customer #${i}`;
      account.setDebugLabel(who); 
      await runCustomer(account,who);
      await runCustomer(account,who);//Fails! Each account can only join once. Should only create one contract per account as a result

      i++;
    }
  
};

const startClaim= async () => { //starts the claim process for customer contracts
  const runClaim = async (acc,ctc,who,) => {
      try{
        const claimed = await ctc.apis.Customer.retrieveMint(acc);
        
        console.log(`${who} claimed their tokens`);
      }catch(err){
        console.log(`${who} did not claim their tokens`); 
      }
  };

  
let i = 0;
  for(const account of accounts){ //iterates over all accounts associates a name with them and calls run customer for them
    const who = `Customer #${i}`; 
    await runClaim(account, map.get(account), who);
    await runClaim(account, map.get(account), who); //Fails! Each Account can only claim once!
    
    i++;
  }

  while ( !done ) {
      await stdlib.wait(1);
  }
};

const opt = async(_tok)=>{
  let i = 0;
  await accCreator.tokenAccept(_tok);
  for(const account of accounts){
    try{
      await account.tokenAccept(_tok);
    }catch(err){
      console.log("couldn't accept token");
    }
    i++;
  }
}

const mintNFT = async(accRetrieved)=>{
  try{
    const nft = await stdlib.launchToken(accCreator, "UniqueTokenFromCreator", "NFT", { supply: 1});
    await accCreator.tokenAccept(nft.id);
    for(const account of accounts){ //gets account associated with given address
      if(account.getAddress() == accRetrieved){
        await account.tokenAccept(nft.id);
        await stdlib.transfer(accCreator,account,1,nft.id);
        console.log(`Account ${await account.getAddress()} now has ${await stdlib.balanceOf(account,nft.id)} ${nft.name}`);
      }
    }
  }catch(err){
    console.log("NFT not minted Frontend");
  }
}


await Promise.all([
  ctcCreator.p.Creator({
    //Creator must start customers, set these params. and such
    raffleReady: ()=>{
      startCustomers();
    },
    notifyEnd: ()=>{
      console.log(`Minting has Ended, Press Ctrl + C to terminate program`);
    },
    startMint: ()=>{
      startClaim();
      
    },
    newToken: (accRetrieve)=>{
      return mintNFT(accRetrieve);
    },
    showTokenOptIn:(tok)=>{
      console.log("here");
      opt(tok);
    },
    getParams: ()=>{ return{
      price: stdlib.parseCurrency(10),
      deadline: 10,
      max: stdlib.parseCurrency(4),
    }},
    
  }),
  ]
);

const afterCreator = await getBalance(accCreator);

console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);
done = true;
