//armstrong number

var number = 153;
var numberCopy= number;

var armstrong =number;
var sum=0
var count=0;

while(number!=0){
    number=Math.floor(number/10)
    count++;
}

while(numberCopy!=0){
    let digit =numberCopy%10;
    let exponent= digit**count
    sum=sum+exponent
    numberCopy=Math.floor(numberCopy/10)
}

// console.log(sum);


console.log(armstrong==sum?"an armstrong number":"not an armstrong number");



