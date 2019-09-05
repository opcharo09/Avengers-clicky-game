import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Avengers from "./Pages/Avengers";
import LoudHouse from "./Pages/LoudHouse";
import Soccers from "./Pages/Soccers";
import Home from "./Pages/Home"






  // Map  component for each object
  class App extends Component{
  render() {
    return (
      
       <Router>
        <div>
      
        
      
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/avengers" component={Avengers}/>
         <Route exact path="/loudhouse" component={LoudHouse}/>
          <Route   exact path="/soccers" component={Soccers} />
       </Switch>
       </div>
       
      </Router>
    
     
    );
  }
}


export default App;
