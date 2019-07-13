import React from "react";
import "./style.css";

function Navbar(props) {
    return (
      <div className="navbar">
        <div className="start">{props.children}</div>
        <div className="scores">
          <strong>Click image to start!</strong> If you can selected all images without repeating, then you win!
          
           
        
        </div>
      </div>
    );
  }

export default Navbar;