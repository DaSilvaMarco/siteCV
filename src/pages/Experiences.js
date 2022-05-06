import React from "react";
import ExperiencesList from "../components/ExperiencesList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import experiences from "../data/Experiences";

const Experiences = () => {
  return (
    <div>
      <Header />
      <div className="experiences-pres flex-center align-center">
        <div>
          <ul>
            {experiences.map((exp) => (
              <ExperiencesList key={exp.id} exp={exp} />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experiences;
