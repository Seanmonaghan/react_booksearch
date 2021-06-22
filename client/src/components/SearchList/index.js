import React from "react";
import { Row, Col } from "../Grid";
import "./SearchList.css";
import ReadMoreReact from "read-more-react";

const SearchList = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books Found: </h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Books found: </h3>
                        {props.books.map(book => {
                            return (
                                <section>
                                    <li className="search-list list-group-item">
                                        <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                            <Col size="2" className="bookImage">
                                                <img src={book.image} alt={book.title} />
                                            </Col>
                                            <Col size="1" className="emptyCol" />
                                            <Col size="9" className="bookInfo">
                                                <Row>
                                                    <h3 className="bookTitle">{book.title}</h3>
                                                </Row>
                                                <Row>
                                                    <h4 className="bookAuthor">{book.author}</h4>
                                                </Row>
                                                <Row>
                                                <ReadMoreReact text={book.description} min = {250} ideal = {400} max = {500} readMoreText = "Click to read more!"/>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <Row className="buttonDiv">
                                            <button className="saveBook btn btn-info" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                                Save
                                        </button>
                                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                                <button className="viewBook btn btn-success">
                                                    View Online
                                            </button>
                                            </a>
                                        </Row>
                                    </li>
                                    <br></br>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchList