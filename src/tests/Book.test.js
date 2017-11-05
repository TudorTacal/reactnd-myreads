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

  it("renders a div with a className 'book-shelf-changer'", () => {
    expect(wrapper.find(".book-shelf-changer").exists()).toBe(true);
  });
});
