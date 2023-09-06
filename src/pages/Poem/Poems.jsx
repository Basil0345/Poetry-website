import React from "react";
import "./Poems.css";
import Card from "../../components/Card/Card";
import images from "../../constants/images";

const Poems = () => {
  return (
    <section className="app__poems">
      <h1>Poems</h1>
      <div className="app__poems-container">
        <Card image={images.bg} text={"nightsky"} />
        <Card image={images.bg} text={"nightsky"} />
        <Card image={images.bg} text={"nightsky"} />
      </div>
    </section>
  );
};

export default Poems;
