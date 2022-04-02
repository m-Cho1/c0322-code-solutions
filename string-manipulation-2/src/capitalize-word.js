/* exported capitalizeWord */
// input: js string
// output: js string with first character capitalized

// - convert input string into all lowercase using toLowerCase() method
// - store lowercased string into a new variable 'toLow'
// - check if toLow is strictly equal to string 'javascript',
//   change the string into proper form 'JavaScript'.
// - convert first character of variable by accessing the first index of variable.
// - store the first index capitalized and rest of word concatenated to new variable
//   named 'capFirstLetter.
// - return 'capFirstLetter' as a return value.

function capitalizeWord(word) {
  var toLow = word.toLowerCase();
  if (toLow === 'javascript') {
    return 'JavaScript';
  }
  var capFirstLetter = toLow[0].toUpperCase() + toLow.slice(1);
  return capFirstLetter;
}
