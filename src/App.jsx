import "./App.css";

// Add an ID to each book object
const bookArray = [
  {
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 1,
  },
  {
    img: "https://m.media-amazon.com/images/I/41X65pro2mS._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    title: "The Wasp Factory",
    author: "Iain Banks",
    id: 2,
  },
];

// Create a new EventExample component here
// and return a form

const EventExample = () => {
  // Define our event handlers here
  const handleFormInput = (event) => {
    console.log("onChange Fired!", event.target);
  };

  const handleClick = (event) => {
    console.log("Button Clicked!", event.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("blah", e);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Some Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleSubmit}>Click Me!</button>
    </section>
  );
};

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

// Destructuring the props object in parentheses
function Book({ img, title, author, children, getBook, id }) {
  return (
    <article className="book">
      {/** Use the destructured props here */}
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>

      {/* Place your children prop here */}
      {children}
      <button onClick={() => getBook(id)}>Get Book</button>
    </article>
  );
}

export default App;
