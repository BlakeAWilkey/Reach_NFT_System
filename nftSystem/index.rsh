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
        startMint: Fun([],Null),
    });
    const Customer = API('Customer', {
        joinPool: Fun([UInt],Bool),
        retrieveMint: Fun([Address],Bool),
    });
    
    init();
    
    Creator.publish();
    commit();

    Creator.only(() => {
        const {price,deadline,max} = declassify(interact.getParams());
    });
    Creator.publish(price,deadline,max);

    const isWinner = (who)=>{
        return true;
    };

    const pool = new Map(UInt);
    const [ timeRemaining, keepGoing ] = makeDeadline(deadline); //set deadline to end in set number of blocks from Creator
    
    Creator.interact.raffleReady();//starts customers creating contracts and attempting to reserve a spot in the pool



    const [numJoined] = //Takes payments from customers in exchange for a spot in the pool
    parallelReduce([0])
    .invariant(balance() == (numJoined * price))
    .while( keepGoing() )
    .api(Customer.joinPool, 
        ((p) =>{ assume(p == price, "Price not correct"); assume(max >= numJoined + 1, "No more space"); }),
        ((p) =>p),
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
    
    const match = (who) => {
        const index = pool[who];
        switch(index){
            case None: return false;
            case Some: return true;
        };
    };
    Creator.interact.startMint();
    const [ timeRemainingTwo, keepGoingTwo] = makeDeadline(deadline); 
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
                //minting logic
                return [returned+1];
            })
        ).timeout(timeRemainingTwo(),()=>{
            Anybody.publish()

            return [returned]; 
        });  


    transfer(balance()).to(Creator);
    commit();


    Creator.only(()=>{


        //Creator must now request minted NFTs for each joined Address
        //Addresses are currently stored in an array on the frontend. 
        //ISSUE: We wont be able to store addresses on the backend without using sets/maps(Dangerous on Algorand since they are stored in local state)
            //Solution1: We mint nft's in the parallel reduce immediately after the customer pays
            //Solution2: Creator pings a frontend function multiple times send individual addresses (Possibly not safe similar to maps)
            //Solution3: We use maps
            //Solution4: offchain storage

    });
    exit();
});