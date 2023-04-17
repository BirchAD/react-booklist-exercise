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

export default Book;
