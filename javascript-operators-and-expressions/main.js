var width = 5;
var height = 9;

var area = width * height;

console.log('value of area:', area);
console.log('type of area:', typeof (area));

var bill = 10;
var payment = 40;

var change = payment - bill;

console.log('value of change:', change);
console.log('type of change:', typeof (change));

var quizzes = 7;
var midterm = 80;
var final = 99;

var grade = ((quizzes + midterm + final) / 3);

console.log('value of grade:', grade);
console.log('type of grade:', typeof (grade));

var firstName = 'Minji';
var lastName = 'Cho';
var fullName = `${firstName} ${lastName}`;

console.log(`value of fullName: ${fullName}`);
console.log(`typeof fullName: ${typeof (fullName)}`);

var pH = 5;
var isAcidic = (pH < 7);

console.log(`value of isAcidic: ${isAcidic}`);
console.log(`typeof isAcidic: ${typeof (isAcidic)}`);

var headCount = 17;
var isSparta = (headCount === 300);

console.log(`value of isSparta: ${isSparta}`);
console.log(`typeof isSparta ${typeof (isSparta)}`);

var motto = fullName;
motto = fullName + ' is the GOAT';

console.log(`value of motto: ${motto}`);
console.log(`typeof motto: ${typeof (motto)}`);
