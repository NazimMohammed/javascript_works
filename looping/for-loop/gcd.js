var num1 =8;

var num2=16;

var i =1

var minNumber=num1<num2?num1:num2//12<48?-F min =num1

for(i=1; i<=minNumber;i++){
    if(num1%i==0&&num2%i==0){
        console.log(i);//12
        var gcd=i
        
    }
}

console.log(`gcd of two numbers - ${num1} & ${num2} is ${gcd}`)//12


