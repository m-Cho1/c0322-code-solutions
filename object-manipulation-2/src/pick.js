/* exported pick */

// input: any JS object(source), and any JS string(keys).
// output: a new object containing all of the properties of source
//         listed in keys.

// - create a variable with empty object literal
// - go through the properties in the object (source)
// - then go through each elements in the keys array
// - compare each properties in the source object to each elements in
//   the keys array.
// - if the property name is equal to the element in the keys array,
//   AND the value of property of source object is not equal to undefined,
//     - set key value of source property is set to result object property
// - return 'reseult' as a return value.

function pick(source, keys) {
  var result = {};
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === prop && source[prop] !== undefined) {
        result[prop] = source[prop];
      }
    }
  }
  return result;
}
// console.log('value of prop in for in loop: ', prop);
// console.log('value in prop: ', source[prop]);
// console.log('value of [keys]', [keys], 'value of keys', keys);
