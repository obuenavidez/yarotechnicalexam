import React from "react";
import "./Hero1.css";

const Hero1 = props => (
  <div className="hero1 text-left" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default Hero1;
