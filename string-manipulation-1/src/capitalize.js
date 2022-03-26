/* exported capitalize */

// pseudocode:

// input: single word string
// output: Word with only the first character of a capitalized word.

// - convert the word to all lowercase, using toLowerCase method,
//   save the new lowercased letter into a variable called 'toLow'
// - access the first index of toLow variable.
// - convert the first index of toLow to capitalized letter.
// - concatenate the rest indexes of toLow to the capitalzed first index of toLow.
// - store the result of the concatenation into a variable called capFirstLetter.
// - return capFirstLetter as a return value.

function capitalize(word) {
  var toLow = word.toLowerCase();
  var capFirstLetter = toLow[0].toUpperCase() + toLow.slice(1);
  return capFirstLetter;
}
