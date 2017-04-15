//Validate US Telephone Numbers
//Return true if the passed string is a valid US phone number.
//The user may fill out the form field any way they choose as long as it is a valid US number.
//RegExp


function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}


console.log(telephoneCheck("555-555-5555"));
