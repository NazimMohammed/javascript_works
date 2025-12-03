var dbPin = 2323;

var dbBalance = 50000;

var userPin = 2323;

var amount = 2200;

if (dbPin == userPin) {// checking password
    if (amount % 100 == 0) {//checking multiple of 100 or not
        if (amount <= dbBalance) {// checking balance 
            console.log(`Withdrawal successful`);//true
        }
        else {
            console.log(`Insufficient balance`);//false
        }
    }
    else {
        console.log(`Enter a multiple of 100`);//false
    }
}

else 

{
    console.log(`Incorrect Pin`);
}
