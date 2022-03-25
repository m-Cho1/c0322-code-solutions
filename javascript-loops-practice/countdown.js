/* exported countdown */
function countdown(number) {
  var returnValue = [];
  for (var i = number; i >= 0; i--) {
    returnValue.push(i);
  }
  return returnValue;
}
