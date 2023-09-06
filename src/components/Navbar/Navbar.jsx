import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>VERSE OF LINES</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="li__font">
          <Link to="/">Home</Link>
        </li>
        <li className="li__font">
          <Link to="/About">About</Link>
        </li>
        <li className="li__font">
          <Link to="/poems">Poems</Link>
        </li>
        <li className="li__font">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
