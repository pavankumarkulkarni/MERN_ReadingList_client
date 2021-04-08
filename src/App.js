import Booklist from "./Components/Booklist";
import AddBook from "./Components/AddBook";
import AddAuthor from "./Components/AddAuthor";

function App() {
  return (
    <div className="main">
      <h1>Book Reading List</h1>
      <Booklist />
      <AddBook />
      <AddAuthor />
    </div>
  );
}

export default App;
