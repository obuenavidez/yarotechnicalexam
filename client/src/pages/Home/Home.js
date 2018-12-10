import React from "react";
//import {  Hero } from "../../components/Hero";
import {  Container } from "../../components/Grid";
import { Row, Col } from "../../components/Grid";
import Hero1 from "../../components/Hero1";
import { Link } from "react-router-dom";
import {  FormBtnCenter } from "../../components/Form";

//import { FormBtn } from "../../components/Form";


// import { Hero} from "../../components/Hero";
 
const Home = () => (
  <div>
    <Hero1 backgroundImage="/assets/images/yaro2.png">
      <center>
      <h1>Yaro</h1>
      <h3>444 N Michigan , Chicago IL 60611</h3>
       
      <Link to="/login"> 
             <FormBtnCenter>
               Login
              </FormBtnCenter>
      </Link>
      

      
          
       </center>
       

    </Hero1>
     
  </div>
);

export default Home;
