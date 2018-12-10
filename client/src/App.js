import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import UserDetail from "./pages/UserDetail";

import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";

import Inbox from "./pages/Inbox";
import Aboutme from "./pages/Aboutme";
import Sendmessage from "./pages/Sendmessage";
import Notification from "./pages/Notification";

import Apisample from "./pages/Apisample";
import Projects from "./pages/Projects";

import Login from "./pages/Login";
import API2 from "./utils/API2";

//import Products from "./pages/Products";

import Home from "./pages/Home";
import Footer from "./components/Footer";



import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";

 


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Books} /> */}
        <Route exact path="/" component={Home} />
        
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/users/:id" component={UserDetail} />
         

         <Route exact path="/users" component={Users} />
         <Route exact path="/orders" component={Orders} />
         {/* <Route exact path="/sendmessage" component={Sendmessage} /> */}
         <Route exact path="/checkout" component={Checkout} />
         <Route exact path="/thankyou" component={Thankyou} />
         

          <Route exact path="/inbox" component={Inbox} />
          <Route exact path="/aboutme" component={Aboutme} />
          <Route exact path="/sendmessage" component={Sendmessage} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/apisample" component={Apisample} />
          

          <Route exact path="/projects" component={Projects} />
          <Route exact path="/login" component={Login} />
      
      
      




        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
   
  </Router>
);

export default App;
