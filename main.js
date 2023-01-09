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

//Displaying Each Book in the MyLibrary Array
const displayBook = () => {
  let library = document.querySelector(".library");

  myLibrary.forEach((book, index) => {
    let book_div = document.createElement("div");
    book_div.className = `book_${index}`;
    library.append(book_div);


    let title = document.createElement("h1");
    title.innerText = book.title;
    book_div.appendChild(title);

    let author = document.createElement("p");
    author.innerText = book.author;
    book_div.appendChild(author);   

    let pages = document.createElement("p")
    pages.innerText = `${book.pages} pages`;
    book_div.append(pages);


    let bookRead = document.createElement('p')
    if(book.isRead) {
        bookRead.innerText = `Read already`
    } else {
        bookRead.innerText = `Not Read Yet`;
    }
    book_div.append(bookRead);

  });
};

displayBook();
