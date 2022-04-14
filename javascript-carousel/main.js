var $arrowLeft = document.querySelector('.arrow-left');
var $arrowRight = document.querySelector('.arrow-right');
var $image = document.querySelector('img');
var $dotsContainer = document.querySelector('.buttons');

var currentImageIndex = 0;
var imageArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var $allDots = document.querySelectorAll('.img-dot');

$arrowLeft.addEventListener('click', previousImgFunc);
$arrowRight.addEventListener('click', nextImgFunc);
$dotsContainer.addEventListener('click', indicatorFunc);

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
    // console.log('currentImageIndex: ', currentImageIndex, 'i: ', i);
    $allDots[i].className = 'far fa-circle';
    if (parseInt($allDots[i].getAttribute('id')) === currentImageIndex) {
      // console.log('if statement working');
      $allDots[i].className = 'fas fa-circle';
    }
  }
}

// function carousel() {
//   currentImageIndex++;
//   if (currentImageIndex === imageArr.length) {
//     currentImageIndex = 0;
//     // if currentImageIndex is equal to the length of the imgArr,
//     // set the currentImageIndex value to 0
//   }
//   changeDotColor();
//   console.log(currentImageIndex);
//   // change image below:
//   $image.getAttribute('src', imageArr[currentImageIndex]);

// }

// var interval = setInterval(carousel, 2000);
// // carousel();
