//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
  //split the string into array
  //make pair arrays to check against? if letter exists in array checked against push other letter
  //but how to now which one is the one that is not already there?
  //switch statement, but will have to write for all scenarios
  //push all new arrays to array for 2d array
  //for each in the array check
  var letterArr = str.split(''),
      pairingArr = [];

      // letterArr.map(function(letter)) {
      //   pairingArr.push(letter.toUpperCase());
      // });

  // should return [["G", "C"], ["C","G"],["G", "C"]]
  return pairingArr;
}

pairElement("GCG");
