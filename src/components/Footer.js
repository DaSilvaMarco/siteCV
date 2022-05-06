import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer align-center">
      <nav className="flex-between footer-pres">
        <div className="align-center footer-left">
          <ul className="footer-nav align-center flex-between footer-nav-left flex-between">
            <li>
              <a href="marcoDaSilvaCv.pdf">Télécharger CV</a>
            </li>
            <Link to="/mentions">
              <li>Mentions Légales</li>
            </Link>
            <li>
              <div className="adress">
                <p>24 Rue Thiac</p>
                <p>33 000 Bordeaux</p>
              </div>
            </li>
            <li>
              <div>
                <a href="mailto:tdasilva.marco@gmail.com">
                  tdasilva.marco@gmail.com
                </a>
                <p className="phone">06 28 54 22 31</p>
              </div>
            </li>
            <li className="margin-contacts">
              <div className="footer-contacts">
                <a
                  href="https://www.linkedin.com/in/marco-da-silva-51b99019b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./img/contacts/linkedin.png"
                    alt="logo linkedin"
                    target="_blank"
                    rel="noreferrer"
                    className="img-resp"
                  />
                </a>
              </div>
            </li>
            <li className="margin-contacts">
              <div className="footer-contacts">
                <a
                  href="https://github.com/DaSilvaMarco"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <img
                    src="./img/contacts/github.png"
                    alt="logo github"
                    target="_blank"
                    rel="noreferrer"
                    className="img-resp"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
