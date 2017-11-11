import { shallow, mount } from "enzyme";
import React from "react";
import BooksList from "../BooksList";
import BookShelf from "../BookShelf";
import books from "./MockedBooks";
import "./testSetup";

describe("BooksList", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      title1: "Currently Reading",
      title2: "Want to Read",
      title3: "Read",
      bookShelfUpdate: () => {},
      books 
    };
    wrapper = shallow(<BooksList onUpdateBook={props.bookShelfUpdate} books={books}/>);
  });

  it("renders a div with the class 'list-books-content'", () => {
    expect(wrapper.find(".list-books-content").exists()).toBe(true);
  });

   it("renders three BookShelf components with titles and books", () => {
     console.log(wrapper.debug());
      expect(wrapper.contains(<BookShelf  bookShelfUpdate={[Function]} title={props.title1} books={props.books} />)).toBe(true);
      expect(wrapper.contains(<BookShelf  bookShelfUpdate={[Function]} title={props.title2} books={[]} />)).toBe(true);
      expect(wrapper.contains(<BookShelf  bookShelfUpdate={[Function]} title={props.title3} books={[]} />)).toBe(true);
    });
});
