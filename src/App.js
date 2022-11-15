import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div className="App-header">
        <h1> Hello, my name is Raisa Ahmed</h1>
      </div>
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>add 1 </button>
    </div>
    </>
  );
}

export default App;
