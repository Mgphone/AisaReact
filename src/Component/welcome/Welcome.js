import React from "react";

// import "./welcome.css";

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
