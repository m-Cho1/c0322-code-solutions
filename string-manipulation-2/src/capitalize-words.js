/* exported capitalizeWords */

// input: any js string
// output: string with every word in a string capitalized.

// - turn all letters in string lower cased, store the result into variable 'toLow'
// - separate each letter by sapce between words, store the result into variable 'splited'
// - create an emptry array literal 'result' to store new words after change
// - go throuh each array in splited, and capitalize the first index of each separted word,
//   and store them into variable 'capFirst'.
// - cut the rest of the words from 'splited' and store them into a new variable 'restWords'
// - concatenate 'capFirst' and 'restWords', and store them into 'result' array.
// - turn 'result' array into string using join() method, separated by space.
// - return the value of the 'result'

function capitalizeWords(string) {
  var toLow = string.toLowerCase();
  var splited = toLow.split(' ');
  var result = [];
  for (var i = 0; i < splited.length; i++) {
    var capFirst = splited[i][0].toUpperCase();
    var restWords = splited[i].slice(1);
    result[i] = capFirst + restWords;
  }
  return result.join(' ');

}
