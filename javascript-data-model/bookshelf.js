var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  // array literal is being assigned to variable bookshelf,
  // string value is assigned to author property
  { // opening curly brace for object literal
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('name of the author of the second book: ', bookshelf[1].author);
// log method of the console object is being called with
// two arguments:  string, and author property vlaue of bookshelf at 1
console.log('ISBN of the first book: ', bookshelf[0].isbn);
console.log('title of the third book: ', bookshelf[2].title);
