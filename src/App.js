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
    gameStart:"choose an avenger!"
  };

  // clicking images
   chosenImage = id => {
    
    if (this.state.chosenImages.includes(id)) {
      this.setState({gameMsg:""})
      this.resetGame()
    }

  else {
    const score = this.state.currentScore + 1

    // highScore 
    if (score > this.state.Highscore) {
      this.setState({HighScore:score})
    }

    
    if (score === maxScore) {
      this.setState({gameMsg: ""})
      this.resetGame()
    }
    //  image id and shuffle
    else {
      this.setState({gameMsg: ""})
      this.setState({selected:this.state.selectedImages.push(id)})
      this.setState({Score:score})
      this.shuffleImages()
    }
  }
}


  // Map  component for each object
  render() {
    return (
      
      <Wrapper>
        
        <Title>Avengers Clicky game</Title>
         <Navbar> </Navbar>
        {this.state.avengers.map(avenger => (
          <Avengercards
            handleClick={this.handleClick}
            id={avenger.id}
            key={avenger.id}
            image={avenger.image}
          />
        ))}
       
      </Wrapper>
     
    );
  }
}

export default App;
