import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PassionsList from "../components/PassionsList";
import PassionsListPictures from "../components/PassionsListPictures";
import passions from "../data/Passions";
import passionsPictures from "../data/PassionsPictures";

const Passions = () => {
  return (
    <div>
      <Header />
      <div className="passions-pres flex-center align-center">
        <div className="passions-left">
          <ul className="passions-margin">
            {passions.map((passion) => (
              <PassionsList key={passion.id} passion={passion} />
            ))}
          </ul>
        </div>
        <div className="passions-right flex-center align-center">
          <div className="passions-grid">
            {passionsPictures.map((pic) => (
              <PassionsListPictures key={pic.id} pic={pic} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Passions;
