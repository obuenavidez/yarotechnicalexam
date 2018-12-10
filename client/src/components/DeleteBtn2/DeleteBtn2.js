import React from "react";
import "./DeleteBtn2.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn2 = props => (
  <button className="delete-btn2" {...props}>
    Pay Now
  </button>
);

export default DeleteBtn2;
