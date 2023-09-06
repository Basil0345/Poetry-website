import React from "react";
import "./Card.css";

const Card = ({ image, text }) => {
  return (
    <div className="app__card">
      <img src={image} alt="" />
      <div className="app__card-content">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Card;
