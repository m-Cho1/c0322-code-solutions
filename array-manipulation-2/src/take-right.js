/* exported takeRight */

// input: any JS array with a count (a poisitive number) to take from the end of array
// output: a new array that contains the last count elements from the input array

// - take count value of the elements from the array by
//   starting from the end of an array.
// - positive value starts the count from left, and negative value starts from right.
// - store the last counts of elements into a variable 'fromRight'
// - return 'fromRight' as a return value

function takeRight(array, count) {
  var fromRight = array.slice(-count);
  return fromRight;
}
