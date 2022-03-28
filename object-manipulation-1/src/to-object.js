/* exported toObject */

// input: an array containing two elements: a string key and value.
// output: an object with one property and value from argument.

// - create new empty object literal named 'obj'
// - create a new variable name 'propKey', and
//   assign first index of element from the given array.
// - create another new variable name 'value' and
//   assign the second index of element from the given array.
// - store variable 'propKey' as property of an empty object literal 'obj', and
//   assign variable 'value' as a value of the propKey property's value.
// - return object literal 'obj' as a return value.

function toObject(keyValuePair) {
  var obj = {};
  var propKey = keyValuePair[0];
  var value = keyValuePair[1];
  obj[propKey] = value;
  return obj;
}
