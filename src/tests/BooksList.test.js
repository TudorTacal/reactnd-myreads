import { shallow, mount } from "enzyme";
import React from "react";
import BooksList from "../BooksList";
import BookShelf from "../BookShelf"
import Header from "../Header";
import "./testSetup";

describe("BooksList", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      title1: "Currently Reading",
      title2: "Want to Read",
      title3: "Read"
    }
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

  it("renders three BookShelf components with titles", () => {
    console.log(wrapper.debug());
    expect(wrapper.contains(<BookShelf title={props.title1}/>)).toBe(true);
    expect(wrapper.contains(<BookShelf title={props.title2}/>)).toBe(true);
    expect(wrapper.contains(<BookShelf title={props.title3}/>)).toBe(true);
  })
});
