var student = {
  firstName: 'Minji',
  lastName: 'Cho',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;

console.log(`value of fullName: ${fullName}`);

student.linvesInIrvine = false;
student.previousOccupation = 'student';

console.log(`value of student.livesInIrvine: ${student.linvesInIrvine}`);
console.log(`vlaue of student.previousJob: ${student.previousOccupation}`);
console.log('value of student: ', student);

var vehicle = {
  make: 'Ford',
  model: 'Explorer',
  year: 2019
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log(`value of vehicle['color']: ${vehicle['color']}`);
console.log(`value of vehicle['isConvertible']: ${vehicle['isConvertible']}`);
console.log('value of entire vehicle: ', vehicle);

var pet = {
  name: 'Mac',
  type: 'Retreiver'
};

delete pet.name;
delete pet.type;

console.log('value of the pet', pet);
