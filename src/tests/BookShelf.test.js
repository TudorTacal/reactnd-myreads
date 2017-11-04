import { shallow } from "enzyme";
import React from "react";
import BookShelf from "../BookShelf";
import "./testSetup";

describe("BookShelf", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BookShelf />);
  });

  it("renders a div with the class 'list-books'", () => {
    expect(wrapper.find(".bookshelf")).toBeDefined();
  });
});
