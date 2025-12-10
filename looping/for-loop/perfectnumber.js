var number = 6;

var sum = 0;

for(let i = 1; i<number; i++){// i=1 i=2 2<6-t i=3
    if(number%i==0){ //6%1==0 ,6%2==0, 6%3==0-T   6%4==0-F 6%5==0-F
        sum=sum+i//sum = 0+1=1 ,1+2=3, 3+3=6
    }
}
console.log(sum==number?'perfect number':'not perfect number');//perfect number


