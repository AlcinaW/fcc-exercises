//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.concat(arr2);
  
  function haveNum (num) {
    // -1 does not exist 
    if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1)
      return num;
  }
  
  // Same, same; but different.
  //filter with callback function
  return newArr.filter(haveNum);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
