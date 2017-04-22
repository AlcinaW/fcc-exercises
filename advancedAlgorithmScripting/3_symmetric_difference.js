// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
// Array.prototype.reduce()
//https://www.youtube.com/watch?v=PxffSUQRkG4
//https://en.wikipedia.org/wiki/Symmetric_difference
//the numbers that appear only once out of all the arrays
//must loop though all arrays...check first set against second, make new array, check with next array? but what if the items are common to more than one array?
//must compare all...efficient way to check?

function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
