//Flatten a nested array. You must account for varying levels of nesting.
//Array.isArray()


function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(acc, next) {
    //concat can have array as argument, if value is an array
    //if true, is array, keep going (recursion?)
    //if false, go to after semi-colon
    return acc.concat(Array.isArray(next) ? steamrollArray(next) : next);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
