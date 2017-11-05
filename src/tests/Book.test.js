import { shallow, mount } from "enzyme";
import React from "react";
import Book from "../Book";
import books from "./MockedBooks";
import "./testSetup";

describe("Book", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Book />);
  });

  it("renders a div with a className 'book'", () => {
    expect(wrapper.find(".book").exists()).toBe(true);
  });

  it("renders a div with a className 'book-title'", () => {
    expect(wrapper.contains(<div className="book-title" />)).toBe(true);
  });

  it("renders a div with a className 'book-authors'", () => {
    expect(wrapper.contains(<div className="book-authors" />)).toBe(true);
  });

  it("renders a div with a className 'book-top'", () => {
    expect(wrapper.find(".book-top").exists()).toBe(true);
  });

  it("renders a div with a className 'book-cover'", () => {
    expect(wrapper.find(".book-cover").exists()).toBe(true);
  });

  it("renders a dropdown with options", () => {
    expect(wrapper.contains(
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
          <div className="book-title" />
          <div className="book-authors" />
        </div>
      )).toBe(true);
  });
});
