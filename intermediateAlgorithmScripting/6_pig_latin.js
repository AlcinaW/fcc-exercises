//Translate the provided string to pig latin.

function translatePigLatin(str) {
  //split original word into array
  //create array of vowels to check against
  var letters = str.split(''),
      vowels = ['a','e','i','o','u'];
      //check if the first character of letters is vowel
      if (vowels.includes(str.charAt(0))) {
        //join the letter array (or str) with "way" on end
        return letters.join('') + 'way';
      }
      //check consonant cluster with while loop for not vowels
      while(true) {
        //check if vowel, if not, push to end, splice first letter
        if(!vowels.includes(letters[0])) {
          letters.push(letters.splice(0,1));
        } else {
          //stops when encounter vowel
          break;
        }
      }
      //joins updated array with "ay"
      str = letters.join('') + 'ay';
      return str;
}

translatePigLatin("consonant");
