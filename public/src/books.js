function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //creates two arrays
  let booksBorrowed = [];
  let booksReturned = [];
  //loops through books pushes each book to its appropriate array
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
  //sets up blank array
  let bookBorrowers = [];
  //for loop that goes through each books borrowed object and each account
  for (let i = 0; i < book.borrows.length; i++){
    for (let j=0; j< accounts.length; j++){
      if (book.borrows[i].id === accounts[j].id){
        //created object with borrowed book and account and push object into bookBorrows array
        const result = {...book.borrows[i], ...accounts[j]}        
        bookBorrowers.push(result);
      }
    }
  }
  //splice bookBorrowers array to 10 items and return it
  bookBorrowers.splice(10);
  return bookBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
