'reach 0.1';


const Common = {
    showOutcome: Fun([UInt], Null),
  };

export const main = Reach.App(()=>{

    const Creator = Participant('Creator', {
        ...Common,
        price: UInt,
        deadline: UInt,
        max: UInt,
        salt: Bytes(8),
        fOne: Array(Bytes(10), 2),
    });
    const Customer = ParticipantClass('Customer', {
        ...Common,
        shouldJoin: Fun([Address],Bool),
        getAdd: Fun([],Address),
        showPurchase:Fun([Address],Null),
    });
    
    init();

    const showOutcome = (joined) => () => {
        each([Creator, Customer], () =>
          interact.showOutcome(joined)); 
    };

    
    Creator.publish();
    commit();

    Creator.only(() => {
        const price = declassify(interact.price);
        const deadline = declassify(interact.deadline);
        const m =  declassify(interact.max); 
    });

    Creator.publish(price,deadline,m);
    
    const [ timeRemaining, keepGoing ] = makeDeadline(deadline); //set deadline to end in set number of blocks from Creator

    
    const [ joined ] = 
    parallelReduce([0])
    .invariant(balance() == (joined * price))
    .while( keepGoing() )
    .case(Customer, () => ({
        when: declassify(interact.shouldJoin(interact.getAdd())),
    }),
    (_) => price,
    (x) => {
        const customer = this;
        Customer.only(()=>interact.showPurchase(customer));
        return [joined + 1];})
    .timeout(timeRemaining(),()=>{
        Anybody.publish();
        return [joined];
    });
    transfer(balance()).to(Creator);
    commit();

    showOutcome(joined)();

    exit();
});