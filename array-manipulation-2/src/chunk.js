/* exported chunk */

// input: any JS array, and size(a positive integer) indicating desried array size
// ouput: a new array of arrays.

// - create a new variabley with empty array named 'results'.
// - go through each elements in the array, but go through by the 'size' value.
// - each itearation, extract the elements in the array by selecting
//   based on the 'size' value.
// - store extracted elements in the variable 'splits'.
// - sotre 'splits' into the 'results' array.
// - return 'results' as a return value.

function chunk(array, size) {
  var results = [];
  for (let i = 0; i < array.length; i += size) {
    var splits = array.slice(i, i + size);
    results.push(splits);
  }
  return results;
}
