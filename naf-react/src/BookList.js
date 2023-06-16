import { useState, useEffect } from "react";
import { INITIAL_BOOK_LIST } from "./App";
import { Book } from "./Book";
import { API } from "./global";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function BookList() {
  //const bookList = INITIAL_BOOK_LIST;
  // Lifting the state up
  const [bookList, setBookList] = useState([]);

  // const getData = () => {
  //   async function fun() {
  //     try {
  //       const result = await axios.get(`${API}/books`);
  //       console.log(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fun();
  // };

  // getData();

  // const getBooks = () => {
  //   axios
  //     .get(`${API}/books`)
  //     // .then((res) => res.json())
  //     .then((bks) => console.log(bks));
  // };

  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bks) => setBookList(bks));
  };

  useEffect(() => getBooks(), []); //call only once

  const navigate = useNavigate();

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  fetch(`${API}/books/${bk.id}`, {
                    method: "DELETE",
                  }).then(() => getBooks());
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={() => navigate(`/books/edit/${bk.id}`)}
                // onClick={() => {
                //   fetch(`${API}/books/${bk.id}`, {
                //     method: "DELETE",
                //   }).then(() => getBooks());
                // }}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
