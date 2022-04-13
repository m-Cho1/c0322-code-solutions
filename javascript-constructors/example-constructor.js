function ExampleConstructor() {}
console.log('value of prototype property of ExampleConstructor: ', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor: ', typeof (ExampleConstructor.prototype));

var newFunction = new ExampleConstructor();
console.log('value of newFunction: ', newFunction);
console.log('instanceOf newFunction: ', (newFunction instanceof ExampleConstructor));
