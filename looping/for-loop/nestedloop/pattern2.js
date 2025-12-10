var n=5

for(let r = 1; r<=n;r++){
    let pattern =""
    for(let c =1; c<=n;c++){  
        if(c==r || c+r==n+1){

            pattern=pattern+"1\t";


        }
        else{

            pattern=pattern+"0\t";
        }
       
       
    }
    console.log(pattern);
    
}
