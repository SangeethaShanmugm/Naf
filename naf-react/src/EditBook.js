import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";

export function EditBook() {
  const { bookid } = useParams();

  const [book, setBook] = useState();

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bk) => setBook(bk));
  }, []); //call only once

  console.log(book);

  return book ? <EditBookForm book={book} /> : "Loading...";
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);

  const navigate = useNavigate();
  return (
    <div className="add-book-form">
      <TextField
        id="name"
        label="Name"
        variant="filled"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <TextField
        id="poster"
        label="Poster"
        variant="filled"
        onChange={(event) => setPoster(event.target.value)}
        value={poster}
      />
      <TextField
        id="rating"
        label="Rating"
        variant="filled"
        onChange={(event) => setRating(event.target.value)}
        value={rating}
      />
      <TextField
        id="summary"
        label="Summary"
        variant="filled"
        onChange={(event) => setSummary(event.target.value)}
        value={summary}
      />
      {/* copy the bookList and add new book */}
      <Button
        color="success"
        variant="contained"
        onClick={() => {
          const updatedBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
          };
          //1. method: POST
          //2. body -  pass data  -  JSON
          //3. Headers - JSON
          fetch(`${API}/books/${book.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedBook),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => navigate("/books"));
          // .then((bks) => setBookList(bks));

          // setBookList([...bookList, newBook]);
          // console.log(newBook);
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
