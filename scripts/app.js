//Variable
let myLibrary = [];
let author_name = "";
let book_name = "";
let pages_number = 0;
const submitButton = document.querySelector(".btn");
const buutonToOpenForm = document.querySelector(".open-button");
const buttonToCloseForm = document.querySelector(".cancel");
const authorTextField = document.getElementById("author-name-form");
const bookNameTextField = document.getElementById("book-name-form");
const numberOfPagesTextField = document.getElementById("pages-form");
let readStatus = false;
/*As Far as Style Guides Go. This is 
the Worst SHit I have Ever written. Underscope,hyphone,
came_case. MAke up Your Fucking Mind*/
/*Constructor */
class Book {
  constructor(name, author, noOfPages, isRead) {
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
}

/**TODO:A function to check if all inputs have been provided. */
function checkAllInputs() {}
//Shows The Form
buutonToOpenForm.addEventListener("click", () => {
  document.getElementById("add-books").style.display = "block";
});
//Closes The Form
buttonToCloseForm.addEventListener("click", () => {
  document.getElementById("add-books").style.display = "none";
  if (document.getElementById("bookIsRead").checked) {
    readStatus = true;
  }
  addBooksToLibrary(book_name, author_name, pages_number, readStatus);
  //checkAllInputs();
});
//Sets Text Field Value To Var
authorTextField.onkeyup = function () {
  author_name = this.value;
};
bookNameTextField.onkeyup = function () {
  book_name = this.value;
};
numberOfPagesTextField.onkeyup = function () {
  pages_number = Number(this.value);
};
function addBooksToLibrary(
  author_name_temp,
  book_name_temp,
  pages_number_temp,
  readStatus_temp
) {
  let newBook;
  newBook = new Book(
    author_name_temp,
    book_name_temp,
    pages_number_temp,
    readStatus_temp
  );
  myLibrary.push(newBook);
  document.getElementById("testing").innerHTML = render();
}
//Added A WAY TO Close Form With CLicking ANywhere
document.querySelector(".container").addEventListener("click", function () {
  document.getElementById("add-books").style.display = "none";
});
function render() {
  return JSON.stringify(myLibrary, true, 2) + "<br/>";
}
/*I ask my family and friends to not judege me for this code.
 This is not me. I will edit it at some point.*/
