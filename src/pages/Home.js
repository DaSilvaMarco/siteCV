import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeList from "../components/HomeList";
import person from "../data/Myself";

const Home = () => {
  return (
    <section>
      <Header />
      <div className="home-presentation flex-center">
        <div className="profile img-resp align-center">
          <img
            className="photo-profile"
            src="./img/profile.png"
            alt="profil Marco Da Silva"
          />
        </div>
        <div className="presentation flex-center align-center">
          {person.map((person) => (
            <HomeList key={person.id} person={person} />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Home;
