import React, { useState } from "react";

const DisableButton = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button disabled={text.length == 0}>Submit</button>
    </>
  );
};

export default DisableButton;
