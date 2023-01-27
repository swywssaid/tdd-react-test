import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
      </header>
      <button data-testid="minus-button" onClick={() => setCount((prev) => --prev)}>
        -
      </button>
      <button data-testid="plus-button" onClick={() => setCount((prev) => ++prev)}>
        +
      </button>
    </div>
  );
}

export default App;
