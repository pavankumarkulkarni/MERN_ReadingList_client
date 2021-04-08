import React from "react";
import { addAuthor, getAuthors } from "../Queries/Queries";
import { useMutation } from "@apollo/client";

const AddAuthor = () => {
  const [addinguthor] = useMutation(addAuthor);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addinguthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query: getAuthors }],
    });
    setAge("");
    setName("");
    alert("Author added!");
  };
  return (
    <form onSubmit={handleSubmit} className="addAuthor--form">
      <h3>Add Author</h3>
      <div className="form--elements">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          required
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </div>
      <button type="submit">+</button>
    </form>
  );
};

export default AddAuthor;
