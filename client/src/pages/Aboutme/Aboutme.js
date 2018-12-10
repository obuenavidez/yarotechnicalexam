import React from "react";
//import Hero from "../../components/Hero";

//import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";



import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";


// import {  FormBtn } from "../../components/Form";

//import Jumbotron from "../../components/Jumbotron";
//import { Link } from "react-router-dom";

//import { FormBtn } from "../../components/Form";
//import { FormBtnCenter } from "../../components/Form";
import FriendCard3 from "../../components/FriendCard3";
import { FormBtnCenter } from "../../components/Form";

import LeftNav from "../../components/LeftNav";




const Orders = () => (
  <div>
     <Container style={{ marginTop: 30 }}>
       <Row>
        <Col size="md-4">
           <h2>MERN FULL STACK</h2>
        </Col>

        <Col size="md-8">
          <h2> About Me</h2>
          <h4> Latest Project</h4> 
        </Col>
       </Row>

       <Row>
       <Col size="md-4">
       {/* <Hero backgroundImage="/assets/images/ODB.NorthWestern.png">
       
            <h3><center>"If you can think it ... I can do it "</center></h3>
            {/* <button>More Photos </button> */}
      {/* </Hero> */}
       {/* <Jumbotron backgroundImage="https://i.imgur.com/qkdpN.jpg">
              <h4>My Image Here</h4>
       </Jumbotron>  */}

        {/* <p>
          
         
          Website : www.obuenavidez.com<br/>
          Git Repo : <a href="https://github.com/obuenavidez/" target ="#"> www.github.com/obuenavidez</a><br/>
  
          Contact # : 773.567.3930<br/>
          Email : obuenavidez@gmail.com<br/><br/>
          <Link to="/sendmessage">  
          <FormBtn>
                  Message Me
          </FormBtn>
          </Link> 
          

          
      </p> */}
      <LeftNav
      />
      </Col>

       <Col size="md-8">

      <FriendCard3
                
                //addItem={this.addItem}
                //shake={!this.state.score}
                
                image="/assets/images/clicky.png"
                occupation="This application renders different images (of your choice) to the screen. Each image should listen for click events. It keeps track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.Once the user's score is reset after an incorrect guess, the game should restart"
                 
                url="https://guarded-waters-89693.herokuapp.com/" 
                
        />
        <FormBtnCenter to="/sendmessage">  
                <a href="https://guarded-waters-89693.herokuapp.com/" target ="#">View Demo</a>
                </FormBtnCenter>
                    

       {/* <Hero backgroundImage="/assets/images/clicky.png">
       <div>
       <center>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        
         <FormBtnCenter to="/sendmessage">  
         <a href="https://guarded-waters-89693.herokuapp.com/" target ="#">View Demo</a>
         </FormBtnCenter>
          </center>  
      </div>
     
       </Hero> */}
       
       </Col>   
       </Row> 

        <Row>
        <Col size="md-4">
         
           
          
           
        </Col>
        
        <Col size="md-8">
        
       <p>
           {/* <Link to="/projects">  
           <FormBtn>
                My Projects +
          </FormBtn>
          </Link> */}
           
          <hr/>
          </p>
           <h2> Educational Achievements</h2>

            <p>
              <h4> Full Flex Web Developer</h4> 
              Graduated May 2018 <br/>
              <a href="https://bootcamp.northwestern.edu/" target ="#"> Norhtwestern Univesity , Evanston IL</a> <br/>
              Chicago, USA <br/><br/>
              <br/>
            </p>

             <p>
              <h4>Social Media and Marketing Program </h4> 
              Spring , June 2012 <br/>
              <a href="http://learn.tribecaflashpoint.edu/" target ="#"> Tribeca FlashPoint Academy</a><br/>
              Chicago, USA <br/><br/>
              <br/>
             </p>

            <p>
              <h4>Master of Science in Computer Science </h4> 
              Graduated , June 2002 <br/>
              <a href="http://www.ateneo.edu/" target ="#"> AMA University , Manila Philippines</a><br/>
              Chicago, USA <br/><br/>
              <br/>
             </p>

              <p>
              <h4>Quality Entry Professional </h4> 
              Graduated , June 2000<br/>
              <a href="http://www.tup.edu.ph/" target ="#"> Atene De Manila Univesity ,Philippines</a><br/>
              Chicago, USA <br/><br/>
              <br/>
             </p>

              <p>
              <h4>Bachelor of Science in Computer Science </h4> 
              Graduated , June 1998<br/>
              <a href="http://www.tup.edu.ph/" target ="#"> Technological University of the Philippines, Manila Philippines</a><br/>
              Chicago, USA <br/><br/>
              <br/>
             </p>
                      

          <h2> Employment History</h2>

          <p>
          <h4>Senior Software Engineer</h4> 
          2004-2014 <br/>
          <a href="http://www.ipinoychicago.com/" target ="#">  iPINOYCHICAGO</a> <br/>
          Chicago, USA <br/><br/>

          <strong> Duties and Responsibilites </strong> <br/>   
          <li><strong> Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle.
          Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.</strong>  </li><br/>
          <li><strong> Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. </strong>  </li><br/>
          <li><strong> Prepares and installs solutions by determining and designing system specifications, standards, and programming.
          </strong>  </li><br/>
          <li><strong> Improves operations by conducting systems analysis; recommending changes in policies and procedures. </strong>  </li><br/>
          <li><strong> Updates job knowledge by studying state-of-the-art development tools, programming techniques, and computing equipment; participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations. </strong>  </li><br/>
          <li><strong> Protects operations by keeping information confidential. </strong>  </li><br/>
          <li><strong> Provides information by collecting, analyzing, and summarizing development and service issues. </strong>  </li><br/>
          <li><strong> Accomplishes engineering and organization mission by completing related results as needed. </strong>  </li><br/>
          <li><strong> Supports and develops software engineers by providing advice, coaching and educational opportunities.
 </strong>  </li><br/>
            <h4>University Professor</h4> 
          1998-2002 <br/>  
          <a href="http://www.ama.edu.ph/" target ="#">  
            
          AMA Computer University  
           
          </a> <br/>  
          Manila Philippines <br/><br/>

          <strong> Duties and Responsibilites </strong> <br/>
          <li><strong> Teach courses in Programming and Math Area </strong>  </li><br/>
          <li><strong> Work with students who are studying for a degree or a certificate or certification or are taking classes to improve their knowledge or career skills </strong>  </li><br/>
          <li><strong> Develop an instructional plan (known as a course outline or syllabus) for the course(s) they teach and ensure that it meets college and department standards </strong>  </li><br/>
          <li><strong> Plan lessons and assignments  </strong>  </li><br/>
          <li><strong>  Work with colleagues to develop or modify the curriculum for a degree or certificate program involving a series of courses  </strong>  </li><br/>
          <li><strong> Assess students’ progress by grading papers, tests, and other work </strong>  </li><br/>
          <li><strong> Advise students about which classes to take and how to achieve their goals </strong>  </li><br/>
          <li><strong> Stay informed about changes and innovations in their field  </strong>  </li><br/>
          <li><strong>  Conduct research and experiments to advance knowledge in their field </strong>  </li><br/>
          <li><strong>  Supervise students who are working toward bachelors degrees </strong>  </li><br/>
          <li><strong> Contribute research and analysis in books and academic journals  </strong>  </li><br/>
          <li><strong>  Serve on academic and administrative committees that review and recommend policies, make budget decisions, or advise on hiring and promotions within their department  </strong>  </li><br/>

          <br/>
            
          </p>
          <h2> Skillset</h2>

            <p>
            <h4>Highlights : MongoDB , Express, React and Node  ( M. E. R N.)</h4> 
            <h4>Front End</h4>
            <li><strong> HTML , Git  </strong>  </li><br/>
            <li><strong>BootStrap, Material UI) </strong>  </li><br/>
            <li><strong> Javascript / Advance Javascript ECMAScript 6 (ES6) </strong>  </li><br/>
            <li><strong>  CSS Preprocessing </strong>  </li><br/>
            <li><strong>  CSS and JavaScript Frameworks </strong>  </li><br/>
            <li><strong>  JQuery </strong>  </li><br/>
            <li><strong>  Version Control/Git </strong>  </li><br/>
            <li><strong>  Responsive Design </strong>  </li><br/>
            <li><strong>  Testing/Debugging </strong>  </li><br/>
            <li><strong>  Building and Automation Tools/Web Performance </strong>  </li><br/>
            <li><strong>  Command Line</strong>  </li><br/>
            
            <br/>
            <h4>Back End</h4>
            <li><strong>  MongoDB</strong>  </li><br/>
            <li><strong>  NodeJs</strong>  </li><br/>
            <li><strong>  My SQL</strong>  </li><br/>
            <li><strong>  Phyton</strong>  </li><br/>

            <h4>Extra</h4>
            <li><strong>  API, ORMs, Sequelize, Handlebars</strong>  </li><br/>
            <li><strong>  Pascal, Cobol , Assembly Language , C , C++,  Foxpro, Visual Basic</strong>  </li><br/>
            
            
            </p>

           <h2> Personal</h2>

            <p>
              Age :   <strong> 41  </strong>  <br/>
              Birthday : <strong> April 22, 1977  </strong>   <br/>
              Address : <strong> 4829 Apt # 14 N. Elston Chicago IL 60630 </strong>   <br/>
              Age :   <strong> 41  </strong>  <br/>
              <br/>
              
            </p>
          
        </Col>
        
      </Row>

      <Row>
        <Col size="md-4">
           
        </Col>

         <Col size="md-8">
          
         {/* <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                // onClick={this.handleFormSubmit}
              > */}
               
                {/* Pay Now
        </FormBtn> */}
        </Col>
      
       </Row>

      
    </Container>
     
  </div>
);

export default Orders;
