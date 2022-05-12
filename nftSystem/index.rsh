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
        startMint: Fun([],Null),
        newToken:Fun([Address],Null),
    });
    const Customer = API('Customer', {
        joinPool: Fun([UInt], Bool),
        retrieveMint: Fun([Address], Bool),
    });

    init();
 
    Creator.publish();
    commit();
    
    Creator.only(() => {
        const {price,deadline,max} = declassify(interact.getParams());
    });
    Creator.publish(price,deadline,max);
    
    const pool = new Map(UInt); //Address Pool

    const [ timeRemaining, keepGoing ] = makeDeadline(deadline); //set deadline to end in set number of blocks from Creator
    
    Creator.interact.raffleReady();//starts customers creating contracts and attempting to reserve a spot in the pool

    const matchJoined = (who) => {
        const index = pool[who];
        switch(index){
            case None: return false;
            case Some: return true;
            
        };
    };


    const [numJoined] = //Takes payments from customers in exchange for a spot in the pool
    parallelReduce([0])
    .invariant(balance() == (numJoined * price))
    .while( keepGoing() )
    .api(Customer.joinPool, 
        ((p) =>{ assume(p == price, "Price not correct"); assume(max >= numJoined + 1, "No more space"); assume(!matchJoined(this),"Already Joined");}),
        ((p) => p),
        ((p, notify)=>{ 
            require(p == price,"Price not correct");
            require(max >= numJoined + 1,"No more space");
            require(!matchJoined(this), "Already Joined");
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
    
    const [ timeRemainingTwo, keepGoingTwo] = makeDeadline(deadline); 
    Creator.interact.startMint();

    //Deadline to allow 
    const [returned] =
        parallelReduce([0])
        .invariant(balance() == numJoined*price)
        .while(keepGoingTwo() && returned < numJoined)
        .api(Customer.retrieveMint,
            ((p)=>{assume(matchJoined(this),"No NFT for you");}),
            ((p)=> 0),
            ((p, notify)=>{ 
                require(matchJoined(this),"No NFT for you");   
                notify(true);
                Creator.interact.newToken(this); //mint is done on frontend
                delete pool[this];
                return [returned+1];
                
            })
        ).timeout(timeRemainingTwo(),()=>{
            Anybody.publish()
            return[returned]; 
        });
    //todo: refund those that failed to claim their purchased nft
    transfer(balance()).to(Creator); 
    
    commit();
   
    exit();
});