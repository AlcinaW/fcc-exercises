// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  //use Regex to match the entity, replace with the second part
  str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");

  return str;
}

convertHTML("Dolce & Gabbana");
