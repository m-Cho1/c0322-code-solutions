/* exported isLowerCased */

// input: single word as js string
// output: return a Boolean value whether or not the word is lower cased

// - check for the word's condition:
//    - if the given word is lowercased:
//        -return Boolean value of true.
//    - else, if the word is NOT lowercased:
//        -return Boolean value of false.

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
