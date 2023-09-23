import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ image, text, slug }) => {
  return (
    <div className="app__card">
      <Link to={`/poems/${slug}`}>
        <img src={image} alt="" />
        <div className="app__card-content">
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
