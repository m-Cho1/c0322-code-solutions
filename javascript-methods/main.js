var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue: ', maximumValue);

var heroes = [
  'Iron man',
  'Spiderman',
  'Thor',
  'Hawkeye'
];

var randomNumber = (Math.random() * heroes.length);
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

// Array Methods

var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rolling'
  },
  {
    title: 'JavaScript & JQuery',
    author: 'Jon Duckett'
  },
  {
    title: 'HTML & CSS',
    author: 'Jon Duckett'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of the library: ', library);

// string methods
var fullName = 'Minji Cho';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName: ', sayMyName);
