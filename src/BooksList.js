import React from "react";
import BookShelf from "./BookShelf";

 class BooksList extends React.Component {  

  transformTitle = (shelfTitle) => {
    return shelfTitle.toLowerCase().split(' ').join('');
  }

  filterBooks = (books, title) => {
    return books.filter((book) =>  (book.shelf.toLowerCase() === title))
  }

  passBookUpdateDetails = (id, shelf) => {
    this.props.onUpdateBook(id, shelf);
  } 

  render() {
     const [title1,title2, title3] = ["Currently Reading", "Want to Read", "Read"];
     const { books } = this.props; 
     return (
      <div className="list-books-content">
        <BookShelf bookShelfUpdate={this.passBookUpdateDetails} title={title1} books={this.filterBooks(books, this.transformTitle(title1) )}/>
        <BookShelf bookShelfUpdate={this.passBookUpdateDetails} title={title2} books={this.filterBooks(books, this.transformTitle(title2) )}/>
        <BookShelf bookShelfUpdate={this.passBookUpdateDetails} title={title3} books={this.filterBooks(books, this.transformTitle(title3) )}/>
      </div>
    );
  }
}

export default BooksList
