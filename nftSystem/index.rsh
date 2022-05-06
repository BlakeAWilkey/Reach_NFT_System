'reach 0.1';




export const main = Reach.App(()=>{
    setOptions({ untrustworthyMaps: true });
    const Creator = Participant('Creator', {
        raffleReady: Fun([],Null),
        getParams: Fun([],Object({
            price: UInt,
            deadline: UInt,
            max: UInt,
        })),
        salt: Bytes(8),
        startMint: Fun([Token],Null),
    });
    const Customer = API('Customer', {
        joinPool: Fun([UInt], Bool),
        retrieveMint: Fun([Address], Bool),
    });

    
    const TLE = Events({tokenLaunch: []});
    init();
    

    Creator.publish();
    commit();
    
    
    Creator.only(() => {
        const {price,deadline,max} = declassify(interact.getParams());
        const amount = 1;
        assume(max != 0 );
        
    });
    Creator.publish(price,deadline,max,amount);

    const pool = new Map(UInt);
    const [ timeRemaining, keepGoing ] = makeDeadline(deadline); //set deadline to end in set number of blocks from Creator
    
    Creator.interact.raffleReady();//starts customers creating contracts and attempting to reserve a spot in the pool



    const [numJoined] = //Takes payments from customers in exchange for a spot in the pool
    parallelReduce([0])
    .invariant(balance() == (numJoined * price))
    .while( keepGoing() )
    .api(Customer.joinPool, 
        ((p) =>{ assume(p == price, "Price not correct"); assume(max >= numJoined + 1, "No more space"); }),
        ((p) => p),
        ((p, notify)=>{
            require(p == price,"Price not correct");
            require(max >= numJoined + 1,"No more space");
            notify(true);
            pool[this] = numJoined;
            return [numJoined + 1];
        })
    )
    .timeout(timeRemaining(),()=>{
        Anybody.publish();
        return [numJoined];
    });
    if(numJoined == 0){
        commit();
        exit();
    }
   
    const match = (who) => {
        const index = pool[who];
        switch(index){
            case None: return false;
            case Some: return true;
        };
    };
    
    
    const tok = new Token({supply: max});//creates token of supply max
    
    
    
    TLE.tokenLaunch();
    const am = max/(numJoined+max); // the amount they get is the set max number of members divided by that number + the number that joined
    commit();


    Creator.publish();
    
    const [ timeRemainingTwo, keepGoingTwo] = makeDeadline(deadline); 
    Creator.interact.startMint(tok);

    const [returned] =
        parallelReduce([0])
        .invariant(balance() == numJoined*price)
        .while(keepGoingTwo() && returned < numJoined)
        .api(Customer.retrieveMint,
            ((p)=>{assume(match(this),"No NFT for you");}),
            ((p)=> 0),
            ((p, notify)=>{ 
                require(match(this),"No NFT for you");
                
                notify(true);
                
               transfer(am,tok).to(this);
                
               
                
                return [returned+1];

            })
        ).timeout(timeRemainingTwo(),()=>{
            Anybody.publish()
            return[returned]; 
        });
     
    transfer(balance()).to(Creator);  

    // Infinite loop to keep tokens alive
    var lhs = true;
    {const t = true;}
    invariant(balance() == 0);
    while(true){
        commit();
        Creator.publish();
        continue;
    } 
    commit();
   
    exit();
});