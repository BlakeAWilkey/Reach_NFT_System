'reach 0.1';

export const main = Reach.App(()=>{
    const Creator = Participant('Creator', {
        price: UInt,
        deadline: UInt,
        max: UInt,
        salt: Bytes(8),
        fOne: Array(Bytes(10), 2),
    
    });
    const Customer = ParticipantClass('Customer', {
        payPrice: Fun([UInt],Null),
    });
    init();


    Creator.only(() => {
        const price = declassify(interact.price);
    });
    Creator.publish(price);
    commit();

    Customer.only(() => { 
        interact.payPrice(price);
    });
    Customer.pay(price);
    transfer(price).to(Creator);
    commit();



    Creator.only(() => {
        
    });
});