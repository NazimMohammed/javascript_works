var number = 10;

if (number%15==0) {//10%15=5 false
  console.log("pingpong");  
} else if (number % 5 == 0) {//10%5=0
  console.log("pong");//true
} else if (number%3==0) {//ignored
  console.log("ping");
} else {//ignored
  console.log("Invalid");
}
