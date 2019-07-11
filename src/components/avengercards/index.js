import React from "react";
import "./style.css";

function Avengercards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span className="select" onClick={() => this.props.Handleclick(props.id)}></span>
     
    </div>
  );
}

export default Avengercards;