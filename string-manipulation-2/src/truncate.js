/* exported truncate */

// input: number and string
// output: shorthand version of string with number of characters with ellipsis.

// - cut strings from start to certain section of characters using slice method.
// - sotre the cutted strings into new variable 'wordCut'.
// - append ellipsis to new variable 'wordCut' by concatenating them.
// - return new variable 'wordCut' as a return value.

function truncate(length, string) {
  var wordCut = string.slice(0, length);
  return wordCut + '...';
}
