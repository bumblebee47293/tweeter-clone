import React from "react";
import logo from '../../assets/images/twitter-logo.jpg'
import "./style.css";

const AppHeader = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img className="logo" alt="twitter" src = {logo} />
        <h1 className="logoText">Tweeter</h1>
      </div>
      <div className="linksContainer"></div>
      <div className="profileContainer"></div>
    </div>
  );
};

export default AppHeader;
