// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  //variables to store character codes, missing letter, and array that the letters are split into
  var compare = str.charCodeAt(0),
      missing,
      letterNum = str.split('');
      //map through array of character codes, matches, count up
  letterNum.map(function(letter, i) {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      //if doesn't match, store in missing variable
      missing = String.fromCharCode(compare);
    }
  });
  //return missing, or if no missing characters, return undefined
  return missing;
}

fearNotLetter("abce");
