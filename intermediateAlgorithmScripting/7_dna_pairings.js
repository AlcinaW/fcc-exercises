//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
  //each key has a value
  var letterPairs = { A: 'T', T: 'A', C: 'G', G: 'C'},
    //letter array with string split up (can technically skip this)
      letterArr = str.split('');
    //use map to read through letterArr, return character in original string + corresponding value
    return letterArr.map(function(letter) {
      return [letter, letterPairs[letter]];
    });
}

pairElement("GCG");
