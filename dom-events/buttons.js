function handleClick(event) {
  console.log('button clicked');
  console.log('mouse event: ', event);
  console.log(event.target);
}

var click = document.querySelector('.click-button');
click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('mouse event: ', event);
  console.log(event.target);
}

var hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('botton double-clicked');
  console.log('mouse event: ', event);
  console.log(event.target);
}

var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
