import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'
import Avengers from "./Pages/Avengers";
import LoudHouse from "./Pages/LoudHouse";
import Soccer1 from "./Pages/Soccer1";
import Title from "./components/Title"





  // Map  component for each object
  class App extends Component{
  render() {
    return (
      
       <Router>
        <div>
        <Title>Memory Game</Title>
      
      
        <div>
      <Card>
        <CardImg top width="100%"  src={require("./Images/avengers-infinity-war.jpg")} alt=""></CardImg>
        <CardBody>
          <CardTitle>Avengers</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>

      
    <div>
      <Card>
        <CardImg top width="100%"  src={require("./Images/fauzan-saari-crn276hbbYU-unsplash")} alt=""></CardImg>
        <CardBody>
          <CardTitle>Avengers</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    
       
       
        
      
       <Switch>
         {/* <Route exact path="/" component={Home}/> */}
         <Route exact path="/avengers" component={Avengers}/>
         <Route exact path="/loudhouse" component={LoudHouse}/>
          <Route   exact path="/soccer1" component={Soccer1} />
       </Switch>
       </div>
       
      </Router>
    
     
    );
  }
}


export default App;
