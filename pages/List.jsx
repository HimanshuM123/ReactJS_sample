import React from "react";

const List = () => {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  const peopleList = people.map((obj) => <li>{obj}</li>);
  return (
    <div>
      <ul>{peopleList}</ul>
    </div>
  );
};

export default List;
