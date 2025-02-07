const myLibrary = [];

function Book(title, author, pagenum, rating) {
  this.title = title;
  this.author = author;
  this.pagenum = pagenum;
  this.rating = rating;
  this.read = false;
}

// (Optional) Method to display book information in a formatted string
Book.prototype.displayInfo = function () {
  return `${this.title} by ${this.author}, ${this.pagenum} pages, rated ${this.rating}/10. Read: ${this.read ? 'Yes' : 'No'}`;
};

// Function to add a new book to the library array
function addBookToLibrary(title, author, pagenum, rating) {
  const newBook = new Book(title, author, pagenum, rating);
  myLibrary.push(newBook);
}

// Function to display all books in the library on the page
function displayBooks() {
  const libraryContainer = document.getElementById('library-container');
  // Clear previous content
  libraryContainer.innerHTML = '';

  // Loop through the library array and create a card for each book
  myLibrary.forEach((book, index) => {
    // Create a new div element for the book card
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    // Set the inner HTML for the card
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pagenum}</p>
      <p>Rating: ${book.rating}/10</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
    `;

    // Append the book card to the container
    libraryContainer.appendChild(bookCard);
  });
}

// Function to remove a book from the library array
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

// Add an event listener to the form for client-side processing
document.getElementById('bookForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting the default way (page reload)

  // Get the values from the form inputs
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pagenum = document.getElementById('pagenum').value;
  const rating = document.getElementById('rating').value;

  // Add the new book to the library array
  addBookToLibrary(title, author, pagenum, rating);

  // Update the displayed list of books
  displayBooks();

  // Optionally, reset the form fields for the next entry
  event.target.reset();
});
