import React from "react";

const ExperiencesList = ({ exp }) => {
  return (
    <ul>
      <li className="exp-name">{exp.name}</li>
      <li className="exp-date">{exp.date}</li>
      <li className="exp-desc last">{exp.description}</li>
    </ul>
  );
};

export default ExperiencesList;
