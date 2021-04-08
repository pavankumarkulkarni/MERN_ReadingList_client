import { gql } from "@apollo/client";
const getBooksQuery = gql`
  query {
    Books {
      id
      title
      genre
    }
  }
`;

const getAuthors = gql`
  query {
    Authors {
      name
      id
    }
  }
`;

const addBook = gql`
  mutation($title: String!, $genre: String!, $authorID: String!) {
    addBook(title: $title, genre: $genre, authorID: $authorID) {
      id
      title
      genre
    }
  }
`;

const bookDetails = gql`
  query($id: String!) {
    Book(id: $id) {
      title
      genre
      author {
        name
        books {
          title
          id
        }
      }
    }
  }
`;

const removeBook = gql`
  mutation($id: String) {
    removeBook(id: $id) {
      id
    }
  }
`;

const addAuthor = gql`
  mutation($name: String, $age: Int) {
    addAuthor(name: $name, age: $age) {
      id
    }
  }
`;

export {
  getBooksQuery,
  getAuthors,
  addBook,
  bookDetails,
  removeBook,
  addAuthor,
};
