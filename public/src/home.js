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

function getMostPopularBooks(books) {
  let result = books.reduce((acc, book) => {
    let title = book.title;
    let bookTitle = acc.find((element) => element.title === title);
    if (!bookTitle){
      const newBookTitle = {
        name: title,
        count: 1,
      };
      acc.push(newBookTitle);
    }else {bookTitle.count++;}
    return acc;
  },[]);
  result.sort((titleA, titleB) => titleA.count - titleB.count);
  result.splice(5);
  return result;
}

function getMostPopularAuthors(books, authors) {

  result.splice(5);
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
