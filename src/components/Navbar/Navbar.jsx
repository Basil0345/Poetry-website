import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>VERSE OF LINES</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="li__font">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="li__font">
          <NavLink to="/About">About</NavLink>
        </li>
        <li className="li__font">
          <NavLink to="/poems">Poems</NavLink>
        </li>
        <li className="li__font">
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
