
//Database
var dbPass="Password"
var dbOtp=4567; //otp

// UserInput 
var userPass="Password"
var userOtp=4567 //userotp


if(dbPass==userPass){// check password is correct or not

    if(dbOtp==userOtp){//check otp match

        console.log(`Login Successful`);//true
        
    }

    else{

        console.log(`Incorrect OTP`);//false
        
    }
}
else {// false 

    console.log(`Incorrect Password`);
    
}