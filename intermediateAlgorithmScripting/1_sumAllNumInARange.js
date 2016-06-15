// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  var sumArr = [];
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var dif = max - min;
  for (i=0; i <= dif; i++){
    var count = min + i;
    sumArr.push(count);
  }
  var total = sumArr.reduce(function(a, b) {
    return a + b;
  });
  return total;
}

sumAll([1, 4]);
