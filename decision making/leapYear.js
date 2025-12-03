var year = 2024;
    
if (//2024%100==0 F && 2024%400 F
  (year % 100 == 0 && year % 400 == 0) ||    //  century year checking leapyear or not
  // 2024%100!=0 T && 2024%4==0 T
  (year % 100 != 0 && year % 4 == 0)         //  non-century year checking
){
  console.log(`leap year`); //true
} 


else {
  console.log(`non leap year`); //false
}
