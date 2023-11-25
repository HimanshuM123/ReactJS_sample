import React from "react";

const toggleElement = () => {
  const [hide, setHide] = React.useState(true);
  return (
    <div>
      <button onClick={() => setHide(!hide)}>Hide Element Below</button>

      {hide && <div>Toggle Challenge</div>}
    </div>
  );
};

export default toggleElement;
