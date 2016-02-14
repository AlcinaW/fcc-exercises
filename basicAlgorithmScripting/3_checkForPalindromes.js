// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
// Use regex's mysterious powers to remove all non-alphanumeric characters, and then turn turn lowercase
  var originalString = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
  var newString = originalString.split('').reverse().join("");
  // If new string is same, return true
  //More efficient way is to check length for odd/even, then compare first to last character and move inwards
  if (newString === originalString) {
    return true;
  } else {
    return false;
  }
}

palindrome("race car");
