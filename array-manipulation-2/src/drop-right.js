/* exported dropRight */

// input: any JS array with count (a positive integer number) of elements
//        to drop from the end of the array.
// output: a new array with the elements that are not dropped.

// - take the array, and extract the elements from the last index of an array
// - using negative value counts from the end of an array
// - starting from the first element of the array, but dropping from the last index of an array
// - store the extracted elements into the variable 'fromRight'
// - return 'fromRight' as a return value.

function dropRight(array, count) {
  var fromRight = array.slice(0, -count);
  return fromRight;
}
