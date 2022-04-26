import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = await loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating test account for Creator`);
const accCreator = await stdlib.newTestAccount(startingBalance);

/*
console.log(`Having creator create testing NFT`);
const theNFT = await stdlib.launchToken(accCreator, "bumple", "NFT", { supply: 1 });
const nftId = theNFT.id;
const minBid = stdlib.parseCurrency(2);
const lenInBlocks = 10;
const params = { nftId, minBid, lenInBlocks };
*/

console.log(`Setting the params`);
const price = stdlib.parseCurrency(10);
const maxReservations = 2; 
const lenInBlocks = 10;
const params = { price, maxReservations, lenInBlocks };

let done = false;
// const bidders = [];
const buyers = [];
const startBuyers = async () => {
    const runBuyer = async (who) => {
        const acc = await stdlib.newTestAccount(startingBalance);
        acc.setDebugLabel(who);
        // await acc.tokenAccept(nftId);
        // bidders.push([who, acc]);
        const ctc = acc.contract(backend, ctcCreator.getInfo());
        const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));

        console.log(`${who} attempts to buy a reservation for ${stdlib.formatCurrency(price)}.`);
        console.log(`${who} balance before is ${await getBal()}`);
        try {
            console.log(`iWillBuy(price).`);
            const res = await ctc.apis.Buyer.iWillBuy();
            buyers.push([who, res]);
            console.log(`${who} bought reservation ${res}.`);
        } catch (e) {
            console.log(`${who} failed to buy, because the window is closed`);
        }
        console.log(`${who} balance after is ${await getBal()}`);
    };

    await runBuyer('Alice');
    await runBuyer('Bob');
    await runBuyer('Claire');
    while ( ! done ) {
        await stdlib.wait(1);
    }
    console.log(`There are ${buyers.length} buyers.`);
};

const ctcCreator = accCreator.contract(backend);
await ctcCreator.participants.Creator({
    getSale: () => {
        console.log(`Creator sets parameters of sale:`, params);
        return params;
    },
    saleReady: () => {
        startBuyers();
    },
    seeBuy: (who, amt) => {
        console.log(`Creator saw that ${stdlib.formatAddress(who)} paid ${stdlib.formatCurrency(amt)}.`);
    },
    showOutcome: () => {
        console.log(`Creator begins minting NFTs for resevation holders`);
        for ( const [who, acc, res] of buyers ) {
            console.log(`${who} (AKA ${acc}) gets ${res} NFT`);
        }
    },
});

done = true;