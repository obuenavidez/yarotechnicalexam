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
// import { Link } from "react-router-dom";


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
        message: this.state.message
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      



      <Container style={{ marginTop: 30 }}>
        
       <Row>
         <br/>
         <br/>
         <br/>
          <Col size="md-3">
          </Col>
          <Col size="md-6">
          <h1> Login</h1>


            {/* <Jumbotron>
              <h2>Add Product </h2>
            </Jumbotron> */}
            <center>
      
            <form>
              <Input
                value={this.state.fname}
                onChange={this.handleInputChange}
                name="fname"
                placeholder="username"
              />
              <Input
                value={this.state.lname}
                onChange={this.handleInputChange}
                name="lname"
                placeholder="password"
              />
              
              <FormBtn
                disabled={!(this.state.lname && this.state.fname)}
                onClick={this.handleFormSubmit}
              >
                Send
              </FormBtn>
            </form>
            </center>
          </Col>
          <Col size="md-3">
          </Col>
         
        
       </Row> 

        
      
    </Container>
      
         
          
        
    );
  }
}

export default Users;
