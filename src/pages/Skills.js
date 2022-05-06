import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import skills from "../data/Skills";
import SkillsList from "../components/SkillsList";
import skillsPictures from "../data/SkillsPictures";
import SkillsPicturesList from "../components/SkillsPicturesList";

const Skills = () => {
  const [skillsList, setSkillsList] = useState([skills]);

  useEffect(() => {
    setSkillsList(skillsList);
  }, [skillsList]);

  return (
    <div>
      <Header />
      <div className="skills-pres align-center">
        <div className="flex-around align-center">
          <div className="skills-left">
            <div>
              <p>Langues :</p>
              <ul>
                {skills.map((element) =>
                  element.type === "language" ? (
                    <SkillsList element={element} key={element.id} />
                  ) : null
                )}
              </ul>
              <p>Personnalité :</p>
              <ul>
                {skills.map((element) =>
                  element.type === "personality" ? (
                    <SkillsList element={element} key={element.id} />
                  ) : null
                )}
              </ul>
            </div>
            <div>
              <p>
                <a href="./marcoDaSilvaDiplome.pdf">
                  Télécharger Diplôme Développeur Web RNCP5
                </a>
              </p>
              <img
                className="img-resp img-cv"
                src="./img/cv.png"
                alt="diplôme dev web"
              />
            </div>
          </div>
          <div className="skills-right flex-center align-center">
            <div className="grid">
              {skillsPictures.map((picture) => (
                <SkillsPicturesList picture={picture} key={picture.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
