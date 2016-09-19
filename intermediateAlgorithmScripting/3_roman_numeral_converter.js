// Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  //works on numbers under 4000 only
  //array with roman numerals
  var romanNum = ["M","CM","D","CD","C","XC","L","X","XL","IX","V","IV","I"];
  //matching array with arabic numbers
  var arabicNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  //result will be string
  var result = "";

  //loop through length of array, same for both
  //maybe use indexOf?
   for(i = 0; i < romanNum.length; i++){
     //while input value is greater or equal to the current arabic num in array
     //example: 36; will start checking from 10 b/c smaller than 40
     while (num >= arabicNum[i]) {
       //input value - current arabic num in array
       num -= arabicNum[i];
       //result is the string of matching roman numeral in same spot of array
       //X+X+X, then is smaller than 10
       result += romanNum[i];
     }
   }
  return result;
  //return num;
}

convertToRoman(36);
