import React from "react";
import BooksList from "./BooksList";
import Header from "./Header";
import OpenSearch from "./OpenSearch";
import SearchPage from "./SearchPage";
import { Route, Router, Link } from "react-router-dom";
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
        <div className="app"> 
          <Route exact path="/" render={() => (
            <div className="list-books">
                  <Header />,
                  <BooksList onUpdateBook={this.updateBook} books={this.state.books} />,
                  <OpenSearch />
            </div>
           )}/>       
           <Route path="/search" component={SearchPage}/>      
        </div>
    );
  }
}

export default BooksApp;
