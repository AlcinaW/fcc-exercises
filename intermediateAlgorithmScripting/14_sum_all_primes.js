// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

//create array with numbers between 1 and the final number (what if it is a large number?)
//how to check if prime?
//what if create array of already existing prime numbers and compare?
//or check each by dividing by numbers in from of it -> if divisible, move to next number because not prime

//SIEVE -> divide by certain key numbers -> divide by 2? remove all possibilities
//https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

//start from 2 because 1 is not a prime number
//is there a better way to name the x/y?

function sumPrimes(num) {
  var primeArr=[]; //empty array to store numbers

  for (var i = 2; i <= num; i++){
    //if i is prime, push to primeArr
    if(isPrimeNum(i)) {
      //for each loop of this function, call isPrimeNum function
      //if isPrimeNum is returning true below, will push to primeArr
      primeArr.push(i);
    }
  }
  return primeArr.reduce(function(x,y) {
    return x + y;
  });

  function isPrimeNum(num) {
    for (var x = 2; x < num; x++) {
      //use modulus is 0, is false (not prime)
      if (num % x === 0) {
        return false; //break loop if 0
      }
    }
    return true; //is prime
  }
}

sumPrimes(10);
