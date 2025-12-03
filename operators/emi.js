var principal = 5000000;
var rate = 9;
var years = 20;

var months = years * 12;
var monthlyRate = rate / (12 * 100);

var base = 1 + monthlyRate;
var power = 1;
for (var i = 0; i < months; i++) {
    power = power * base;
}

var emi = (principal * monthlyRate * power) / (power - 1);
var totalPayment = emi * months;
var totalInterest = totalPayment - principal;

console.log("Loan EMI        :", emi);
console.log("Total Interest  :", totalInterest);
console.log("Total Payment   :", totalPayment);