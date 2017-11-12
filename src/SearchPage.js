import React from "react";
import { Link } from "react-router-dom";
import  Book  from "./Book";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        query: '',
        searchBooks: []
    }

    updateQuery(query) {
        this.setState({query: query.trim()});
    }

    handleSubmit(e) {
        e.preventDefault();
        BooksAPI.search(this.state.query, 20).then(res => {
            this.setState({searchBooks: res});
        });
    }

    render() {
        console.log(this.state.searchBooks);
        const { query } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"/>
                    <div className="search-books-input-wrapper">
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />
                     </form>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchBooks.map((book) =>
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