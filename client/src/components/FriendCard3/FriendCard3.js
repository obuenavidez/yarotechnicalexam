import React from "react";
import "./FriendCard3.css";

// import { Link } from "react-router-dom";
// import { FormBtnInfo } from "../../components/Form";
//import { FormBtn } from "../../components/Form";
//import { FormBtnCenter } from "../../components/Form";
 


const FriendCard3 = props => (

  


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
     
    </div>
   
                    
    
    
  </div>
);

export default FriendCard3;
