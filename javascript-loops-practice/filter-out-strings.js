/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    if (typeof (value) !== 'string') {
      noStrings.push(value);
    }
  }
  return noStrings;
}
