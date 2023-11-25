import React from "react";
import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Mumbai", "Delhi"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BN",
    cities: ["Dhaka", "Chittagong"],
  },
];

const DependentSelect = () => {
  const [country, setCountry] = useState(0);

  const handleChange = (e) => {
    setCountry(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {countries.map((obj, idx) => (
          <option value={idx}>{obj.name}</option>
        ))}
      </select>

      <select>
        {countries[country].cities.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DependentSelect;
