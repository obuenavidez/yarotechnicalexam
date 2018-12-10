import React from "react";

export const FormBtnInfo = props => (
  <button {...props} style={{ float: "right", marginBottom: 20 }} className="btn btn-info">
    {props.children}
  </button>
);
