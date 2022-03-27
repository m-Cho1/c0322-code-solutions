/* exported getValues */

// input: any js object
// output: an array of the object's property values.

// - create an empty arary named ' properties'
// - go through each properties in the object,
//   and access the values of the properties.
// - push the values at object properties into empty array 'properties'
// - retun 'properties' array as a return value

function getValues(object) {
  var properties = [];
  for (var val in object) {
    properties.push(object[val]);
  }
  return properties;
}
