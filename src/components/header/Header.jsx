import React from "react";
import LoGo from "../../assets/react.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Tienda Glizzy</h1>
    </header>
    
  );
};

export default Header;
