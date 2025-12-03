
//read 3 marks mark1,mark2, mark3 each out of 50
var mark1 = 50;
var mark2 = 40;
var mark3 = 30;

//calculate total
var total=mark1+mark2+mark3;

//display grade A 140-150;
if(total>=141 &&total<=150){     // 141-150
    console.log(`Grade A`);
}
//display grade B 130-140;
else if(total>=130&& total<141){ // 130-140
    console.log(`Grade B`);
    
}
//display grade C 120-130;
else if(total>=120&&total<130){  //
    console.log(`Grade C`);
    
}
//display failed <120
else if(total<120){
    console.log(`Failed`)

}
else{
    console.log(`invalid`);
    
}