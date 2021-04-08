import React from "react";
import { useQuery } from "@apollo/client";
import { bookDetails } from "../Queries/Queries";

const BookDetails = ({ bookInView, updateBooks }) => {
  const book = useQuery(bookDetails, { variables: { id: bookInView } });

  if (book.loading) {
    return (
      <div className="book--details">
        <h3>Retrieving book details....</h3>
      </div>
    );
  }
  if (book.error) {
    return (
      <div className="book--details">
        <h3>Error in retrieving book details</h3>
      </div>
    );
  }
  return (
    <div className="book--details">
      <h3>Book details</h3>
      <h4>Title : {book.data.Book.title}</h4>
      <p>Genre : {book.data.Book.genre}</p>
      <p>
        Author : <strong>{book.data.Book.author.name}</strong>
      </p>
      <button onClick={(e) => updateBooks(bookInView)}>Delete Book</button>
      <h4>Books by same author</h4>
      {book.data.Book.author.books.map((book) => {
        return <li key={book.id}>{book.title}</li>;
      })}
    </div>
  );
};

export default BookDetails;
