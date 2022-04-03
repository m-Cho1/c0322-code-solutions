/* exported omit */

// input: two parameters
//        1. source : any JS object
//        2. keys : any JS array with strings
// output: a new object containing all of the properties of source
//         that ARE NOT listed in keys.

// -

// function omit(source, keys) {
//   var result = {};
//   for (var prop in source) {
//     // console.log('prop in source obj: ', prop);
//     for (var i = 0; i < keys.length; i++) {
//       // console.log('value of keys[i] ', keys[i]);
//     }
//   }
//   return result;
// }
