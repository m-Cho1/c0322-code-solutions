var clicks = 0;

var buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', changeColor);

function changeColor() {
  clicks++;
  if (clicks % 2 === 0) {
    document.querySelector('button').className = 'style-button-on';
    document.querySelector('body').className = 'color-on-background';
  } else if (clicks % 2 === 1) {
    document.querySelector('button').className = 'style-button-off';
    document.querySelector('body').className = 'color-off-background';
  }
}
