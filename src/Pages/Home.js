import React, { Component } from "react";
import Title from "../components/Title";
import GameCards from "../components/GameCards"





  // Map  component for each object
  class Home extends Component{
  render() {
    return (
      
       
        <div>
        <Title>Memory Game</Title>
        <GameCards></GameCards>
      
      </div> 
     
    );
  }
}


export default Home;