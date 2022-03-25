/* exported reverseWord */

// input: single word as a js string
// output: js string in reversed word order.

// - create a variable named 'reverse' with value of empty string.
// - in order, start taking the last index of a string,
//   until the index of string is less than 0.
// - with the each index, from last, input the value of index to
//   empty variable 'reverse'.
// - return variable reverse as a return value.

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
