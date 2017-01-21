// Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.
//https://www.mathsisfun.com/least-common-multiple.html
//compare arrays? but would not be efficient to check each spot
//figure out which is the smaller number to loop up

function smallestCommons(arr) {
  //find min and max numbers, push to array in order of smaller to larger number
  var range = [];

  var min = Math.min(arr[0], arr[1]);
  console.log(min);
  var max = Math.max(arr[0], arr[1]);
  console.log(max);

  for (var x = min; x <= max; x++) {
    //get range of numbers between min and max, push to array
    range.push(x);
  }

  var lcm = range[0];

  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;
  //Euclidean algorithm
  function gcd(x, y) {
    if (y === 0)
      return x;
    else
      return gcd(y, x % y);
    }
}

smallestCommons([1,5]);
