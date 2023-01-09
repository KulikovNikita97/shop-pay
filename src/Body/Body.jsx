import React from "react";
import "./Body.css";
import main_image from "./../google-pay.png";

const Body = () => {
  return (
    <div className="Body">
      <img src={main_image} alt={"main_image"} />
    </div>
  );
};

export default Body;
