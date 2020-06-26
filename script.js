//Notes: Best to define functions on the prototype of object
//Single instance of each function will be shared between all of the Student objects
//Way of setting the prototype of object is Object.create - returns a new object with the specified prototype
let library = [];

//Get title, author, #pages, and read or not
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let index = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//addToLibrary function is inheriting from book properties, then pushes to library
Book.prototype.addToLibrary = function () {
  library.push(this);
  return this;
};


const addBook = document.getElementById("addBook");
addBook.addEventListener("click", function () {
  let status = document.getElementById("status").checked ? "Read" : "Unread";
  //getting the value of the what's in the text box
  let title = document.getElementById("title").value;
  var clearTitle = (document.getElementById("title").value = "");

  let author = document.getElementById("author").value;
  var clearAuthor = (document.getElementById("author").value = "");

  let pages = document.getElementById("pages").value;
  var clearPages = (document.getElementById("pages").value = "");
  let book = new Book(title, author, pages, status);

  book.addToLibrary();
  //first you want to create the element list
  var li = document.createElement("li");
  li.innerText = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${status}`;

  console.log(library[index]);
  var remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = "Remove";
  li.append(remove);
  //to append it to our actual list get its name and append
  document.getElementById("library").append(li);
  index++;

  remove.addEventListener("click", function () {
    library.splice(this.parentNode.id, 1);
      this.parentNode.remove();
  });
});

//button to show form-popup
function toggleForm() {
  var form = document.getElementById("myForm");
  //gets the current value of display (none)
  var displaySetting = form.style.display;
  var formButton = document.getElementById("newBookBtn");

  //if form currently shows, hide it when button clicked
  if (displaySetting == "block") {
    //form visible hide it
    form.style.display = "none";
    formButton.innerText = "Add Book";
  } else {
    form.style.display = "block";
    formButton.innerText = "Hide Me";
  }
}

//book constructor and functions
function book(title, author, pageNum, read) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.read = read;
}

book.prototype.info = function () {
  return `${this.title} by ${this.author}. ${this.pageNum} pages`;
};

book.prototype.changeReadStatus = function () {
  this.read ? (this.read = false) : (this.read = true);
};
