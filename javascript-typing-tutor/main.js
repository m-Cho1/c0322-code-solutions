
var $letters = document.querySelectorAll('span');
document.addEventListener('keydown', typeStart);

var correctLetterCount = 0; // for keeping track of the current index of the current letter.
function typeStart(event) {
  var $currentLetter = $letters[correctLetterCount];
  if (event.key === $letters[correctLetterCount].textContent) {
    $currentLetter.classList.add('color-correct');
    $currentLetter.classList.remove('cursor');
    $currentLetter.classList.remove('color-wrong', 'cursor-wrong');
    correctLetterCount++;
    $letters[correctLetterCount].classList.add('cursor');
  } else {
    $currentLetter.classList.add('cursor-wrong');
    $currentLetter.classList.add('color-wrong');

  }
}

// - new variable to keep track of the current index of the current letter
//   (the user needs to type)
// - compare key property of the event object to the textContent of the span for
//   the current letter.
// - if the letter was typed correctly, apply class for correct word (.color-correct),
//   and move the cursor to the next letter, and increment your variable to keep track
//   of the current index.
//      = since the next letter is now the letter the user should type.
// - if letter was typed incorrectly, apply class for wrong word,
//   don't increment correctLetterCount.
