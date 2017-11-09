import React from 'react';
import BooksList from './BooksList';
import Header from './Header';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    books: []
  }

   componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  render() {
    return (
      <div className='list-books'>
        <Header/>
        <BooksList books={this.state.books}/> 
      </div>
    )
  }
}

export default BooksApp
