import React from "react";


function SoccerCards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} 
        onClick={() =>props.chosenImage(props.id)}></img>
      </div>
      
     
    </div>
  );
}

export default SoccerCards;