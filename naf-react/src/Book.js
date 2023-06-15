import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";

export function Book({ book, id, deleteButton, editButton }) {
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
      <IconButton
        aria-label="toggle"
        onClick={() => setShow(!show)}
        color="primary"
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <IconButton
        aria-label="info"
        onClick={() => navigate(`/books/${id}`)}
        color="primary"
      >
        <InfoIcon />
      </IconButton>
      {/* <button onClick={() => setShow(!show)}>Toggle description</button> */}
      {/* <button onClick={() => navigate("/books/" + id)}>Info</button> */}
      {/* <p style={summaryStyle} className="book-summary">
              {book.summary}
            </p> */}
      {show ? <p className="book-summary">{book.summary}</p> : null}
      <Counter /> {deleteButton} {editButton}
    </div>
  );
}
