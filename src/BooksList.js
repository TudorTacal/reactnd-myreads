import React from "react";
import Header from "./Header";
import BookShelf from "./BookShelf"
// import * as BooksAPI from './BooksAPI'
import "../public/App.css";

export default function BooksList() {
  const [title1, title2, title3] =  ["Currently Reading", "Want to Read", "Read"];
  return (
    <div className="list-books">
      <Header/>
      <div className="list-books-content">
        <BookShelf title={title1}/>
        <BookShelf title={title2}/>
        <BookShelf title={title3}/>
      </div>
    </div>
  );
}
