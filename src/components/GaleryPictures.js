import React from "react";

const GaleryPictures = ({ picture }) => {
  return (
    <div className={picture.classDiv} key={picture.id}>
      <img className={picture.classImg} src={picture.src} alt={picture.alt} />
    </div>
  );
};

export default GaleryPictures;
