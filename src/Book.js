import React from "react";

class Book extends React.Component {

  handleShelfChange = (id, element, book) => {
    this.props.onSelectShelf(id, element, book);
  }

  render() {
    let bookId = this.props.id;
    let authors = this.props.authors;
    authors = authors? authors.join(", ") : "";
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${this.props.imageLinks.smallThumbnail})` }} />
          <div className="book-shelf-changer">
            <select defaultValue={this.props.shelf || "default"} onChange={(event) => {this.handleShelfChange({id: bookId}, event.target.value, this.props)}}>
              <option style={{display: 'none'}} disabled hidden value="default"/>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading" >Currently Reading</option> 
              <option value="wantToRead" >Want to Read</option>
              <option value="read" >Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title" >{this.props.title}</div>
        <div className="book-authors" >{ authors || 'Unknown Author'}
        </div>
      </div>
    );
  }
}

export default Book;
