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

function getBorrowersForBook(book, accounts) {
  let bookBorrowers = [];
  for (let i = 0; i < book.borrows.length; i++){
    for (let j=0; j< accounts.length; j++){
      if (book.borrows[i].id === accounts[j].id){
        const result = {...book.borrows[i], ...accounts[j]}
        bookBorrowers.push(result);
      }
    }
  }
  bookBorrowers.splice(10);
  return bookBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
