import React from "react";
// import Hero from "../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";


// import {  FormBtn } from "../../components/Form";

import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";

 


const Orders = () => (
  <div>
     
    <Container style={{ marginTop: 30 }}>
       <Row>
        <Col size="md-8">
          <h1>Thank You !</h1>
        </Col>

         
      
       </Row>

       <Row>
       <Jumbotron>
              <h1>Showcase Menu Image Here</h1>
            </Jumbotron>
        <Col size="md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et
            metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
            vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et
            interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor
            erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non
            nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus.
            Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat
            mattis tortor vitae mattis.
          </p>
           
        </Col>
        
        <Col size="md-4">
        <h1>Your Shopping Cart</h1>
       
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et
            metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
            vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et
            interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor
            erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non
            nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus.
            Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat
            mattis tortor vitae mattis.
          </p>
           
        </Col>
        
      </Row>

      <Row>
        <Col size="md-8">
          <h4>nothing here</h4>
        </Col>

         <Col size="md-4">
          
         {/* <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                // onClick={this.handleFormSubmit}
              > */}
              <Link to="/orders">← Go to Order Online</Link>
                {/* Pay Now
        </FormBtn> */}
        </Col>
      
       </Row>

      
    </Container>
  </div>
);

export default Orders;
