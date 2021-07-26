import React from "react";

export default function Counter() {
  const [counter, setcounter] = React.useState(0);
  return (
    <div id="counter-container" className="Counter">
      <h1>This is counter component</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setcounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}
