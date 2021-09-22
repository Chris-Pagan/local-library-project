//helper function
function reduceArray(arr){
  return arr.reduce((counter, index) => counter += 1, 0);
}

function getTotalBooksCount(books) {
  return reduceArray(books);
}

function getTotalAccountsCount(accounts) {
  return reduceArray(accounts);
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
      // creates new object with the genre and the count of said genre
      const newGenreInformation = {
        name: genre, 
        count: 1
      };
      //pushes to new genre object
      acc.push(newGenreInformation);
    } else {
      //if already exists, adds to object created above
      genreInformation.count++;
    }
    return acc;
  }, []);
  //sorts results in ascending order
  result.sort((genreA, genreB) =>genreB.count - genreA.count);
  //splices result to 5 and returns result
  result.splice(5);
  return result;
}

function getMostPopularBooks(books) {
  //maps books to its own object and sorts said object
  return books.map((book) => {
    return { name:book.title, count: book.borrows.length};
  }).sort((bookA, bookB) =>(bookA.count < bookB.count ? 1: -1)).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result= [];
  authors.forEach((author) =>{
    let bookAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) =>{
      if(book.authorId === author.id){
        bookAuthor.count += book.borrows.length;
      }
    });
    result.push(bookAuthor);
  })
  return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
