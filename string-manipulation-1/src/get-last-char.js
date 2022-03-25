/* exported getLastChar */

// pseudocode:

// input : any type of js sting.
// output: the last character of a string.

//  - when given a string, go for the last index of a string.
//  - return the last index of a string as a return value.

function getLastChar(string) {
  return string[string.length - 1];
}
