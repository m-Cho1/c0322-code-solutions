var buttonModal = document.querySelector('.button-open-modal');
var hidden = document.querySelector('.hidden');
var buttonNo = document.querySelector('.button-no');

buttonModal.addEventListener('click', openPopUp);
buttonNo.addEventListener('click', closePop);

function openPopUp() {
  hidden.className = 'popup-container';
}

function closePop() {
  hidden.className = 'hidden';
}
