import React, { Component } from "react";
//import FriendCard from "./components/FriendCard";
//import Wrapper from "./components/Wrapper";
//import Title from "./components/Title";
import avengers from "./avengers.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    avengers
  };

  removeAvenger = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const avengers = this.state.avengers.filter(avenger => avenger.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ avengers });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Avengers</Title>
        {this.state.friends.map(avenger => (
          <AvengerCard
          
            id={avenger.id}
            key={avenger.id}
            name={avenger.name}
            image={avenger.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
