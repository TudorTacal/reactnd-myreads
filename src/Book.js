import { shallow, mount } from "enzyme";
import React from "react";

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" />
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title" ></div>
        <div className="book-authors" ></div>
      </div>
    );
  }
}

export default Book;
