/* exported compact */

// input: any type of js array
// output: a new array with values with condition.

// - create a new empty array 'newOutput'
// - for the given array, go through each index.
// - if element at index is truthy value,
//   push the index to new array 'newOutput'
// - return the return value of the newOutput.

function compact(array) {
  var newOutput = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newOutput.push(array[i]);
    }
  }
  return newOutput;
}
