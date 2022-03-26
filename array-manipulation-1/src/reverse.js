/* exported reverse */

// input: any js array
// output: new array containing all elements in the array with REVERSE ORDER.

// - create an empty array 'reverses'
// - in the given array, start counting from the last index of the array,
//   until reaches the first index.
// - push each element at index, from last to first, into the new array 'reverses'
// - return 'reverses' as a return value.

function reverse(array) {
  var reverses = [];
  for (var i = array.length - 1; i > -1; i--) {
    reverses.push(array[i]);
  }
  return reverses;
}
