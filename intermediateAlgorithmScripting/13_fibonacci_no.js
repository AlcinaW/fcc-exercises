//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

// use modulus to determine if number is even or odd
// somehow need to add everything together after checking
// two variables?

function sumFibs(num) {
  var previousNum = 0;
  var currentNum = 1;
  var result =  0;

  while (currentNum <= num) {
    if (currentNum % 2 !== 0) {
      result += currentNum;
    }
    currentNum += previousNum;
    previousNum = currentNum - previousNum;
  }
  return result;
}

sumFibs(4);
