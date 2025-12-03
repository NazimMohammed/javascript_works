//BMI = weight_in_kg/ height_In meter^2'


var weight_in_kg = 45;
var height_In_cm = 170;

var height_In_meter = height_In_cm/100;

var BMI = weight_in_kg/ (height_In_meter**2);

console.log(BMI);
