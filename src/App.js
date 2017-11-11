import React from "react";
import BooksList from "./BooksList";
import Header from "./Header";
import { Route, Router, BrowserRouter } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.updateBook = this.updateBook.bind(this);
  }

  updateServerBooks(book, shelf) {
    BooksAPI.update(book, shelf); 
  }

  updateBook(book,shelf) {
    this.updateServerBooks(book,shelf);
    this.setState(state => {
      books: state.books.map(changedBook => {
        if (changedBook.id == book.id) changedBook.shelf = shelf;
      });
    });
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });      
    });
  }

  render() {
    return (
      <div className="list-books">
      <BrowserRouter >
        <Route exact path="/" render={() => (
            <Header />,
            <BooksList onUpdateBook={this.updateBook} books={this.state.books} />
        )}/>
      </BrowserRouter>
       
      </div>
    );
  }
}

export default BooksApp;
