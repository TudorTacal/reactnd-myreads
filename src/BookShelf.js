import React from "react";
// import * as BooksAPI from './BooksAPI'
import Book from "./Book";
import "../public/App.css";

class BookShelf extends React.Component {

  transformTitleToCompare= (title) => {
    return title.toLowerCase().split(' ').join('');
  }

  handleSelectShelf = (id, shelf) => {
  }

  render() {
    const { title } = this.props;
    const { books } = this.props;
    return (  
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {this.props.title}
      </h2>
      <div className="bookshelf-books"> 
        <ol className="books-grid">
          {books.map((book) =>
           book.shelf.toLowerCase() === this.transformTitleToCompare(title)  &&
            <li key={book.id} >
              <Book {...book} onSelectShelf={this.handleSelectShelf} />
            </li>
          )}
        </ol>
      </div>
    </div>
  );
  }
}

export default BookShelf
