var weight_in_kg = 55;
var height_In_cm = 169;
var age = 22;

var bmr = 10 * weight_in_kg + 6.25 * height_In_cm - 5 * age + 5;
// console.log(bmr);

var calorie = bmr * 1.2;
console.log(`calorie consumption = ${calorie}`);
