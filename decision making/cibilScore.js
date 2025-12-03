var cibilScore=500;


if(cibilScore>=300&& cibilScore<580){//550>300 && 550<580 true
    console.log(`poor`);//true
    
}
else if(cibilScore>=580&&cibilScore<670){//false
    console.log('fair');
    
}
else if(cibilScore>=670&&cibilScore<740){//false
    console.log(`Good`);
    
}
else if(cibilScore>=740&&cibilScore<800){//false
    console.log(`Verygood`);
    
    
}
else if(cibilScore>=800&& cibilScore<=850){
console.log(`Excellent`);//false
    
}
else{
    console.log('invalid');
    
}