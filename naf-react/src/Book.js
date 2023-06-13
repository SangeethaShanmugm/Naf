import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Book({ book, id }) {
  const [show, setShow] = useState(true);
  const styles = {
    color: book.rating > 8 ? "green" : "red",
  };

  const summaryStyle = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">
          {book.name} - {id}
        </h2>
        <p style={styles} className="book-rating">
          ⭐{book.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle description</button>
      <button onClick={() => navigate("/books/" + id)}>Info</button>
      {/* <p style={summaryStyle} className="book-summary">
              {book.summary}
            </p> */}
      {show ? <p className="book-summary">{book.summary}</p> : null}
      <Counter />
    </div>
  );
}
