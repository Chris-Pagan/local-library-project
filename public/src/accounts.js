function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return result = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
  //for loop that checks if a book has been borrowed by an account
    for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].borrows.length; j++){
        if (account.id === books[i].borrows[j].id){
          numberOfBorrows++;
        }
      }  
    }
    //returns total number of borrowed books
    return numberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  // filters books still checked out
  let checkedOutBooks = books.filter((book) => book.borrows[0].returned === false);
  // filters checked out books by account id
  let accountBooks = checkedOutBooks.filter((book) => book.borrows[0].id === account.id);
  // loops thorugh accountBooks and matches checked out books to authors
  for (let i = 0; i < accountBooks.length; i++){
    for (let j = 0; j < authors.length; j++){
      if (accountBooks[i].authorId === authors[j].id){
        accountBooks[i].author = authors[j];
      }
    }
  }
  //returns array of checked out books by account 
  return accountBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
