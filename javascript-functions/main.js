function addTwoNumbers(x, y) {
  var sum = x + y;
  return sum;
}

var addTwoNumbersResult = addTwoNumbers(2, 3);

console.log('addTwoNumbersResult: ', addTwoNumbersResult);

function convertMinutesToSeconds(min) {
  var minToSec = min * 60;
  return minToSec;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds: ', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Beavis');
console.log('greet:', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(17, 42);
console.log('getArea: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName function: ', getFirstNameResult);

function getLastElement(array) {
  return (array[array.length - 1]);
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement function: ', getLastElementResult);
