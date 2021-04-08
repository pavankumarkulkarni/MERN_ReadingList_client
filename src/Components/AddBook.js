import React from "react";
import DisplayAuthors from "./DisplayAuthors";
import { addBook } from "../Queries/Queries";
import { getBooksQuery } from "../Queries/Queries";
import { useMutation } from "@apollo/client";

const AddBook = () => {
  const [title, setTitle] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [addingBook] = useMutation(addBook);

  const handleSubmit = (e) => {
    e.preventDefault();
    addingBook({
      variables: {
        title: title === "" ? null : title,
        genre,
        authorID: author,
      },
      refetchQueries: [
        {
          query: getBooksQuery,
        },
      ],
    });
    setAuthor("");
    setTitle("");
    setGenre("");
    alert("Book Added!");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="addBook--form">
        <h3>Add New Book</h3>
        <div className="form--elements">
          <label htmlFor="Title">Title:</label>
          <input
            type="text"
            name="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            name="Genre"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            required
          />
          <label htmlFor="author">Author:</label>
          <select
            name="author"
            id=""
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required>
            <option value="">Select author</option>
            <DisplayAuthors />
          </select>
        </div>
        <button type="submit">+</button>
      </form>
    </>
  );
};

export default AddBook;
