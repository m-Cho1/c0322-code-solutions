/* exported swapChars */

// input: three parameters:
//         1. firstIndex (an integral JS number)
//         2. secondIndex (and integral JS number)
//         3. string (any JS string)

// output: string with characters at firstIndex and secondIndex swapped

// - split string into each character, and store them into a variable 'splitedStr'
// - after split into each character, splitedStr is an array with separated characters.
// - get the firstIndex of the splitedStr and store into a variable 'firstIdx'
// - set the firstIndex of splitedStr to the secondIndex of the splitedStr.
// - then set the secondIndex of splitedStr to firstIdx, so that the stored firstIndex
//   of the character will be replaced with the secondIndex of the splitedStr.
// - convert the splitedStr into string, joining each character into a single string,
//   store the result into a vairable 'joinedStr'
// - return the return value of 'joinedStr'

function swapChars(firstIndex, secondIndex, string) {
  var splitedStr = string.split('');
  var firstIdx = splitedStr[firstIndex];
  splitedStr[firstIndex] = splitedStr[secondIndex];
  splitedStr[secondIndex] = firstIdx;
  var joinedStr = splitedStr.join('');
  return joinedStr;
}
