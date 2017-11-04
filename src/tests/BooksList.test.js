import { shallow, mount } from "enzyme";
import React from "react";
import BooksList from "../BooksList";
import Header from "../Header";
import "./testSetup";

describe("BooksList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BooksList />);
  });

  it("renders a Header component", () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("renders a div with the class 'list-books'", () => {
    expect(wrapper.find(".list-books").exists()).toBe(true);
  });

  it("renders a div with the class 'list-books-content'", () => {
    expect(wrapper.find(".list-books-content").exists()).toBe(true);
  });
});
