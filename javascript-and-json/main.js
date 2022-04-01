var books = [
  {
    isbn: '978-23459',
    title: 'book name 1',
    author: 'King Arthor'
  },
  {
    isbn: '978-45348',
    title: 'book name 2',
    author: 'Rolling'
  },
  {
    isbn: '978-57382',
    title: 'book name 3',
    author: 'Minji'
  }
];

console.log('array of books: ', books);
console.log('type of books :', typeof (books));

JSON.stringify(books);
console.log('JSON string of books array: ', JSON.stringify(books));

var student = '{ "id": 4351, "name": "student" }';
console.log('JSON string: ', student);
console.log('type of the string: ', typeof (student));

JSON.parse(student);
console.log('JSOn.parse: ', JSON.parse(student));
console.log('type of JSON.parse: ', typeof (JSON.parse(student)));
