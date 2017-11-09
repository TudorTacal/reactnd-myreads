import { shallow, mount } from "enzyme";
import React from "react";
import Book from "../Book";
import books from "./MockedBooks";
import "./testSetup";

describe("Book", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      title: "The Linux Command Line",
      authors: ["William E. Shotts Jr.", "Harmeet Singh"],
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      shelf: "currrentlyReading"
    };
    wrapper = shallow(<Book {...props} />);
  });

  it("renders a div with a className 'book'", () => {
    expect(wrapper.find(".book").exists()).toBe(true);
  });

  it("renders a div with a className 'book-title'", () => {
    expect(wrapper.find(".book-title").exists()).toBe(true);
  });

  it("renders a div with a className 'book-authors'", () => {
    expect(wrapper.find(".book-authors").exists()).toBe(true);
  });

  it("renders a div with a className 'book-top'", () => {
    expect(wrapper.find(".book-top").exists()).toBe(true);
  });

  it("renders a div with a className 'book-cover'", () => {
    expect(wrapper.find(".book-cover").exists()).toBe(true);
  });

   it("renders default selected option matching bookshelf title", () => {
    expect(wrapper.find(".book-shelf-changer").containsAnyMatchingElements([
       <div className="book-shelf-changer">
            <select defaultValue={props.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading" >Currently Reading</option> 
              <option value="wantToRead" >Want to Read</option>
              <option value="read" >Read</option>
              <option value="none">None</option>
            </select>
          </div>
    ])).toBe(true);
  });

  it("renders its title from props", () => {
    expect(wrapper.find("div.book-title").text()).toBe(
      "The Linux Command Line"
    );
  });

  it("renders its authors from props", () => {
    expect(wrapper.find(".book-authors").text()).toBe(
      "William E. Shotts Jr., Harmeet Singh"
    );
  });

  it("renders its cover from props", () => {
    expect(wrapper.find(".book-cover").props().style.backgroundImage).toEqual(
      "url(http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api)"
    );
  });

  
});
