import React from "react";
import "./Spinner.css";
import { images } from "../../constants";

const Spinner = () => {
  return (
    <div className="app__spinner">
      <img src={images.loading} alt="" />
    </div>
  );
};

export default Spinner;
