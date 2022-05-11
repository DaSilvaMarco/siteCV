import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  const respMenu = () => {
    let body = document.querySelector("body");
    body.classList.toggle("open");
    body.classList.toggle("hidden");
  };

  return (
    <header className="header">
      <div className="div-header">
        <div className="div-logo">
          <NavLink to="/">
            <div className="img-resp">
              <img className="logo" src="./logo.png" alt="logo du site" />
            </div>
          </NavLink>
        </div>
        <Navigation />

        <div onClick={respMenu} className="resp-logo">
          <img
            className="img-resp"
            src="./burger-bar.png"
            alt="menu responsive"
          />
        </div>

        <nav className="resp-menu">
          <ul>
            <NavLink to="/">
              <li onClick={respMenu}>Accueil</li>
            </NavLink>
            <NavLink to="/achievments">
              <li onClick={respMenu}>Réalisations</li>
            </NavLink>
            <NavLink to="/skills">
              <li onClick={respMenu}>Skills et Diplôme</li>
            </NavLink>
            <NavLink to="/experiences">
              <li onClick={respMenu}>Expériences</li>
            </NavLink>
            <NavLink to="/passions">
              <li onClick={respMenu}>Passions</li>
            </NavLink>
            <NavLink to="/galery">
              <li onClick={respMenu}>Galerie</li>
            </NavLink>
            <NavLink to="/contacts">
              <li onClick={respMenu}>Contacts</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
