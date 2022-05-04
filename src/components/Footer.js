import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex-center-center">
      <nav className="navigation">
        <ul className="nav-list-footer flex-between">
          <Link to="/contacts">
            <li>Contacts</li>
          </Link>
          <Link to="/mentions">
            <li>Télécharger CV</li>
          </Link>
          <Link to="/">
            <li>
              <div className="img-resp">
                <img
                  className="logo"
                  src="./logoMarco.png"
                  alt="logo du site"
                />
              </div>
            </li>
          </Link>
          <Link to="/galery">
            <li>Galerie</li>
          </Link>
          <Link to="/mentions">
            <li>Mentions Légales</li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
