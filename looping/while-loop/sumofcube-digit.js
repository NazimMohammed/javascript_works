var num=153;

var sum=0;

while(num!=0){

    let digit=num%10;
    digit=digit**3;
    num=Math.floor(num/10)
    sum=sum+digit

}
console.log(sum);
