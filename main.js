//Array to track the books
let myLibrary = [];

//Object Contructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Functions Related to the Book Object

//Prototype info function to display book information
Book.prototype.info = function () {
  return (
    `${this.title} by ${this.author}, ${this.pages} pages, ` +
    (this.isRead ? "already read" : "not read yet")
  );
};

Book.prototype.toggleStatus = function () {
  this.isRead = !this.isRead;
};

//Function to Add a book to the library array

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

//Function To remove a book from the library
const removeBookFromLibrary = (index) => {
  myLibrary.splice(index, 1);
};


//Functions Related to Displaying the Books && Handling Book Related Events

//Function to add event handler for removing a book
const addRemoveEvent = () => {
  let removeBtns = document.querySelectorAll(".remove-book");

  removeBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      let bookIndex = button.parentElement.id.split("_")[1];
      removeBookFromLibrary(bookIndex);
      displayBook();
    });
  });
};

//Function to add event handler for toggling the read status of a book
const addToggleStatusEvent = () => {
  let toogleBtns = document.querySelectorAll(".book-toggle-btn");

  toogleBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      let bookIndex = button.parentElement.id.split("_")[1];
      myLibrary[bookIndex].toggleStatus();
      displayBook();
    });
  });
};

//Creating the HTML for Each Book in the MyLibrary Array
const generateDisplayHTML = () => {
  let library = document.querySelector(".library");
  library.innerHTML = "";

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
      title.classList = "book-status-read";
    } else {
      bookRead.innerHTML = `Status: <span>Not Read</span>`;
      title.classList = "book-status-not-read";
    }
    book_card.append(bookRead);

    let toggleRead = document.createElement("button");
    toggleRead.classList = "book-toggle-btn";
    toggleRead.innerHTML = `Toggle Read`;
    book_card.append(toggleRead);

    let removeBook = document.createElement("div");
    removeBook.classList = "remove-book";
    removeBook.innerHTML = "<span>&times;</span>";
    book_card.append(removeBook);
  });
};

// Function to display the HTML and Add Event Listeners to each book's elements

const displayBook = () => {
  generateDisplayHTML();
  addRemoveEvent();
  addToggleStatusEvent();
};



// Code Related to the Modal and Add Book Form

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

    form.reset();
    displayBook();

    modal.style.display = "none";
  }
};

document.getElementById("addBookBtn").addEventListener("click", formHandler);



//Displaying Example Data
let theHobbit = new Book("The Hobbit", "J.R.R Tolken", 294, true);
addBookToLibrary(theHobbit);
displayBook();
