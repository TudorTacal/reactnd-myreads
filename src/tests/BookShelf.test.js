import { shallow } from "enzyme";
import React from "react";
import BookShelf from "../BookShelf";
import "./testSetup";

describe("BookShelf", () => {
  let wrapper;
  let title = "Currently Reading";
  beforeEach(() => {
    wrapper = shallow(<BookShelf title={title} />);
  });

  it("renders a div with the class 'list-books'", () => {
    expect(wrapper.find(".bookshelf")).toBeDefined();
  });

  it("renders a h2 with the class 'bookshelf-title'", () => {
    expect(wrapper.find(".bookshelf-title").exists()).toBe(true);
  });

  it("renders a title which comes from props", () => {
    expect(wrapper.find(".bookshelf-title").text()).toBe("Currently Reading");
  })

});
