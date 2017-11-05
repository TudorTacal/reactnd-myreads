import React from 'react';
import BooksList from './BooksList';
import Header from './Header';
import '../public/App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className='list-books'>
        <Header/>
        <BooksList/> 
      </div>
    )
  }
}

export default BooksApp
