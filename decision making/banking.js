var dbPin = 2121;

var dbBalance = 40000;

var userPin = 2121;

var amount = 4000;

if(dbPin==userPin){ //checking password match

    if(dbBalance>=amount){//checking balance 

        console.log(`Withdrawal Successful`);//true
        
    }
    else{

        console.log(`insufficient Balance`);//false
        
    }

}

else {

    console.log(`Incorrect Pin`);//false
    
}