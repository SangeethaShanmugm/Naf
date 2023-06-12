import "./App.css";
import { double, msg } from "./ColorBox"; //named import
import Home from "./Components/Home.jsx";
import { AddColor as InputColor } from "./AddColor";

// console.log(double(10));
// console.log(msg);

export default function App() {
  //Javascript starts

  //Javascript ends
  //JSX starts
  return (
    <div className="App">
      <InputColor />
      <Home />
    </div>
  );
  //JSX ends
}
