import React from "react";
import "./FriendCard.css";

import { Link } from "react-router-dom";
import { FormBtnInfo } from "../../components/Form";
import { FormBtn } from "../../components/Form";
 


const FriendCard = props => (

  


  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
      <div className="content">
      <Link to="/projects">  
           <FormBtnInfo>
               View Code
          </FormBtnInfo>
          <FormBtn>
               View Demo
          </FormBtn>
      </Link>    
          
    </div>
    </div>
    
    <span onClick={() => props.handleItemClick(props.id)} 
    className="remove">

    {/* <span onClick={this.addProduct.bind(this, this.state.productInput)}
    className="remove"> */}

    
    
      +
    </span>
  </div>
);

export default FriendCard;
