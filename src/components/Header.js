import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
