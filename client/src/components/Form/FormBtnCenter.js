import React from "react";



export const FormBtnCenter = props => (
  <button {...props} style={{ float: "center", marginBottom: 20 }} className="btn btn-warning">
    {props.children}
     
  </button>
);
