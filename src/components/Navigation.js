import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="section-home">
      <nav className="navigation flex-between">
        <div className="div-nav">
          <ul>
            <NavLink
              to="/achievments"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Réalisations</li>
            </NavLink>
            <NavLink
              to="/skills"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Skills et Diplôme</li>
            </NavLink>
            <NavLink
              to="/experiences"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Expériences</li>
            </NavLink>
            <NavLink
              to="/passions"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Passions</li>
            </NavLink>
            <NavLink
              to="/galery"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Galerie</li>
            </NavLink>
            <NavLink
              to="/contacts"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Contacts</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
