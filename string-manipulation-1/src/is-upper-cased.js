/* exported isUpperCased */

// input: single word as js string
// output: return a Boolean value whether or not the word is upper cased

// - check for the word's condition:
//    - if the given word is uppercased:
//        -return Boolean value of true.
//    - else, if the word is NOT uppercased:
//        -return Boolean value of false.

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
