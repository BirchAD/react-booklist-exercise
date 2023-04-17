import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/61e1n99gzqL._AC_UL900_SR900,600_.jpg" />;
const Title = () => <h2>Bored of Lunch</h2>;
const Author = () => <h4>Nathan Anthony</h4>;

export default App;
