var limit = 10;
var sum = 0;
var i = 1;

while(i<=limit){//1<=6-T 2<=6-T 3<=6-T 4<=6-T  5<=6-T 6<=6-T 7<=6-F
    if(i%2==0){//1%2==1 -f 2%2==0 -T  3%2==1-F 4%2==0-T  5%2==1-F 6%2==0-T 
        sum=sum+i//0+2=2   2+4=6 6+6=12
    }
    i++//i=1,2,3,4,5,6,7
    
}
console.log(sum);//12
