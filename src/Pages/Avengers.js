import React, { Component } from "react";
import Avengercards from "../components/Avengercards";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import avengers from "../Cards/avenger"

const maxScore = avengers.length

class Avenger extends Component {
  // array
  state = {
    avengers,
    Score: 0,
    Highscore: 0,
    chosenImages: [],
    gameAlerts: ""
  };

  // clicking images
   chosenImage = id => {
    
    if (this.state.chosenImages.includes(id)) {
      this.setState({gameAlerts:"Sorry you loose..!"})
      this.resetGame()
    }
 
    else {
   
  const Score = this.state.Score + 1

    // highScore 
    if (Score > this.state.Highscore) {
      this.setState({HighScore:Score})
    }
    if (Score === maxScore) {
      this.setState({gameMsg: "Great you found them all!"})
      this.resetGame()
    }
    //  image id and shuffle
    else {
     
      this.setState({selected:this.state.chosenImages.push(id)})
      this.setState({Score:Score})
      this.shuffleImages()
    };
  }
}

// Re start game
resetGame = () => {
  this.setState({Score:0})
  this.setState({chosenImages:[]})
  this.shuffleImages()
}
//  shuffle
shuffleImages = () => {
  const shuffledImages = this.shuffleArray(avengers)
  this.setState({avengers:shuffledImages})
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array (use this code as reference for shuffleling an)
shuffleArray = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

render() {
    return (
      
      
        <div>
        <Title>Memory Game</Title>
         <Navbar> 
         <div className="menu">
           <ul>
            <li>{this.state.gameAlerts}</li>
          
            
            <li>Score = {this.state.Score}</li>
          
            
           <li> HighScore = {this.state.HighScore}</li>
           
           </ul>
           </div>
         </Navbar>
         <Wrapper>
        {this.state.avengers.map(avenger => (
          <Avengercards
           // handleClick={this.handleClick}
            id={avenger.id}
            key={avenger.id}
            image={avenger.image}
            chosenImage={this.chosenImage}
          /> 
          
        ))}
         </Wrapper>
         </div>
       
    
     
    );
  }
}

export default Avenger;
