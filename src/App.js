import React, { Component } from "react";
import Avengercards from "./components/Avengercards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import avengers from "./avengers.json";

const maxScore = avengers.length

class App extends Component {
  // array
  state = {
    avengers,
    Score: 0,
    Highscore: 0,
    chosenImages: [],
  };

  // clicking images
   chosenImage = id => {
    
    if (this.state.chosenImages.includes(id)) {
      
      this.resetGame()
    }
 
    else {
   
  const Score = this.state.Score + 1

    // highScore 
    if (Score > this.state.Highscore) {
      this.setState({HighScore:Score})
    }
    if (Score === maxScore) {
      
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




  // Map  component for each object
  render() {
    return (
      
      <Wrapper>
        
        <Title>Avengers Clicky game</Title>
         <Navbar> 
           Score = {this.state.Score} <br />
           HighScore = {this.state.HighScore}
         </Navbar>
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
     
    );
  }
}

export default App;
