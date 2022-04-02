/* exported drop */

// input: Any JS array and count,(number of elements to drop from the beginning
//        of the input array)
// output: a new array that contains the rest of the element after the first count
//         is dropped.

// - cut the first count of the array
// - store the rest count of the array into a vairable 'afterDrop'
// - return 'afterDrop' as a return value

function drop(array, count) {
  var afterDrop = array.slice(count);
  return afterDrop;
}
