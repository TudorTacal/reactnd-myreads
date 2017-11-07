import { shallow, mount } from "enzyme";
import React from "react";
import BooksList from "../BooksList";
import BookShelf from "../BookShelf";
import books from "./MockedBooks";
import { getAll } from "../BooksAPI";
import "./testSetup";

jest.mock("../BooksAPI");

describe("BooksList", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      title1: "Currently Reading",
      title2: "Want to Read",
      title3: "Read",
      books 
    };
    wrapper = shallow(<BooksList />, { lifecycleExperimental: true });
  });

  it("renders a div with the class 'list-books-content'", () => {
    expect(wrapper.find(".list-books-content").exists()).toBe(true);
  });

   it("renders three BookShelf components with titles and books", () => {
    return getAll().then(() => {
      wrapper.update();
      expect(wrapper.contains(<BookShelf title={props.title1} books={wrapper.state("books")} />)).toBe(true);
      expect(wrapper.contains(<BookShelf title={props.title2} books={wrapper.state("books")} />)).toBe(true);
      expect(wrapper.contains(<BookShelf title={props.title3} books={wrapper.state("books")} />)).toBe(true);
    });
   });

  describe("componentDidMount", async () => {
    it("fetches a list of books from the BooksAPI and saves it to its state", () => {
      return getAll().then(() => {
        expect(wrapper.state("books")).toEqual(books);
      });
    });
  });
});
