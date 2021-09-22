function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return result = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
    for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].length; j++){
        if (account.id === books[i].borrows[j].id){
          numberOfBorrows++;
        }
      }  
    }
    return numberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = [];
  for (let i = 0; i < account.borrows.length; i++){
    for (let j=0; j < books.length; j++){
      
    }
  }
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
