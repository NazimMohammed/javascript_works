//variable   var        let         const
//change     yes        yes         no
//scope      global     block       block


//var

var salary = 50000;

salary=1000000;

console.log(salary)//1000000(value changed or updated)

//let

for(let i=0; i<=3; i++){
    console.log("inside value",i) //blocklevel scope
}
// console.log("outside value",i)  //undefined




//const

const age = 99;//fixed

age = 50; //not changed

console.log(age); //99