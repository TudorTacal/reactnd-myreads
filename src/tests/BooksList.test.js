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
    wrapper = shallow(<BooksList books={props.books} />);
  });

  it("renders a div with the class 'list-books-content'", () => {
    expect(wrapper.find(".list-books-content").exists()).toBe(true);
  });

  it("renders three BookShelf components with event handlers, titles and books", () => {
    expect(
      wrapper.containsAllMatchingElements([
        <BookShelf title={props.title1} books={props.books} />,
        <BookShelf title={props.title2} books={[]} />,
        <BookShelf title={props.title3} books={[]} />
      ])
    ).toBe(true);
  });
});
