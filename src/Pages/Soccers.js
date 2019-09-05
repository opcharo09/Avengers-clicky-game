import React, { Component } from "react";
import SoccerCards from "../components/SoccerCards";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import soccers from "../Cards/soccer"

const maxScore = soccers.length

class soccer extends Component {
  // array
  state = {
    soccers,
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
  const shuffledImages = this.shuffleArray(soccers)
  this.setState({soccer1s:shuffledImages})
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
        {this.state.soccers.map(soccer => (
          <SoccerCards
           // handleClick={this.handleClick}
            id={soccer.id}
            key={soccer.id}
            image={soccer.image}
            chosenImage={this.chosenImage}
          /> 
         
        ))}
          </Wrapper>
         </div>
       
    
     
    );
  }
}

export default soccer;