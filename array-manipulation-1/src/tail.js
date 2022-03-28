/* exported tail */

// input: any js array
// output: a new array containing all elements EXCEPT
//         the first elemet of the array.

// - create an empty array name 'afterFirst'.
// - for each array, start counting from second index of the array.
// - skip the first index of the array.
// - counting stops when reaches to the last index of the array.
// - push each element at each index from an array into a new array 'afterFirst'.
// - return afterFirst as a return value.

function tail(array) {
  var afterFirst = [];
  for (var i = 1; i < array.length; i++) {
    afterFirst.push(array[i]);
  }
  return afterFirst;
}
