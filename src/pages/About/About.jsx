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
        <p>
          Hey there 👋 I'm Aibel
          <br />I write peoms during my free times, and post here...
        </p>
      </div>
    </section>
  );
};

export default About;
