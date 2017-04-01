// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {

  //check type of variable, if number, return the number, if not, return undefined
  function checkIfNumber(num) {
    return typeof num === 'number' ? num : undefined;
  }

  var a = checkIfNumber(arguments[0]);
  var b = checkIfNumber(arguments[1]);

  if (arguments.length > 1) {
    return a && b ? a + b : undefined;
  } else {
    if (a) {
      return function(y) {
        if (checkIfNumber(y)) {
          return a + y;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }
}


console.log(addTogether(2,3));
