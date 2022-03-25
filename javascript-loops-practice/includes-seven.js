/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (value === 7) {
      return true;
    }
  }
  return false;
}
