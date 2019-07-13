import React from "react";
import "./style.css";

function Avengercards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} 
        onClick={() =>props.chosenImage(props.id)}></img>
      </div>
      
     
    </div>
  );
}

export default Avengercards;