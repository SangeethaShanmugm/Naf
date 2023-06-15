import "./App.css";
import { double, msg } from "./ColorBox"; //named import
import Home from "./Components/Home.jsx";
import { AddColor } from "./AddColor";
import Products from "./Components/Products";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { BookList } from "./BookList";
import { User } from "./User";
import { useState, useEffect } from "react";
import { BookDetails } from "./BookDetails";
import { NotFoundPage } from "./NotFoundPage";
import { AddBook } from "./AddBook";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ExampleContext } from "./ExampleContext";
import { EditBook } from "./EditBook";

export const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
    trailer: "https://www.youtube.com/embed/YSC7NrzDt24",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-Link.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 7.5,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 7.8,
    summary:
      "Hay shows you that you “can do, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations",
  },
];

export default function App() {
  const [bookList, setBookList] = useState([]);

  const [mode, setMode] = useState("light");

  //1. Creating  -  createContext ✅
  //2. Publisher  -Provider - context.Provider ✅
  //3. Subscriber - useContext - useContext(context) ❌
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              Link changes page without refresh
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">BookList</Link>
            </li>
            <li>
              <Link to="/add-color">AddColor</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
            <li>
              <Link to="/books/add">Add Book</Link>
            </li>
          </ul>
        </nav> */}
        <AppBar position="static">
          <Toolbar>
            <Button onClick={() => navigate("/")} color="inherit">
              Home
            </Button>
            <Button onClick={() => navigate("/books")} color="inherit">
              BookList
            </Button>
            <Button onClick={() => navigate("/add-color")} color="inherit">
              AddColor
            </Button>
            <Button onClick={() => navigate("/users")} color="inherit">
              User
            </Button>
            <Button onClick={() => navigate("/books/add")} color="inherit">
              Add Book
            </Button>
            <Button onClick={() => navigate("/context")} color="inherit">
              Context
            </Button>
            <Button
              sx={{ marginLeft: "auto" }}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              color="inherit"
            >
              {mode === "light" ? "dark" : "light"} mode
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-color" element={<AddColor />} />
          <Route path="/users" element={<User />} />
          <Route path="/books/:bookid" element={<BookDetails />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:bookid" element={<EditBook />} />
          <Route path="/context" element={<ExampleContext />} />
          {/* redirect */}
          <Route path="/novel" element={<Navigate replace to="/books" />} />

          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}


