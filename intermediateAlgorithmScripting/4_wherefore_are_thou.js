//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

//hasOwnProperty

function whatIsInAName(collection, source) {
  // What's in a name?
  //define keys to match to
  var sourceKeys = Object.keys(source);

  return collection.filter(function(obj) {
    //tell filter what to filter out, T or F
      return sourceKeys.every( function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
  });
  //output object that matches
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
