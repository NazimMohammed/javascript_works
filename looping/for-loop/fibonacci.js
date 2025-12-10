var limit = 10;

var prev = 0;
var curr = 1;

console.log(prev);//0
console.log(curr);//1

for (let i = 2; i < limit; i++) {//2<10 
    let next = prev + curr;//0+1 //1+1 //1+2 // //2+3
    console.log(next);//1
    prev = curr;//0=1
    curr = next;//1=1

}
