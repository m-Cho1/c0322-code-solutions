/* exported initial */

// input: any js array
// output: a new array containing all elements of the array EXCEPT the last element.

// - create an empty array 'withoutLast'
// - in the array, go through each index upto the second last index,
//   to access each elements at index.
// - each index, push the element to new array 'withoutLast'
// - return new array as a return value.

function initial(array) {
  var withoutLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    withoutLast.push(array[i]);
  }
  return withoutLast;
}
