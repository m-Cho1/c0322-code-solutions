/* exported filterOutNulls */
function filterOutNulls(values) {
  var exceptNulls = [];
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    // console.log('item in values array', value);
    if (value !== null) {
      exceptNulls.push(value);
    }
  }
  return exceptNulls;
}
