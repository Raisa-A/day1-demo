import { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);
    
    return (
     
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>add 1 </button>
        <button onClick={() => setCount(count - 1)}>subtract 1 </button>
        <button onClick={() => setCount(0)}>Reset </button>

        </div>
        
     
    );
  }
  
  export default Button;
  