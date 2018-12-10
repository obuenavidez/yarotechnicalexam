import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";

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
     
      <Container style={{ marginTop: 330 }}>
      
        <Row>
           
          <Col size="md-12">
            {/* <Jumbotron>
              <h1>Users On My List</h1>
            </Jumbotron> */}
               <h1>Inbox</h1>
            <p>
            {this.state.users.length ? (
              
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                    <Link to={"/users/" + user._id}>
                      
                        <strong>
                        {user.fname} {user.lname} 
                      </strong>
                      
                      <br/>
                       
                        Description {user.message}
                       
                      
                    </Link>
                    <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h2><center>Empty</center></h2>
            )}
            </p>
          </Col>
        </Row>
        
      </Container>
      
    );
  }
}

export default Users;