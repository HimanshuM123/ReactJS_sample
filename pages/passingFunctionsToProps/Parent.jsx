import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const incrementFunc = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <Child increment={incrementFunc} reset={reset} />
      Counter : {count}
    </div>
  );
};

export default Parent;
