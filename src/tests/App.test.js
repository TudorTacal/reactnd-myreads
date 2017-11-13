import { shallow, mount } from "enzyme";
import React from "react";
import BooksApp from "../App";
import BooksList from "../BooksList";
import Header from "../Header";
import books from "./MockedBooks";
import { getAll } from "../BooksAPI";
import "./testSetup";

jest.mock("../BooksAPI");

//TODO: Fix the tests to include the router
describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BooksApp />);
  });

  it("renders a div with the class 'list-books'", () => {
    console.log(wrapper.debug());
    expect(wrapper.find(".list-books").exists()).toBe(true);
  });

  it("renders a Header component", () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("renders a BookList component", () => {
    return getAll().then(() => {
      wrapper.update();
      expect(wrapper.containsAnyMatchingElements([<BooksList books={books}/>])).toBe(true);
    });
  });

  it("fetches a list of books from the BooksAPI and saves it to its state", () => {
      return getAll().then(() => {
        expect(wrapper.state("books")).toEqual(books);
      });
  });
});
