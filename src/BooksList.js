import React from "react";
import BookShelf from "./BookShelf";

const BooksList = (props) => {
  const transformTitle = shelfTitle => {
    return shelfTitle
      .toLowerCase()
      .split(" ")
      .join("");
  };

  const filterBooks = (books, title) => {
    return books.filter(book => book.shelf.toLowerCase() === title);
  };

  const passBookUpdateDetails = (id, shelf) => {
    props.onUpdateBook(id, shelf);
  };
  const [title1, title2, title3] = [
    "Currently Reading",
    "Want to Read",
    "Read"
  ];
  const { books } = props;

  return (
    <div className="list-books-content">
      <BookShelf
        bookShelfUpdate={passBookUpdateDetails}
        title={title1}
        books={filterBooks(books, transformTitle(title1))}
      />
      <BookShelf
        bookShelfUpdate={passBookUpdateDetails}
        title={title2}
        books={filterBooks(books, transformTitle(title2))}
      />
      <BookShelf
        bookShelfUpdate={passBookUpdateDetails}
        title={title3}
        books={filterBooks(books, transformTitle(title3))}
      />
    </div>
  );
}

export default BooksList;
