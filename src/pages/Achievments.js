import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import achievments from "../data/Achievments";
import AchievmentsList from "../components/AchievmentsList";

const Achievments = () => {
  return (
    <div>
      <Header />
      <div className="achievments-presentation flex-center">
        <div className="presentation">
          {achievments.map((achievments) => (
            <AchievmentsList achievments={achievments} key={achievments.id} />
          ))}
        </div>
        <div className="profile"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Achievments;
