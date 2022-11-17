import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);
  
  function searchHelper(i) {
    console.log(i)
  }

  
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search.." onChange={searchHelper} value={searchHelper} />
      </div>
      <div className="App-header">
        <marquee>Welcome to my site!</marquee>
        <h1> Raisa Ahmed</h1>
        <Button />
        <Cart />
      </div>
    
    </>
  );
}

export default App;
