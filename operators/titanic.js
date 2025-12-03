//titanic

var malepassengers = 869;

var femalepassengers = 412;

var survived = 492;

//total numbers of passengers;

var totalpassengers = malepassengers + femalepassengers;
console.log(`total passengers =${totalpassengers}`);

//number of unsurvived passengers;

var unsurvived = totalpassengers - survived;
console.log(`unsurvived passengers = ${unsurvived}`);


//percentage of survived passengers

var perSurvived = (survived/totalpassengers)*100
console.log(perSurvived,"%");

//percentage of unsurvived passengers

var perUnsurvived =(unsurvived/totalpassengers)*100
console.log(perUnsurvived,"%");
