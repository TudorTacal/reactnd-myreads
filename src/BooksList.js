import React from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from './BooksAPI';
import "../public/App.css";

 class BooksList extends React.Component {
  state = {
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }
  render() {
     const [title1,title2, title3] = ["Currently Reading", "Want to Read", "Read"];
     return (
      <div className="list-books-content">
        <BookShelf title={title1}/>
        <BookShelf title={title2}/>
        <BookShelf title={title3}/>
      </div>
    );
  }
 
}

export default BooksList
