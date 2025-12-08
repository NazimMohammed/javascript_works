var number =5;

var fact=1;

var i=1;

while(i<=number){// 1<=5-T  2<=5-T 3<=5-T 4<=5-T 5<=5-5 6<=6-F
    fact=fact*i//fact=1*1=1 1*2=2  2*3=6 6*4=24 24*5=120
    i++//i=2,3,4,5,6
}
console.log(`factorial of ${number}!=${fact}`);// factorial of 5!=120
