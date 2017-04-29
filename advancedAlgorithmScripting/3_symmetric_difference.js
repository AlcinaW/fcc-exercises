// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
// Array.prototype.reduce()
//https://www.youtube.com/watch?v=PxffSUQRkG4
//https://en.wikipedia.org/wiki/Symmetric_difference
//the numbers that appear only once out of all the arrays
//must loop though all arrays...check first set against second, make new array, check with next array? but what if the items are common to more than one array?
//must compare all...efficient way to check?
//can use for to count up

//use hoisting to seperate
function diffArray (arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(function(value, index, array){
    if (array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1) {
    return value;
    }
  });
}
function removeDuplicates(arr) {
  var result = [];
  arr.forEach(function(value){
    if (result.indexOf(value) < 0) {
      result.push(value);
    }
  });
  return result;
}
function sym(args) {
  args = Array.prototype.slice.call(arguments);

  return args.reduce(function(acc, next){
    //accumulater
    acc = removeDuplicates(acc);
    next = removeDuplicates(next);
    acc = diffArray(acc, next);
    return acc;
  }, []);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
