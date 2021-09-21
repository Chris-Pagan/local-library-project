function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooks =0;
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      borrowedBooks++
    }
  }
  return borrowedBooks;
}

function getMostCommonGenres(books) {
  let result = books.reduce((acc, book) => {
    let genre = book.genre;
    let genreInformation = acc.find((genreType) => genreType.name === genre);
    if (!genreInformation){
      const newGenreInformation = {
        name: genre, 
        count: 1
      };
      acc.push(newGenreInformation);
    } else {
      genreInformation.count++;
    }
    return acc;
  }, []);
  result.sort((genreA, genreB) =>genreB.count - genreA.count);
  result.splice(5);
  return result;
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
