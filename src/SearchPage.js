import React from "react";
import { Link } from "react-router-dom";
import  Book  from "./Book";
import * as BooksAPI from "./BooksAPI";
import { notDeepEqual } from "assert";

class SearchPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            query: '',
            searchBooks: []
        }
        this.handleSelectShelf = this.handleSelectShelf.bind(this);
        }

    handleSelectShelf = (id, shelf, book) => {
        this.props.onUpdateBook(book, shelf);
     }

     updateQuery(query) {
        this.setState({query: query.trim()});   
        let emptyRes={error: "empty query"};
        BooksAPI.search(this.state.query, 20).then(res => {
            res ? this.setState({searchBooks: res}) : this.setState({searchBooks: emptyRes});
        });    
     }

    render() {
        const { query, searchBooks } = this.state;
        const { books } = this.props;
        books.map(book => {
            searchBooks.forEach((searchBook, index, array) => {
                if(book.title === searchBook.title) return array[index] = book;
            });
        });
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" />
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { searchBooks.error ? (
                             <div>There are no books that match this criteria</div>
                        ) : (
                             searchBooks.map((book) =>
                                <li key={book.id} >
                                    <Book {...book} onSelectShelf={this.handleSelectShelf}/>
                                </li>
                            )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;