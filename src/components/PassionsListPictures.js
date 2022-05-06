import React from "react";

const PassionsListPictures = ({ pic }) => {
  return (
    <div key={pic.id} className={`grid${pic.id}`}>
      <img
        className={`img-achievments${pic.id} img-resp`}
        src={pic.src}
        alt={pic.alt}
      />
    </div>
  );
};

export default PassionsListPictures;
