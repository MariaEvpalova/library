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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());