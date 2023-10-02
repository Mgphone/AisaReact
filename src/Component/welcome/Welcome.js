import React from "react";
import WelcomeAsia from "./Image/welcomeasia.png";
import "./welcome.css"; // Make sure you have a CSS file for styling

function Welcome() {
  return (
    <div className="welcome-container">
      <img
        src={WelcomeAsia}
        alt="Welcome Asia"
        className="centered-image"
        width="100%"
        height="100%"
      />
      <div className="overlay-text">
        <h1>Our Menu</h1>
      </div>
    </div>
  );
}

export default Welcome;
