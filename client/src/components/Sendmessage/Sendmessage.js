import React, { Component } from "react";
//import DeleteBtn from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Hero from "../../components/Hero";

//import LeftNav from "../../components/LeftNav";

// import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";


import {  FormBtnCenter } from "../../components/Form";

class Users extends Component {
  state = {
    users: [],
    fname: "",
    lname: "",
    message: ""
  };

  componentDidMount() {
    this.loadUsers();
  }
  componentDidUpdate(){
    console.log(this.state);
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, fname: "", lname: "", message: "" })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.fname && this.state.lname) {
      API.saveUser({
        fname: this.state.fname,
        lname: this.state.lname,
        message: this.state.message,
        date:this.state.date
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      



      <Container style={{ marginTop: 330 }}>
        
       <Row>
          <Col size="md-3">
          </Col>
          <Col size="md-6">
          <h1> Send Us A Message</h1>


            {/* <Jumbotron>
              <h2>Add Product </h2>
            </Jumbotron> */}
            <center>
      
            <form>
              <Input
                value={this.state.fname}
                onChange={this.handleInputChange}
                name="fname"
                
                placeholder="Your Name (required)"
              />
              <Input
                value={this.state.lname}
                onChange={this.handleInputChange}
                name="lname"
                placeholder="Subject (required)"
              />
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Start Typing here ..."
              />
               
              <FormBtnCenter
                disabled={!(this.state.lname && this.state.fname
                          && this.state.message)}
                onClick={this.handleFormSubmit}
                alert="Message Sent"
              >
                 Send
              </FormBtnCenter>
            </form>
            </center>
          </Col>
          <Col size="md-3"> <strong> 
            
            <br/><br/><br/><br/> 
             ! Tip  </strong>
             <p>
             Please Fill in all the fields otherwise your message will not be sent. Thank You !

             - Yora 
            </p>
          </Col>
         
        
       </Row> 

        
      
    </Container>
      
         
          
        
    );
  }
}

export default Users;
