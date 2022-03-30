var isLightOn = true;

var buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', changeColor);

function changeColor() {
  isLightOn = !isLightOn;
  if (isLightOn === true) {
    document.querySelector('button').className = 'style-button-on';
    document.querySelector('body').className = 'color-on-background';
  } else {
    document.querySelector('button').className = 'style-button-off';
    document.querySelector('body').className = 'color-off-background';
  }
}
