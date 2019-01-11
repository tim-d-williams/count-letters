//function count letters
  //loop through string
    //output letters to object
    //update count of letter occurence in string


function countLetters(input) {
  var noSpaces = input.split(' ').join("");
  var output = {};
  for (var i = 0; i < noSpaces.length; i++) {
    if (!output[noSpaces[i]]) {
      output[noSpaces[i]] = 1;
    } else output[noSpaces[i]] += 1;
  }
  console.log(output);
}

countLetters("lighthouse in the house");