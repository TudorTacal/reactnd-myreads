import { shallow, mount } from "enzyme";
import React from "react";

class Book extends React.Component {
    render () {
        return (
            <div className="book">
                <div className="book-title"></div>
                <div className="book-authors"></div>
            </div>
        )
    }
}

export default Book;