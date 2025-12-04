var num1 = 24;
var num2 = 12;

var min = 0;

// checking minimum number among two varibles
if (num1 > num2) {
    min = num2
}
else {
    min = num1
}

//checking common divisor of two number num1,num2
var i = 1;

while (i <= min) {
    if (num1 % i == 0 && num2 % i == 0) {
        console.log(i);

    }
    i++

}