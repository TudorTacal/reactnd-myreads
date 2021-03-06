import React from "react";
import BooksList from "./BooksList";
import Header from "./Header";
import OpenSearch from "./OpenSearch";
import SearchPage from "./SearchPage";
import { Route, Router, Link, history } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.updateBook = this.updateBook.bind(this);
    this.updateBookFromSearch = this.updateBookFromSearch.bind(this);   
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

  updateBookFromSearch = (book, shelf) => {
    let retrievedBook;
    BooksAPI.update(book,shelf).then(res =>{
        BooksAPI.get(book.id).then(res =>{
            retrievedBook = res;
            this.state.books.filter(book => book.title == retrievedBook.title).length == 0  ?
                this.setState(state => ({books: state.books.concat([retrievedBook])})) 
                :
                this.setState(state => {
                    books: state.books.map((book) => { if (book.title == retrievedBook.title) book.shelf = retrievedBook.shelf })
                })   
        }) 
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
          <Route exact path="/"  render={(history) => (
            <div className="list-books">
                  <Header />,
                  <BooksList onUpdateBook={this.updateBook} books={this.state.books} />,
                  <OpenSearch />
            </div>
           )}/>       
           <Route path="/search" render={(history) => (
             <SearchPage onUpdateBook={this.updateBookFromSearch} books={this.state.books}  />
           )}/>      
        </div>
    );
  }
}

export default BooksApp;
