'reach 0.1';


export const main = Reach.App(()=>{

    const Creator = Participant('Creator', {
        price: UInt,
        deadline: UInt,
        max: UInt,
        salt: Bytes(8),
        fOne: Array(Bytes(10), 2),
        //acceptReservation: Fun([UInt],Null),
    
    });
    const Customer = ParticipantClass('Customer', {
        joinPool: Fun([UInt],Bool),
        shouldJoin: Fun([Address],Bool),
        getAdd: Fun([],Address),
    });
    
    init();
    
    Creator.publish();
    commit();

    Creator.only(() => {
        const price = declassify(interact.price);
        const deadline = declassify(interact.deadline);
        const m =  declassify(interact.max); 
    });

    Creator.publish(price,deadline,m);
    
    const [ timeRemaining, keepGoing ] = makeDeadline(deadline);

    const joined = 
    parallelReduce(0)
    .invariant(balance() == (joined * price))
    .while( keepGoing() )
    .case(Customer, () => ({
        msg:declassify(interact.joinPool(price)),
        when:declassify(interact.shouldJoin(interact.getAdd())),
    }),
    (_) => price,
    (x) => {
        //Add address to array, increment joined by one
        
        return joined + 1;})
    .timeout(timeRemaining(),()=>{
        Customer.publish();
        return joined;
    });
    transfer(balance()).to(Creator);
    commit();
    
    

    //Customer.pay(price).timeout(relativeTime(deadline), ()=>{exit()});
    //transfer(price).to(Creator);
    //commit();
    //
    //const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
    
});