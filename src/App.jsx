import "./App.css";
import EventExample from "./EventExample";
import Book from "./Book";
import bookArray from "./books";

// Add an ID to each book object


// Create a new EventExample component here
// and return a form


function App() {
  function getBook(id) {
    const book = bookArray.find((book) => book.id === id);
    console.log(book);
  }

  return (
    <section className="booklist">
      <EventExample />
      {/* Pass the 'index' argument of the map method
          for us to use. This is a default argument of the map method
          and always comes second in the list of arguments. */}
      {bookArray.map((book, index) => {
        const { img, title, author, id } = book;
        // Use the 'index' argument as the value for the 'key' prop.
        return (
          <Book
            key={book.id} // set the key prop to book.id
            img={img}
            title={title}
            author={author}
            getBook={() => getBook(book.id)} // pass a function that calls getBook with the book's id
          />
        );
      })}
    </section>
  );
}

export default App;
