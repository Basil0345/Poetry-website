import React from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-social">
        <a
          href="https://instagram.com/aibel__k__cherusseril?igshid=MzRlODBiNWFlZA== "
          target="_blank"
        >
          <BsInstagram className="icon" />
        </a>

        <a href="" target="_blank">
          <BsFacebook className="icon" />
        </a>
        <a href="" target="_blank">
          <BsTwitter className="icon" />
        </a>
      </div>
      <p>Copyright ©&nbsp;2023 Alovmi.co</p>
    </footer>
  );
};

export default Footer;
