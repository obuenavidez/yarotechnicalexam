import React from "react";
import "./LeftNav.css";

// import { Link } from "react-router-dom";
// import { FormBtnInfo } from "../../components/Form";
//import { FormBtn } from "../../components/Form";
 
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import { FormBtn } from "../../components/Form";


const LeftNav = props => (
  <div>
  <Hero backgroundImage="/assets/images/ODB.NorthWestern.png">
            
  <h3><center>"If you can think it ... I can do it " </center></h3>
  
 </Hero>

 <div className="content">
    <br/>
      <ul>
        <li>
            Website  : <strong><a href="https://fierce-sierra-65975.herokuapp.com/ " target ="#"> www.obuenavidez.com</a></strong> 
              
          
        </li>
        <li>
            GitHub Repo : <strong><a href="https://github.com/obuenavidez/" target ="#"> www.github.com/obuenavidez</a></strong> 
            </li>
        <li>
           Email Adress : <strong>obuenavidez@gmail.com</strong>
        </li>
        <li>
             Contact Number :  <strong>( 773 ) 567 -3930</strong>
        </li>
         
        
      </ul>
      </div> 
      <Link to="/sendmessage">  
                <FormBtn>
                        Message Me
                </FormBtn>
      </Link>
    
    
  </div>
);

export default LeftNav;
