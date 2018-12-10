import React from "react";
import "./UpBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UpBtn = props => (
  <span className="up-btn" {...props}>
    +
  </span>
);

export default UpBtn;
