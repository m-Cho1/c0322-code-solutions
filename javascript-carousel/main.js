var $arrowLeft = document.querySelector('.arrow-left');
var $arrowRight = document.querySelector('.arrow-right');
var $image = document.querySelector('img');
var $dotsContainer = document.querySelector('.buttons');

var imageArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var $allDots = document.querySelectorAll('.img-dot');

// var $dot1 = document.querySelector('#0');
// var $dot2 = document.querySelector('#1');
// var $dot3 = document.querySelector('#2');
// var $dot4 = document.querySelector('#3');
// var $dot5 = document.querySelector('#4');

$arrowLeft.addEventListener('click', previousImgFunc);
$arrowRight.addEventListener('click', nextImgFunc);
$dotsContainer.addEventListener('click', indicatorFunc);

var currentImageIndex = 0;

function nextImgFunc() {
  currentImageIndex++;
  if (currentImageIndex >= imageArr.length) {
    currentImageIndex = 0;
  }
  $image.setAttribute('src', imageArr[currentImageIndex]);
  changeDotColor();
}

function previousImgFunc() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = imageArr.length - 1;
  }
  $image.setAttribute('src', imageArr[currentImageIndex]);
  changeDotColor();
}

function indicatorFunc(event) {
  if (event.target.tagName === 'I') {
    currentImageIndex = parseInt(event.target.getAttribute('id'));
    $image.setAttribute('src', imageArr[currentImageIndex]);
    changeDotColor();
  }
}

function changeDotColor() {
  for (var i = 0; i < $allDots.length; i++) {
    console.log('currentImageIndex: ', currentImageIndex, 'i: ', i);
    $allDots[i].className = 'far fa-circle';
    if (parseInt($allDots[i].getAttribute('id')) === currentImageIndex) {
      console.log('if statement working');
      $allDots[i].className = 'fas fa-circle';
    }
  }
}
