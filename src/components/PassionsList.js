import React from "react";

const PassionsList = ({ passion }) => {
  return (
    <div>
      <ul>
        <li>{passion.name}</li>
        <li>{passion.description}</li>
      </ul>
    </div>
  );
};

export default PassionsList;
