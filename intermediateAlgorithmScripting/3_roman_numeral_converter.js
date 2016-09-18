// Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.
var numerals = [
  {value:1000, numeral: "M"},
  {value:900, numeral: "CM"},
  {value:500, numeral: "D"},
  {value:400, numeral: "CD"},
  {value:100, numeral: "C"},
  {value:90, numeral: "XC"},
  {value:50, numeral: "L"},
  {value:40, numeral: "XL"},
  {value:10, numeral: "X"},
  {value:9, numeral: "IX"},
  {value:5, numeral: "V"},
  {value:4, numeral: "IV"},
  {value:1, numeral: "I"},
];


function convertToRoman(num) {
  //result will be string
  var result = "";
  //use modulus operator? (but want number, not the leftover)
  //check length of input number
  //if 3 -> figure out value of 1000 place, push to array, keep looping to check
  //what to do about subtraction numbers? (4 is 5-1, 9 is 10-1; 40,50,90,400,900)
 return num;
}

convertToRoman(36);
