import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getBooksQuery, removeBook } from "../Queries/Queries";
import BookDetails from "../Components/BookDetails";

const BookListFromDb = ({ setbookInView }) => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) {
    return <li>Loading...</li>;
  }
  if (error) {
    return <li>Error..</li>;
  }
  if (data.Books.length === 0) {
    return <h3>List is empty. Add Books to read below.</h3>;
  }
  return data.Books.map((book) => {
    return (
      <li key={book.id} onClick={(e) => setbookInView(book.id)}>
        {book.title}
      </li>
    );
  });
};

const Booklist = () => {
  const [bookInView, setbookInView] = React.useState("");
  const [bookRemove] = useMutation(removeBook);
  const updateBooks = function (id) {
    bookRemove({
      variables: { id: id },
      refetchQueries: [{ query: getBooksQuery }],
    });
    setbookInView("");
  };
  return (
    <div>
      <ul className="book--list">
        <BookListFromDb setbookInView={setbookInView} />
      </ul>
      {bookInView ? (
        <BookDetails bookInView={bookInView} updateBooks={updateBooks} />
      ) : (
        <div className="book--details">
          <h3>Click on the book to view details</h3>
        </div>
      )}
    </div>
  );
};

export default Booklist;
