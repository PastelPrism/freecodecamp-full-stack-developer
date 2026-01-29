function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const books = [
  { title: "Book A", authorName: "Author One", releaseYear: 1999 },
  { title: "Book B", authorName: "Author Two", releaseYear: 2005 },
  { title: "Book C", authorName: "Author Three", releaseYear: 1985 },
  { title: "Book D", authorName: "Author Four", releaseYear: 2010 }
];

const cutoffYear = 2000;

const filteredBooks = books.filter(book => book.releaseYear <= cutoffYear);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);

