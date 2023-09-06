import React from "react";
import "./Home.css";
import image from "../../constants/images";

const Home = () => {
  return (
    <section className="app__home">
      <h1>Latest Release </h1>
      <div className="app__home-img">
        <img src={image.bg} alt="" />
      </div>
    </section>
  );
};

export default Home;
