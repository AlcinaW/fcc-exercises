// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// Preserve the case of the original word when you are replacing it.

function myReplace(str, before, after) {
  //if the first character is the same as self, but uppercase
  if (before[0] === before[0].toUpperCase())
    //take the after first letter, uppercase, add to slice end of after word
    after = after.charAt(0).toUpperCase() + after.slice(1);
  //return string with before word replaced with new after word
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
