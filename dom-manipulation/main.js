var clicks = 0;

var buttonHot = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

buttonHot.addEventListener('click', clickIncrement);

function clickIncrement(event) {
  clickCount.textContent = 'Clicks: ' + clicks++;
  var temperature = null;
  if (clicks < 4) {
    temperature = 'cold';
  } else if (clicks < 7) {
    temperature = 'cool';
  } else if (clicks < 10) {
    temperature = 'tepid';
  } else if (clicks < 13) {
    temperature = 'warm';
  } else if (clicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  buttonHot.className = 'hot-button ' + temperature;
  // applying the other class name 'cold' that is stored in variable name temperature.
  clicks.textContent = 'Clicks: ' + clicks;
}
