// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://developer.mozilla.org/en/docs/web/JavaScript/Reference/Operators/function
//"function expression"
//filter
//function can be stored in a variable

function findElement(arr, func) {
  //needs to return true and return first element that passes
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
