import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import achievments from "../data/Achievments";
import AchievmentsList from "../components/AchievmentsList";
import pictures from "../data/Pictures";
import PicturesList from "../components/PicturesList";

const Achievments = () => {
  const [pic, setPic] = useState([pictures]);

  useEffect(() => {
    randomPictures();
  }, []);

  const randomPictures = () => {
    let newPictures = [];
    for (let i = 0; i < pictures.length; i++) {
      let randomImg = pictures[Math.floor(Math.random() * pictures.length)];
      let gridImg = newPictures.length + 1;

      if (!newPictures.includes(randomImg)) {
        randomImg.classDiv = `grid${gridImg}`;
        randomImg.classImg = `img-resp img-achievments${gridImg}`;
        newPictures.push(randomImg);
      }
    }
    setPic(newPictures);
  };

  return (
    <div>
      <Header />
      <div className="achievments-presentation flex-center">
        <div className="achievments-pres flex-center align-center">
          <div>
          {achievments.map((achievments) => (
            <AchievmentsList achievments={achievments} key={achievments.id} />
          ))}
          </div>
        </div>
        <div className="profile flex-center align-center">
          <div>
            <div className="grid">
              {pic.slice(0, 7).map((picture, index) => (
                <PicturesList key={index} picture={picture} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Achievments;
