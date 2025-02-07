// Create a new element
const heading = document.createElement("h1");



function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read !== undefined ? read : true;
}


const hobbit = new Book("the Hobbit", "JRR", 295, true);


const bookDescription = `Title: ${hobbit.title}, Author: ${hobbit.author}, Pages: ${hobbit.pages}, Read: ${hobbit.read}`;

heading.textContent = bookDescription;

// Add the element to the body of the page
document.body.appendChild(heading);