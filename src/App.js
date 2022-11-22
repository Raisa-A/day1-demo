import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import CounterButton from "./components/Button";
import Cart from "./components/Cart";
import Tabs from "./components/TabComponent/Tab";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';



function App() {
  const [count, setCount] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function searchHelper(i) {
    console.log(i);
  }

  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a onClick={handleShow}>About</a>

        <a href="#contact">Contact</a>
        <input
          type="text"
          placeholder="Search.."
          onChange={searchHelper}
          value={searchHelper}
        />
      </div>
      <div className="App-header">
        <marquee>Welcome to my site!</marquee>
        <h1> Raisa Ahmed</h1>
        <CounterButton />
      </div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
         <Cart/>
        </Modal>
      </>
      <div className="App">
        <Tabs />
      </div>
    </>
  );
}

export default App;
