import React from "react";

const PicturesList = ({ picture }) => {
  return (
    <div key={picture.id} className={picture.classDiv}>
      <img className={picture.classImg} src={picture.src} alt={picture.alt} />
    </div>
  );
};

export default PicturesList;
