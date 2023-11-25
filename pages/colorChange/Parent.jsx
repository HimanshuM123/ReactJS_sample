import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [color, setColor] = useState("black");
  const selectFunction = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <select onChange={selectFunction}>
        <option value="black">Select</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
      <Child selectedColor={color}></Child>
    </div>
  );
};

export default Parent;
