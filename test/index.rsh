'reach 0.1';
//'use strict';

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const Creator = Participant('Creator', {
        getSale: Fun([], Object({
            price: UInt,
            maxReservations: UInt,
            lenInBlocks: UInt,
        })),
        saleReady: Fun([], Null),
        seeBuy: Fun([Address, UInt], Null),
        showOutcome: Fun([Address, UInt], Null),
        mintNFTs: Fun([],Null),
    });
    const Buyer = API('Buyer', {
        iWillBuy: Fun([], Bool),
        // iWillBuy: Fun([], Tuple(Bool,UInt)),
    });
    init();

    Creator.only(() => {
        const { price, maxReservations, lenInBlocks } = declassify(interact.getSale());
    });

    Creator.publish(price, maxReservations, lenInBlocks);

    commit();
    Creator.publish();
    Creator.interact.saleReady();
    const buyers = new Set(); // ----------------------- likely need to change this to a new Map(Address, Uint) so we can store the reservation
    const buyersMap = new Map(Object({
        address : Address,
        reservation : UInt
    }));/*/ 
    const buyersMap = new Map(Address);
    */
    const end = lastConsensusTime() + lenInBlocks;

    const [ reservations 
    ] = parallelReduce([0])
        .define(() => {
            const checkBuyer = (who) => {
                check( ! buyers.member(who), "not yet in buyers") 
                // check( ! buyersMap.includes(address, who), "not yet in buyersMap") 
                return () => {
                    /*buyers.insert(who);
                    buyersMap[who] = {
                        address : who,
                        reservation : reservations + 1
                    };*/
                    return [ reservations + 1 ];
                };
            };            
        })
        .invariant(balance() == price * reservations)
        .while(lastConsensusTime() <= end && reservations < maxReservations) 
        .api(Buyer.iWillBuy, 
            () => { const _ = checkBuyer(this); }, // ---- assumptions that must be true to call iWillBuy
            () => price,                           // ---- payment 
            (notify) => {                          // ---- store that they bought a reservation
                notify(true);
                // return [ reservations +1 ]; }
                return checkBuyer(this)(); }
        )
        .timeout(absoluteTime(end), () => {
            Anybody.publish();
            return [ reservations ]; 
        });

    Creator.interact.seeBuy(this, price);

    transfer(balance()).to(Creator);   
    commit();
    exit();
});