// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/\s/g, "-").replace(/_/g, "-").replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');
