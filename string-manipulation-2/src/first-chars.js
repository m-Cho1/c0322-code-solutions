/* exported firstChars */

// input: two parameters : length (integral JS number), and string (any JS string)
// output: the first length characters of string

// - extract the first number of characters from string,
//   depending on the input number of length.
// - store the first number of character into variable 'firstCharacters'
// - return the 'firstCharacters' as a return value

function firstChars(length, string) {
  var firstCharacters = string.slice(0, length);
  return firstCharacters;
}
