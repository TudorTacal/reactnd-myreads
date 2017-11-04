import React from 'react'
import BooksList from './BooksList'
// import * as BooksAPI from './BooksAPI'
import '../public/App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className='app'>
        <BooksList/> 
      </div>
    )
  }
}

export default BooksApp
