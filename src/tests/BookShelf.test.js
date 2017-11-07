import { shallow } from "enzyme";
import React from "react";
import Book from "../Book";
import BookShelf from "../BookShelf";
import "./testSetup";

describe("BookShelf", () => {
  let wrapper;
  let title = "Currently Reading";
  let book1, book2;
  let props;
  beforeEach(() => {
    props = {
      title,
      books: [
        {
          title: "The Linux Command Line",
          authors: ["William E. Shotts Jr."],
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          id: "nggnmAEACAAJ",
          shelf: "currentlyReading"
        },
        {
          title: "Learning Web Development with React and Bootstrap",
          authors: ["Harmeet Singh", "Mehul Bhatt"],
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          id: "sJf1vQAACAAJ",
          shelf: "currentlyReading"
        },
        {
          title: "My Book",
          authors: ["MY Author"],
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          id: "sJf1vQAACCOJ",
          shelf: "read"
        }
      ]
    };
    wrapper = shallow(<BookShelf {...props}  />); 
  });

  it("renders a div with the class 'list-books'", () => {
    expect(wrapper.find(".bookshelf")).toBeDefined();
  });

  it("renders a h2 with the class 'bookshelf-title'", () => {
    expect(wrapper.find(".bookshelf-title").exists()).toBe(true);
  });

  it("renders a title which comes from props", () => {
    expect(wrapper.find(".bookshelf-title").text()).toBe("Currently Reading");
  });

  it("renders a div with the class 'bookshelf-books'", () => {
    expect(wrapper.find(".bookshelf-books").exists()).toBe(true);
  });

  it("renders an ol with the class 'books-grid'", () => {
    expect(wrapper.find(".books-grid").type()).toBe("ol");
  });

  it("renders an ol with books components from props", () => {
      expect(wrapper.find(".books-grid").contains(
        <ol className="books-grid">
          <li>
            <Book {...props.books[0]} />
          </li>
          <li>
            <Book {...props.books[1]}/>
          </li>
        </ol>
      )).toBe(true);
  });

  it("renders only books that belong to it", () => {
    expect(wrapper.find(".books-grid").containsAllMatchingElements([
        <ol className="books-grid">
          <li>
            <Book {...props.books[0]} />
          </li>
          <li>
            <Book {...props.books[1]}/>
          </li>
        </ol>
    ])).toBe(true);
  })
});
