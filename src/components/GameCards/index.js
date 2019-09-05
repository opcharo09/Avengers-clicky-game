import React from "react";
import { BrowserRouter as  Router } from "react-router-dom";
import {Link} from "react-router-dom";
import { Card, Button, Col, Row } from 'reactstrap'

  const GameCards= (props) => {
      return (

        <Router>
<div>
<Row>
      <Col lg="3">
      
      <Card>
        
          <img width="100%"  src={require("../../Images/avengers-infinity-war.jpg")} alt="" />   
    
          <Button><Link to="/avengers">Play Avengers</Link></Button>
        
      </Card>
     </Col>

     <Col lg="3">
      
      <Card>
        
          <img width="100%"  src={require("../../Images/fauzan-saari-crn276hbbYU-unsplash.jpg")} alt="" />   
    
          <Button><Link to="/soccers">Play Soccer</Link></Button>
        
      </Card>
     </Col>

     <Col lg="3">
      
      <Card>
        
          <img width="100%"  src={require("../../Images/wp2066450-the-loud-house-wallpapers.jpg")} alt="" />   
    
          <Button><Link to="/avengers">Play LoudHouse</Link></Button>
        
      </Card>
     </Col>

     <Col lg="3">
      
      <Card>
        
          <img width="100%"  src={require("../../Images/avengers-infinity-war.jpg")} alt="" />   
    
          <Button><Link to="/avengers">Play </Link></Button>
        
      </Card>
     </Col>

    
       </Row>
       </div>
       </Router>
      );
      }
     

    export default GameCards;