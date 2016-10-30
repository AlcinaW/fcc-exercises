// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//need to loop through entire array (in case has 2+ arrays in it)
//loop through the arrays inside
//check and hold the unique values, push to new array
//go back and recheck new array against current list to ensure no duplicates?

function uniteUnique(arr) {
  //new array for unique values
  var uniqueArr = [];
  //maybe make the place in array a named var, length
  for (var i = 0; i < arguments.length; i++) {
     for (var j = 0; j < arguments[i].length; j++) {
       if (uniqueArr.indexOf(arguments[i][j]) < 0) {
         //check
         uniqueArr.push(arguments[i][j]);
       }
     }
   }
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
