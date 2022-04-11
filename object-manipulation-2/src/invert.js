/* exported invert */

// input: any JS object
// output: a new object containing all properties of source,
//         but keys and values are inverted

// - create a new variable named 'result'
// - go through each keys in the source object
// - take the key and set it to it's value
// - vice versa, take the value and set it to key
// - store inverted keys and values into new variabel 'result'
// - return 'result' as a return value

function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}

// source[key] = the value of key(property name)
// key = the property name in the object
// result[] = new object to be added with reversed key and value
