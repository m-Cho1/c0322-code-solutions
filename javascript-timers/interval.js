var $countDown = document.querySelector('.countdown-display');

var counter = 4;

setInterval(countDown, 1000);

function countDown() {
  counter--;
  if (counter === 3) {
    $countDown.textContent = '3';
  }
  if (counter === 2) {
    $countDown.textContent = '2';
  }
  if (counter === 1) {
    $countDown.textContent = '1';
  }
  if (counter === 0) {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
  }
  clearInterval();
}
