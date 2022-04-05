'reach 0.1';


export const main = Reach.App(()=>{

    const Creator = Participant('Creator', {
        price: UInt,
        deadline: UInt,
        max: UInt,
        salt: Bytes(8),
        fOne: Array(Bytes(10), 2),
        acceptReservation: Fun([UInt],Null),
    
    });
    const Customer = ParticipantClass('Customer', {
        joinPool: Fun([UInt],Bool),
        shouldJoin: Fun([],Bool),
    });
    
    init();
    
    Creator.publish();
    commit();
    Creator.only(() => {
        const price = declassify(interact.price);
        const deadline = declassify(interact.deadline);
    });
 
    Creator.publish(price,deadline);

    const [ timeRemaining, keepGoing ] = makeDeadline(deadline);

    const [joined] = 
    parallelReduce([0])
    .invariant(balance() == (joined * price))
    .while( keepGoing() )
    .case(Customer, () => ({
        msg:declassify(interact.joinPool(price)),
        when:declassify(interact.shouldJoin()),
    }),
    (_) => price,
    (x) => {
        return [joined + 1];})
    .timeout(timeRemaining(),()=>{
        Anybody.publish();
        return [joined];
    });
    transfer(balance()).to(Creator);
    commit();
    
    //This step should be recurring over the deaadline
    //That is, many customers should be able to join pool over the deadline
    


    //Customer.pay(price).timeout(relativeTime(deadline), ()=>{exit()});
    //transfer(price).to(Creator);
    //commit();
    //
    //const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
    
});