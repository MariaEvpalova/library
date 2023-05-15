function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    if (this.read)
        return `${this.title} by ${this.author}, ${this.pages} pages, read`;
    return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
}

let myLibrary = [];

const mainSection = document.getElementById('main-section');

function displaySingleBook(book) {
    const htmlCode = `
    <div class="book">
        <div class="text">
        <h1>${book.title}</h1>
        <div>Pages: ${book.pages}</div>
        <h2>${book.author}</h2>
        </div>
        <div class="buttons">
        <button><img src="icons/done.svg" alt="done"></button>
        <button><img src="icons/delete.svg" alt="delete"></button>
        </div>
    </div>`;
    mainSection.innerHTML += htmlCode;
}

function addBook(book) {
    myLibrary.push(book);
    displaySingleBook(book)
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());

const showFormButton = document.querySelector('header button');
const formContainer = document.getElementById('form-container');

showFormButton.addEventListener('click', function() {
    formContainer.classList.toggle('visible');
});

showFormButton.addEventListener('click', function() {
    showFormButton.classList.toggle('rotated');
});

const form = formContainer.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  addBook(new Book(title, author, pages, read));

  form.reset();
});