var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', clickCallBack);

function clickCallBack(event) {
  if (event.target && event.target.tagName === 'BUTTON') {
    var closestEl = event.target.closest('.task-list-item');
    console.log('closest .task-list-item ', closestEl);
    closestEl.remove();
  }

  console.log('event.target ', event.target);
  console.log('event.target.tagName ', event.target.tagName);
}
