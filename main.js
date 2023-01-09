//Array to track the books
let myLibrary = [];

//Object Contructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//Prototype info function to display book information
Book.prototype.info = function () {
  return (
    `${this.title} by ${this.author}, ${this.pages} pages, ` +
    (this.isRead ? "already read" : "not read yet")
  );
};

//Function to Add a book to the library array

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

//Testing the Function
let theHobbit = new Book("The Hobbit", "J.R.R Tolken", 294, true);

let theDrawingOfThree = new Book(
  "The Drawing Of Three",
  "Stephan King",
  452,
  false
);

addBookToLibrary(theHobbit);

addBookToLibrary(theDrawingOfThree);

console.log(myLibrary);

