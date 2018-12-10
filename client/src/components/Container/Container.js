// import React from "react";

// const Container = props =>
//   <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;

// export default Container;


import React from "react";
import "./Container.css";

const Container = props => <main className="container">{props.children}</main>;

export default Container;
