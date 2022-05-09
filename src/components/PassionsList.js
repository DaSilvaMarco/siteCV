import React from "react";

const PassionsList = ({ passion }) => {
  return (
      <ul>
        <li className="passions-name">{passion.name}</li>
        <li className="passions-desc">{passion.description}</li>
      </ul>
  );
};

export default PassionsList;
