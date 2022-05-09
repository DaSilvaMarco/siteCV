import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import GaleryPictures from "../components/GaleryPictures";
import Header from "../components/Header";
import galery from "../data/Galery";

const Galery = () => {
  const [gal, setGal] = useState([galery]);

  useEffect(() => {
    randomGalery();
  }, []);

  const randomGalery = () => {
    let newGalery = [];
    for (let i = 0; i < galery.length; i++) {
      let randomImg = galery[Math.floor(Math.random() * galery.length)];
      let gridImg = newGalery.length + 1;

      if (!newGalery.includes(randomImg)) {
        randomImg.classDiv = `galery-grid${gridImg}`;
        randomImg.classImg = `img-resp img-achievments${gridImg}`;
        newGalery.push(randomImg);
      }
    }
    setGal(newGalery);
  };

  return (
    <div>
      <Header />
      <div className="galery-pres flex-center align-center">
        <div className="galery-grid">
          {gal.slice(0, 15).map((picture, index) => (
            <GaleryPictures key={index} picture={picture} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Galery;
