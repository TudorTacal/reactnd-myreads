import { shallow, mount } from "enzyme";
import React from "react";
import Book from "../Book";
import books from "./MockedBooks";
import "./testSetup";

describe("Book", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Book/>);
  });

  it("renders a div with a className 'book'",() => {
      expect(wrapper.contains(<div className="book"></div>)).toBe(true);
  })
});
