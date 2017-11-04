import React from "react";
import Header from "./Header";
// import * as BooksAPI from './BooksAPI'
import "../public/App.css";

export default function BooksList() {
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content" />
    </div>
  );
}
