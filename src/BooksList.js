import React from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from './BooksAPI';
import "../public/App.css";

 class BooksList extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }
  render() {
     const [title1,title2, title3] = ["Currently Reading", "Want to Read", "Read"];
     const { books } = this.state;
     return (
      <div className="list-books-content">
        <BookShelf title={title1} books={books}/>
        <BookShelf title={title2} books={books}/>
        <BookShelf title={title3} books={books}/>
      </div>
    );
  }
 
}

export default BooksList
