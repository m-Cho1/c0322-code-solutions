/* exported omit */

// input: two parameters
//        1. source : any JS object
//        2. keys : any JS array with strings
// output: a new object containing all of the properties of source
//         that ARE NOT listed in keys.

// - create a variable 'omit' with empty object literal.
// - go through the keys(prop) in the source object.
// - if the key(prop) of source object is not included in the elements of the key array,
//      = assign thr value of the key(prop) at source object to omit object
// - return 'omit' as a return value.

function omit(source, keys) {
  var omit = {};
  for (var prop in source) {
    if (!keys.includes(prop)) { // if property name is not included (! operator) in the keys array
      omit[prop] = source[prop]; // add property name of source object to omit object
    }
  }
  return omit;
}
