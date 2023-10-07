import React from "react";
// import WelcomeAsia from "./Image/welcomeasia.png";
// import WelcomeAsia from "./Image/PHOTO-2021-10-26-11-35-13 (1).jpg";
import "./welcome.css"; // Make sure you have a CSS file for styling

function Welcome(props) {
  return (
    <div className="welcome-container">
      <img
        src={props.imageUrl}
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
