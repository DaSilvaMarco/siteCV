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
              <li>Skills</li>
            </NavLink>
            <NavLink
              to="/contacts"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Contacts</li>
            </NavLink>
            <NavLink
              to="/diplomas"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Diplômes</li>
            </NavLink>
            <NavLink
              to="/languages"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Langues</li>
            </NavLink>
            <NavLink
              to="/passions"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Passions</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
