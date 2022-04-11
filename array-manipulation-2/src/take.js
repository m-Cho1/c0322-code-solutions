/* exported take */

// input: two parameters: any JS array, and count, for number of elements
//        to take from the beginning of the array.
// output : a new array with the first count elemnts of the input array

// - cut the first count of the array, then store the cutted array into
//    a new variabled named 'curArray'.
// - return 'cutArray' as a return value.

function take(array, count) {
  var cutArray = array.slice(0, count);
  return cutArray;
}
