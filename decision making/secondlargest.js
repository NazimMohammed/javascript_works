var num1=10
var num2=20
var num3=30

if(num1>num2 && num1>num3){//10>20 F && 10>30 F
    console.log(`${num1} is greater`);
    
}
else if(num2>num1 && num2> num3){//20>10 F && 20>30 F
    console.log(`${num2} is greater`);
    
}

else if(num3>num2 && num3> num1){ //30>10 T && 30>20 T
    console.log(`${} is greater`); //true
    
}
else if(num1==num2 && num2==num3){
    console.log(`all are equal`);
    
}
else{
    console.log(`invalid`);
}

