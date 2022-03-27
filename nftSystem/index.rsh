'reach 0.1';

export const main = Reach.App(()=>{
    const Creator = Participant('Creator', {
        //fill in Creator fields

    });
    const Customer = ParticipantClass('Customer', {

        //fill in Customer fields

    });
    init();
    Creator.only(() => {
    //set params    
    });
    Customer.only(() => { 
    //pay contract
    });
    Creator.only(() => {
    //add address to array and mint nft when deadline is ended
    });

});