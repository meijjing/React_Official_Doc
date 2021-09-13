import React, { useState } from "react";

function UseStateExample() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
}

export default UseStateExample;
