import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

import {  FormBtnCenter } from "../../components/Form";


class UserDetail extends Component {
  state = {
    user: {}
  };
  // When this component mounts, grab the user with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container style={{ marginTop: 330 }}>
      <Row>
         <Col size="md-3">
          </Col>
          
          <Col size="md-6">
          <h1>Detail Message from  : {this.state.user.fname}   
          </h1>

           
               <h2>Subject : {this.state.user.lname}</h2>
              <h2>Message</h2>
              <p>
                
                {this.state.user.message}
              </p>
             </Col>
            
           
        </Row>
        <Row>
        <Col size="md-3">
           </Col>
          <Col size="md-6">
              <br/>  <br/>  <br/>
                <Link to="/notification"> 
                <FormBtnCenter>
                ← Back to Notification
                </FormBtnCenter>
              </Link>   
          </Col>
          <Col size="md-3">
          </Col>
          
        </Row>  
      </Container>
    );
  }
}

export default UserDetail;
