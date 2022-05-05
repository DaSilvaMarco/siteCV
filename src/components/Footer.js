import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex-center flex-center-center">
      <nav className="div-footer">
        <ul className="nav-list-footer flex-between">
          <Link to="/contacts">
            <li>Contacts</li>
          </Link>
          <Link to="/mentions">
            <li>Télécharger CV</li>
          </Link>
          <Link to="/">
            <li>
              <ul className="adress">
                <li>24 Rue Thiac</li>
                <li>33 000</li>
                <li>Bordeaux</li>
              </ul>
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
