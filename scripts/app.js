/* let myLibrary = [];
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
  let newBook;
  let tempName = prompt("What Is The Name of This Book?");
  let tempAuthor = prompt("Who Is The Author Of This Book?");
  let tempNumber = prompt("Size Is'nt Everything... But How long Is It?");
  let tempStatus = prompt("Yes Or No... Did you Even Read It Bro?");
  if (tempStatus.toLowerCase() === "yes") {
    newBook = new Book(tempName, tempAuthor, tempNumber, true);
  } else if (tempStatus.toLowerCase() === "no") {
    newBook = new Book(tempName, tempAuthor, tempNumber, false);
  }

  myLibrary.push(newBook);
  isLibraryEmpty = false;
}
const buttonToAddBooks = document.querySelector("#addButton");
buttonToAddBooks.addEventListener("click", () => addBooksToLibrary()); */
document.querySelector(".buttons").addEventListener("click" , function() {
  document.querySelector(".popup").style.display = "flex";
})