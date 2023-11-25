import React from "react";
import Utils from "./Utils";

const Avatar = ({ person, size }) => {
  console.log(person);
  return (
    <img
      className="avatar"
      src={Utils(person, "s")}
      width={size}
      height={size}
      alt="img"
    />
  );
};

export default Avatar;
