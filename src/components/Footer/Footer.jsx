import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-social">
        <Link
          to="https://www.instagram.com/verse_of_lines/?igshid=MzRlODBiNWFlZA%3D%3D"
          target="_blank"
        >
          <i className="fa-brands fa-instagram icon"></i>
        </Link>

        <Link to="/">
          <i className="fa-brands fa-facebook icon"></i>
        </Link>
        <Link to="/">
          <i className="fa-brands fa-x-twitter icon"></i>
        </Link>
      </div>
      <Link
        className="copyright"
        to="https://www.instagram.com/itz_me.basil/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
        target="_blank"
      >
        Copyright ©&nbsp;2023 Alovmi.co
      </Link>
    </footer>
  );
};

export default Footer;
