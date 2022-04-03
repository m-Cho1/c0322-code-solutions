/* exported defaults */

// input: two parameters(target and source) that are any JS objects
// output: object that 'target' is modified

// - go through each keys in the source object
// - while going over keys in the source object, check if value at target property doesn't exist
// - if the value of key at target property is undefined,
//   then assign the value of key at source poperty to target object.
// - log the modified target object.

function defaults(target, source) {
  for (var prop in source) {
    if (target[prop] === undefined) { // if value at target property doesn't exist.
      target[prop] = source[prop]; // add the property of source prop into target object.
    }
  }
  // console.log('object target: ', target);
}
