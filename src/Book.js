import { shallow, mount } from "enzyme";
import React from "react";

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${this.props.imageLinks.smallThumbnail})` }} />
          <div className="book-shelf-changer">
            <select defaultValue={this.props.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading" >Currently Reading</option> 
              <option value="wantToRead" >Want to Read</option>
              <option value="read" >Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title" >{this.props.title}</div>
        <div className="book-authors" >{this.props.authors.join(", ")}</div>
      </div>
    );
  }
}

export default Book;
