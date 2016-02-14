// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

function truncate(str, num) {
  // Check if number is greater than or equal to the string's length
  // If true, just return the string as-is
  if (num >= str.length){
    return str;
  // Else, if the number is less than 3, make a new string that is the length of num, add "..."
  } else if (num < 3) {
    var newstr = str.substring(0, num);
    return newstr + "...";
    // Otherwise, use take off 3 from num, add "..."
  } else {
    var newNum = num -3;
    var newStr = str.substring(0, newNum);
    return newStr + "...";
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
