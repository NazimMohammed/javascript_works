var number = 29;//prime

var isPrime = true;//true

for(let i = 2; i<number; i++){//exclude 1 and number
    if(number%i==0){
        isPrime=false;
        break;//break loop
    }
}

console.log(isPrime?"Prime Number":"Not prime number");
