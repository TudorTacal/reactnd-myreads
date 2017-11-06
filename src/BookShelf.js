import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../public/App.css";

export default function BookShelf(props) {
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
        </div>
    </div>
  );
}
