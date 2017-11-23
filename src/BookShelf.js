import React from "react";
// import * as BooksAPI from './BooksAPI'
import Book from "./Book";
import "../public/App.css";

export default function BookShelf(props) {
  const transformTitleToCompare = title => {
    return title
      .toLowerCase()
      .split(" ")
      .join("");
  };

  const handleSelectShelf = (id, shelf) => {
    props.bookShelfUpdate(id, shelf);
  };

  const { title } = props;
  const { books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(
            book =>
              book.shelf.toLowerCase() ===
                transformTitleToCompare(title) && (
                <li key={book.id}>
                  <Book {...book} onSelectShelf={handleSelectShelf} />
                </li>
              )
          )}
        </ol>
      </div>
    </div>
  );
}
