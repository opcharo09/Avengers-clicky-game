import React from "react";


function Navbar(props) {
    return (
      <div className="navbar">
        <div className="start">
          <strong>Click image to start!</strong> If you can selected all images without repeating, then you win!
          
           
        
        </div>
        <div className="score">{props.children}</div>
      </div>
    );
  }

export default Navbar;