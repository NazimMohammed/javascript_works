var num1 =12;

var num2=48;

var i =1

num1>num2?min=num1:min=num2

for(i=1; i<=min;i++){
    if(num1%i==0&&num2%i==0){
        console.log(i);
        
    }
}

console.log(`gcd of number - ${num1} & ${num2} is ${i}`)


