// Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeat(str, num) {
  if (num > 0 ) {
  return str.repeat(num);
  } else {
    return "";
  }
}

repeat("abc", 3);
