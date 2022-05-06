import React from "react";

const SkillsPicturesList = ({ picture }) => {
  return (
    <div key={picture.id} className={`grid${picture.id}`}>
      <img
        className={`img-achievments${picture.id} img-resp`}
        src={picture.src}
        alt={picture.alt}
      />
    </div>
  );
};

export default SkillsPicturesList;
