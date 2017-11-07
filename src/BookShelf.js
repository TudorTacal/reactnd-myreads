import React from "react";
// import * as BooksAPI from './BooksAPI'
import Book from "./Book";
import "../public/App.css";

class BookShelf extends React.Component {
  render() {
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {this.props.title}
      </h2>
      <div className="bookshelf-books"> 
        <ol className="books-grid">
          {this.props.books.map((book) => 
            <li key={book.id}>
              <Book {...book} />
            </li>
          )}
        </ol>
      </div>
    </div>
  );
  }
}

export default BookShelf
