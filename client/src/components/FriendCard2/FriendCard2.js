import React from "react";
import "./FriendCard2.css";

// import { Link } from "react-router-dom";
// import { FormBtnInfo } from "../../components/Form";
//import { FormBtn } from "../../components/Form";
 


const FriendCard2 = props => (

  


  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    
      <ul>
        <li>
          
          <strong>Project Name:</strong> {props.name}
        </li>
        <li>
          <strong>Description :</strong> {props.occupation}
        </li>
         
        
      </ul>
      <div className="content">
           <a 
          className="btn btn-warning"
          href={props.gurl}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Code
        </a>
        {/* <button onClick={() => props.handleClick(props._id)} >
          {props.buttonText}
        </button> */}
        
         <a 
          className="btn btn-success"
          href={props.url}
          rel="noopener noreferrer"
          target="_blank"
          float = "right"
        >
          View Demo
        </a>
        {/* <button onClick={() => props.handleClick(props._id)} >
          {props.buttonText}
        </button> */}
       
    </div>
    </div>
    
    
  </div>
);

export default FriendCard2;
