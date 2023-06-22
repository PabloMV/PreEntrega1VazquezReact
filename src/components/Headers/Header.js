import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import imagen from "./logotintok.jpg"


const Header = () => {
    return (
      <div className="Header">
      <h1>TINTOK</h1> 
      <h2>Vinos y Delicatessen</h2>
      <img src= {imagen} width={150} />;
      </div>
    
    );
  };
  
  export default Header;