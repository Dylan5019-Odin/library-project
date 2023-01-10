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
    let book_card = document.createElement("div");
    book_card.id = `book_${index}`;
    book_card.className = `card`;
    library.append(book_card);

    let title = document.createElement("h1");
    title.innerText = book.title;
    book_card.appendChild(title);

    let author = document.createElement("p");
    author.innerHTML = `Author: <span>${book.author}</span>`;
    book_card.appendChild(author);

    let pages = document.createElement("p");
    pages.innerHTML = `Length: <span>${book.pages} pages long</span>`;
    book_card.append(pages);

    let bookRead = document.createElement("p");

    if (book.isRead) {
      bookRead.innerHTML = `Status: <span>Read</span>`;
      bookRead.classList = "book-status-read";
    } else {
      bookRead.innerHTML = `Status: <span>Not Read</span>`;
      bookRead.classList = "book-status-not-read";
    }

    let removeBook = document.createElement('div');
    removeBook.classList = "remove-book";
    removeBook.innerHTML = '<span>&times;</span>';
    book_card.append(removeBook);

    book_card.append(bookRead);
  });
};

// Code used to control displaying the modal

let modal = document.getElementById("myModal");

let modalBtn = document.getElementById("new-book-btn");

let span = document.querySelector(".close");

modalBtn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


//Add New Book - Form Submit Handling

const formHandler = (event) => {
  event.preventDefault();

  // Check If Form is Valid
  let form = document.getElementById("newBookForm");
  let formStatus = form.checkValidity();
  form.reportValidity();

  if (formStatus) {
    //Retrieve Values From The Form
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let readStatus = document.querySelector('input[name="readStatus"]:checked');
    let isRead = readStatus.id == "notRead" ? false : true;

    let newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);

    let library = document.querySelector(".library");
    library.innerHTML = "";

    displayBook();

    modal.style.display = "none";
  }
};

document.getElementById("addBookBtn").addEventListener("click", formHandler);


// Render Books When Page Loads
displayBook();
