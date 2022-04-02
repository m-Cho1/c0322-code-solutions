/* exported ransomCase */
// input: any ks string
// output: string with every-other character uppercased.

// - make string into all lowercase and store it into a new variable 'toLow'.
// - take toLow and split by ('') no space, so that
//   this will split the string into each character, stored in array.
// - store splited toLow into new variable 'split'
// - go through every other index of split variable, and
//   uppercase the every other character of 'split'
// - the value of split is in array format. switch the value of split
//   into string using toString() method, store that into new variable 'result'
// - return result as a return value.

function ransomCase(string) {
  var toLow = string.toLowerCase();
  var split = toLow.split('');
  for (var i = 1; i < split.length; i += 2) {
    split[i] = split[i].toUpperCase();
  }
  var result = split.join('');
  return result;
}
