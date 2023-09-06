import React from "react";
import { images } from "../../constants";
import "./About.css";

const About = () => {
  return (
    <section className="app__about">
      <div className="app__about-img">
        <img src={images.Aibel} alt="" />
      </div>
      <div className="app__about-content">
        <p style={{ whiteSpace: "pre-wrap" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          quisquam nulla doloremque rem obcaecati, ea dolorem qui voluptatum
          asperiores, dolore recusandae natus eum sunt ratione! Nisi architecto
        </p>
        <p style={{ whiteSpace: "pre-wrap" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          quisquam nulla doloremque rem obcaecati, ea dolorem qui voluptatum
          asperiores, dolore recusandae natus eum sunt ratione! Nisi architecto
        </p>
        <p style={{ whiteSpace: "pre-wrap" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          quisquam nulla doloremque rem obcaecati, ea dolorem qui voluptatum
          asperiores, dolore recusandae natus eum sunt ratione! Nisi architecto
        </p>
      </div>
    </section>
  );
};

export default About;
