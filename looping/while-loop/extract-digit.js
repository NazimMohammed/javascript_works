var number=567;//567

while(number!=0){ //567!=0-T 56!=0-T 5!=0-T 0!=0-F
    let digit=number%10; //digit=567%10=7 56%10=6 5%10=5
    console.log(digit);//7 , 6 , 5
    number=Math.floor(number/10)//567//10=56 ,56//10= 5,5//10=0
    
}