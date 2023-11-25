import React from "react";
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

const userList = users.map((user) => <li>{user.name}</li>);
const mapExample = () => {
  return (
    <div>
      <ul>{userList}</ul>
    </div>
  );
};

export default mapExample;
