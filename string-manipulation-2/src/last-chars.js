/* exported lastChars */

// input: two parameters: length (an itegral JS number),
//                        string (any JS string)
// output: the last length characters of string

// - access the characters of the string from the last, then
//   extract the last length of characters from the input string
// - store the extracted last characters into a variable 'lastChars'
// - return 'lastChars' as a return value

function lastChars(length, string) {
  var lastChars = string.substring(string.length - length); // counting from last
  // console.log('value of lastChars: ', lastChars);
  return lastChars;
}
