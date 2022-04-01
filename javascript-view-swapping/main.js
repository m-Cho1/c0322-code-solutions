var tabContainer = document.querySelector('.tab-container');
var allTabElements = document.querySelectorAll('.tab');
var allViewElements = document.querySelectorAll('.view');

tabContainer.addEventListener('click', matchTab);

function matchTab(event) {
  // if (!event.target.matches('.tab')) {
  //   return;
  // }

  // var matching = allTabElements[0].matches('.tab');
  // if (!matching) {
  //   return;
  // }
  // console.log('matches');
  for (var i = 0; i < allTabElements.length; i++) {
    if (allTabElements[i] === event.target) {
      allTabElements[i].className = 'tab active';
    } else {
      allTabElements[i].className = 'tab';
    }
  }
  if (event.target.matches('.tab')) {
    var getAtr = event.target.getAttribute('data-view');
    for (var j = 0; j < allViewElements.length; j++) {
      if (allViewElements[j].getAttribute('data-view') === getAtr) {
        allViewElements[j].className = 'view';
      } else {
        allViewElements[j].className = 'view hidden';
      }
    }
  }
}
