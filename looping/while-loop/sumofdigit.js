var number=567;//567
var sumofdigit=0


while(number!=0){ //567!=0-T //56!=0-T //5!=0-T //0!=0-F


    let digit=number%10; //567%10=7 56%10=6  5%10=5 


    number=Math.floor(number/10) //567//10=56     56//10=5 5//10=0


    sumofdigit=sumofdigit+digit //sum = 0+7=7   7+6=13 13+5=18


}
console.log(sumofdigit);//18
