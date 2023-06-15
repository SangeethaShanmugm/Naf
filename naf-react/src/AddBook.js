import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";

export function AddBook() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const navigate = useNavigate();

  return (
    <div>
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
          variant="contained"
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            //1. method: POST
            //2. body -  pass data  -  JSON
            //3. Headers - JSON
            fetch(`${API}/books`, {
              method: "POST",
              body: JSON.stringify(newBook),
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
          Add Book
        </Button>
      </div>
    </div>
  );
}
