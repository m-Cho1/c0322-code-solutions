/* exported getWords */

// input : a js string contains zero or more words, separated by spaces
// output: an array of js string.

// - conditional statement for empty word:
//    - if string is empty, no words, return empty array as return value.
// - outside of conditional statement:
//    - separate string of word/s by every space (' '), using split() method.
//    - store separated words into a new variable 'separate'
//    - return the new variable separate as a return value.

function getWords(string) {
  if (string === '') {
    return [];
  }
  var separate = string.split(' ');
  return separate;
}
