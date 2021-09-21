function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let booksBorrowed = [];
  let booksReturned = [];
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      booksBorrowed.push(books[i]);
    } else{
      booksReturned.push(books[i]);
    }
  }
  return [booksBorrowed, booksReturned];
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
