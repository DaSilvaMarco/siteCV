import React from "react";

const HomeList = ({ person }) => {
  return (
    <div key={person.id}>
      <h1 className="name">
        {person.firstname} {person.name}{" "}
        <span className="age">{person.age}</span>
      </h1>
      <p>{person.description}</p>
      <p>{person.profil}</p>
      <p>{person.explication}</p>
    </div>
  );
};

export default HomeList;
