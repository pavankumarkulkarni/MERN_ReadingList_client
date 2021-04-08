import React from "react";
import { getAuthors } from "../Queries/Queries";
import { useQuery } from "@apollo/client";

const DisplayAuthors = () => {
  const { loading, error, data } = useQuery(getAuthors);
  if (loading) {
    return "Loading";
  }
  if (error) {
    return "Error fetching authors";
  }
  const authorList = data.Authors.map((author) => {
    return (
      <option value={author.id} key={author.id}>
        {author.name}
      </option>
    );
  });
  return <>{authorList}</>;
};

export default DisplayAuthors;
