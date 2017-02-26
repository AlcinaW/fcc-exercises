// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).


function truthCheck(collection, pre) {
  // Is everyone being true?
  //If pre exists in all == true, if not, false
  //switch?
  //WHAT IF THE PROPERTY EXISTS BUT THE VALUE IS EMPTY!?!!?!?! or undefined
  //collection.hasOwnProperty();
//   for(var key in collection) {
//     if(collection.hasOwnProperty(key)) {
//         collection[key];
//     }
// }


  // var pre = pre.toString();
  //
  // for (var i = 0; i < collection.length; i++) {
  //   if (!(pre in collection[i])) {
  //       console.log("NOOOO");
  //       return false;
  //     }
  //     else {
  //       return true;
  //     }
  //     return pre;
  //   }
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
