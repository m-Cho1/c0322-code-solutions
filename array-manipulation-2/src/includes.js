/* exported includes */

// input: any JS array, and value to search for in the array
// output: a boolean value whether the value is included in the input array

// - go through each element in the array
// - if each values at array matches with the value of the element in the array,
//   return true.
// - otherwise, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
