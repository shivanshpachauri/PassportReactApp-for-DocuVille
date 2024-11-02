import React from "react";
import Passportbackground from "../assets/Passportbackground.jpg";
const CustomFigure = () => {
  return (
    <div>
      <figure>
        <img
          src={Passportbackground}
          alt="Trulli"
          style={{ objectFit: "cover", width: "500px", height: "500px" }}
        />
        <figcaption>Passport</figcaption>
      </figure>
    </div>
  );
};

export default CustomFigure;
