import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/creations">Créations</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
};

export default Nav;
