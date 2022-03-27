/* exported getKeys */

// input: any js object
// output: an array of object's property keys

// - create empty array named 'keys'
// - for the given object, go through each properties in the object
// - add keys from the object into empty array 'keys'
// - return keys array as return value

function getKeys(object) {
  var keys = [];
  for (var prop in object) {
    keys.push(prop);
  }
  return keys;
}
