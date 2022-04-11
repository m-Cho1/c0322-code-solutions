/* exported numVowels */

// - input: any JS string
// - output: number of vowel characters in a string

// - create a variable named 'totalVowels' with value of 0
// - go through each letter in a string.
// - if the letter is vowel ('a', 'e', 'i', 'o', 'u'),
//      - add 1 to variable'totalVowels'
// - return 'totalVowels' as a return value.

function numVowels(string) {
  var toLow = string.toLowerCase();
  var vowelCount = 0;
  for (var i = 0; i < toLow.length; i++) {
    if (toLow[i] === 'a' || toLow[i] === 'e' || toLow[i] === 'i' || toLow[i] === 'o' || toLow[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
