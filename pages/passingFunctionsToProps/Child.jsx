import React from "react";

const Child = ({ increment, reset }) => {
  return (
    <div>
      <button onClick={increment}>Click me</button>
      <button onClick={reset}>Reset Counter</button>
    </div>
  );
};

export default Child;
