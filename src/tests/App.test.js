import { shallow } from "enzyme";
import React from "react";
import BooksApp from "../App";
import BooksList from "../BooksList";
import Header from "../Header";
import "./testSetup";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BooksApp />);
  });

  it("renders a div with the class 'list-books'", () => {
    expect(wrapper.find(".list-books").exists()).toBe(true);
  });

  it("renders a BookList component", () => {
    expect(wrapper.contains(<BooksList />)).toBe(true);
  });

  it("renders a Header component", () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });
});
