import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="app__pagenotfound">
      <h1>Page Not Found</h1>
      <a href="/">GO Back</a>
    </div>
  );
};

export default NotFound;
