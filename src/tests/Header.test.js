import { shallow } from "enzyme";
import React from "react";
import Header from "../Header";
import "./testSetup";

describe("Header", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("renders a div with the class 'list-books-title'", () => {
    expect(wrapper.find(".list-books-title").exists()).toBe(true);
  });

  it("renders a title with the text 'My Reads'", () => {
    expect(wrapper.contains(
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
    )).toBe(true);
  });
});
