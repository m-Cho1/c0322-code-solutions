var letters = document.querySelectorAll('span');
var cursor = document.querySelector('.cursor');

document.addEventListener('keydown', typeStart);
// itterate over string: for: of loop w/ counter variable
// string[counter] = underlined
// => if: string[counter] === event.key
// change the color to correct, ++counter, remove underline @ counter-1
// else: change color to red.
console.log(letters[0].textContent);
function typeStart(event) {
  if (event.key === letters[0].textContent) {
    letters[0].className = '.color-correct';
  }
  console.log(event.key);
}

// - query all span elements from HTML, store in a variable 'letters'
// - query element by calling class name '.cursor', and store in a variable 'cursor'

//   - create addEventListener for when any key is pressed, (keydown event) and create a   callback function.

// - callback function named 'typeStart(event)'
//   - in the function's code block:

//     - iterate over letters by each index, and compare with the original string.
//     - if first index of letters is correct to first letter of string,
//   apply css class (.color - correct) to letter, and move the cursor
//   to the next letter.
//     - if wrong key  is pressed(key is not equal to string),
//   apply css class (.color - wrong) to the letter, and cursor stays.
