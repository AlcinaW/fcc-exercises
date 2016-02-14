8_longestWordInAString.js

// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  var splitArray = str.split(" ");
  var newArray = [];
  var len = splitArray.length;
  for (var i = 0; i < len; i++) {
    newArray.push(splitArray[i].length);
  } 
  return Math.max.apply(null, newArray);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
