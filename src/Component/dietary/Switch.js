import React from "react";
import "./Switch.css";
function Switch({ isVegan, handleVegan }) {
  return (
    <>
      <input
        value={isVegan}
        onChange={handleVegan}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isVegan && "#06D6A0" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
}

export default Switch;
