import React from "react";

const AchievmentsList = ({ achievments }) => {
  return (
    <div>
      <p className="achievments-name">{achievments.name}</p>
      <p className="achievments-description">{achievments.description}</p>
    </div>
  );
};

export default AchievmentsList;
