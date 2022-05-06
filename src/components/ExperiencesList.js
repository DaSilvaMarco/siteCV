import React from "react";

const ExperiencesList = ({ exp }) => {
  return (
    <div>
      <ul>
        <li>{exp.name}</li>
        <li>{exp.date}</li>
        <li>{exp.description}</li>
      </ul>
    </div>
  );
};

export default ExperiencesList;
