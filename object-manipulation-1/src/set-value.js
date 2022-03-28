/* exported setValue */

// input: 3 different parameters with object, key, value
// output: object literal with new properties and values added

// - add object's new property and values/
// - return object with new value as a return value.

function setValue(object, key, value) {
  object[key] = value;
  return object;
}
