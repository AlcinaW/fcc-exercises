// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

//create array with numbers between 1 and the final number (what if it is a large number?)
//how to check if prime?
//what if create array of already existing prime numbers and compare?
//or check each by dividing by numbers in from of it -> if divisible, move to next number because not prime

//SIEVE -> divide by certain key numbers -> divide by 2? remove all possibilities
//https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

//start from 2 because all numbers can divide by 1

function sumPrimes(num) {
  var primeArr=[];

  for (var i = 2; i <= num; i++){
    if(isPrimeNum(i)) {
      primeArr.push(i);
    }
  }
  return primeArr.reduce(function(a,b) {
    return a + b;
  });

  function isPrimeNum(num) {
    for (var x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
}

sumPrimes(10);
