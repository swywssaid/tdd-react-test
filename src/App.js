import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
      </header>
      <button disabled={disabled} data-testid="minus-button" onClick={() => setCount((prev) => --prev)}>
        -
      </button>
      <button disabled={disabled} data-testid="plus-button" onClick={() => setCount((prev) => ++prev)}>
        +
      </button>
      <button data-testid="on/off-button" style={{ backgroundColor: "blue" }} onClick={() => setDisabled((prev) => !prev)}>
        on/off
      </button>
    </div>
  );
}

export default App;
