function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let myLibrary = [];

function changeReadButton(event) {
    if (event.target.src.includes('undone'))
        event.target.src = event.target.src.replace('undone', 'done');
    else event.target.src = event.target.src.replace('done', 'undone');
}

function deleteBookCard(event) {
    const deletedCard = event.target.parentNode.parentNode.parentNode;
    const deletedHeader = deletedCard.querySelector('h1').innerText;
    myLibrary = myLibrary.filter((obj) => obj.title !== deletedHeader);
    deletedCard.remove();
}

function displaySingleBook(book) {
    const htmlCode = `
    <div class="book">
        <div class="text">
        <h1>${book.title}</h1>
        <div>Pages: ${book.pages}</div>
        <h2>${book.author}</h2>
        </div>
        <div class="buttons">
        <button><img src="icons/undone.svg" alt="done"></button>
        <button><img src="icons/delete.svg" alt="delete"></button>
        </div>
    </div>`;

    let container = document.createElement('div');
    container.innerHTML = htmlCode;

    const containerChildren = container.children;
    const readButton = containerChildren[0].querySelectorAll('button')[0];
    const deleteButton = containerChildren[0].querySelectorAll('button')[1];
    const readIcon = readButton.querySelector('img');
    readIcon.src = book.read ? 'icons/done.svg' : 'icons/undone.svg';

    document.getElementById('main-section').appendChild(containerChildren[0]);

    readButton.addEventListener('click', changeReadButton);
    deleteButton.addEventListener('click', deleteBookCard);
}

function addBook(book) {
    myLibrary.push(book);
    displaySingleBook(book);
}

const showFormButton = document.querySelector('header button');
const formContainer = document.getElementById('form-container');

showFormButton.addEventListener('click', function () {
    formContainer.classList.toggle('visible');
});

showFormButton.addEventListener('click', function () {
    showFormButton.classList.toggle('rotated');
});

const form = formContainer.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBook(new Book(title, author, pages, read));

    form.reset();
    formContainer.classList.toggle('visible');
    showFormButton.classList.toggle('rotated');
});

addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
addBook(
    new Book(
        "Harry Potter and the Philosopher's Stone",
        'J.K. Rowling',
        352,
        true
    )
);
addBook(new Book('Dandelion Wine', 'Ray Bradbury ', 256, false));
addBook(new Book('Klara and the Sun', 'Kazuo Ishiguro', 320, false));
