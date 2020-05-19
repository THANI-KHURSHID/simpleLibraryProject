let myLibrar = [];
function Book(name, author, noOfPages, isRead) {
  this.name = name;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
  this.info = function () {
    if (isRead) {
      return `${this.name}, wriiten by ${this.author}, is ${this.noOfPages} pages long, read. `;
    } else {
      return `${this.name} , wriiten by ${this.author}, is ${this.noOfPages} pages long, not read yet. `;
    }
  };
}
function addBooksToLibrary() {
  prompt("What Will The Inquisitive Reader Do Today...?");
}
//addBooksToLibrary();
