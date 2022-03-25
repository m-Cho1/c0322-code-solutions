/* exported isVowel */

// input: a single js string character
// output: A Boolean value:
//         wheter the character(upper and lower cased) is vowel or not.

// - convert the input character into lowercase, using toLowerCase() method.
// - store the lowercased character into variable called checkVowel
// - using the variable isVowel, check for the character condition:
//    - if checkVowel contains a vowel character ('a' or 'e' or 'i' or 'o' or 'u'):
//        - return a Boolean value of true.
//    - if checkVowel does NOT contain a vowel character:
//        - return a Boolean value of false.

function isVowel(char) {
  var checkVowel = char.toLowerCase();
  if (checkVowel === 'a' || checkVowel === 'e' || checkVowel === 'i' || checkVowel === 'o' || checkVowel === 'u') {
    return true;
  } else {
    return false;
  }
}
