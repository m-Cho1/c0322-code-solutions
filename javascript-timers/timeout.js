var $message = document.querySelector('.message');

var timeOut = setTimeout(timeoutFunc, 2000);
function timeoutFunc() {
  $message.textContent = 'Hello there';
  clearTimeout(timeOut);
}
