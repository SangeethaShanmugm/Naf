import { useState } from "react";
import { INITIAL_BOOK_LIST } from "./App";
import { Book } from "./Book";

export function BookList() {
  //const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div>
      <div className="add-book-form">
        <input
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        />
        <input
          value={poster}
          type="text"
          onChange={(event) => setPoster(event.target.value)}
          placeholder="Enter Poster"
        />
        <input
          value={rating}
          type="text"
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter Rating"
        />
        <input
          value={summary}
          type="summary"
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Enter Summary"
        />
        {/* copy the bookList and add new book */}
        <button
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setBookList([...bookList, newBook]);
            console.log(newBook);
          }}
        >
          Add Book
        </button>
      </div>

      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
