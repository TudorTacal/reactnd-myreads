import React from "react";
import { Link } from "react-router-dom";
import  Book  from "./Book";

class SearchPage extends React.Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"/>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book) =>
                            <li key={book.id} >
                                <Book {...book} onSelectShelf={this.handleSelectShelf} />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;