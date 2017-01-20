// Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.
//https://www.mathsisfun.com/least-common-multiple.html
//compare arrays? but would not be efficient to check each spot
//figure out which is the smaller number to loop up

function smallestCommons(arr) {
  //find min and max numbers, push to array in order of smaller to larger number
  var min = Math.min(arr[0], arr[1]);
  console.log(min);
  var max = Math.max(arr[0], arr[1]);
  console.log(max);

  var range = [];

  for (var x = min; x <= max; x++) {
    range.push(x);
  }


  return arr;
}


smallestCommons([1,5]);
