var $countDown = document.querySelector('.countdown-display');

var counter = 4;

var interval = setInterval(countDown, 1000);

function countDown() {
  counter--;
  if (counter === 0) {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  } else {
    $countDown.textContent = counter;
  }
}
