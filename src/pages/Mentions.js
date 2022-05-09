import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Mentions = () => {
  return (
    <div>
      <Header />
      <div className="mentions-pres align-center flex-center">
        <div>
          <h1>Mentions légales</h1>
          <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance en l'économie numérique, il est précisé aux
            utilisateurs du site marcodasilva-dev l'identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
          <p className="mentions-title">Edition du site</p>
          <p>
            Le présent site, accessible à l’URL www.marcodasilva-dev.com (le «
            Site »), est édité par : Marco Da Silva, résidant 24 Rue Thiac 33
            000 Bordeaux, de nationalité Portugaise (Portugal), né(e) le
            11/12/1988
          </p>
          <p className="mentions-title">Hébergement</p>
          <p>
            Le Site est hébergé par la société O2Switch, situé 222 Boulevard
            Gustave Flaubert, 63000 Clermont-Ferrand, (contact téléphonique ou
            email : (+33) 4 44 44 60 40).
          </p>
          <p className="mentions-title">Directeur de publication</p>
          <p>Le Directeur de la publication du Site est Marco Da Silva.</p>
          <p className="mentions-title">Nous contacter</p>
          <ul>
            <li>Par téléphone : +33628542231</li>
            <li>Par email : tdasilva.marco@gmail.com</li>
            <li>Par courrier : 24 Rue Thiac 33 000 Bordeaux</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentions;
