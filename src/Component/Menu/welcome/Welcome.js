import React from "react";
// import WelcomeAsia from "./Image/welcomeasia.png";
// import WelcomeAsia from "./Image/PHOTO-2021-10-26-11-35-13 (1).jpg";
import "./welcome.css";

function Welcome(props) {
  return (
    <>
      <div className={props.containerClassName}>
        <img
          src={props.imageUrl}
          alt={props.alt}
          className={props.className}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default Welcome;
