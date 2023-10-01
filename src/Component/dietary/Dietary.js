import React from "react";
import "./Dietary.css";
function Dietary({ handleVegan, isVegan }) {
  return (
    <div className="Dietary">
      <label htmlFor="veganCheckbox" className="switch">
        <input
          type="checkbox"
          className="toggle_vegan"
          // onChange={(e) => {
          //   handleVegan(e.target.checked);
          // }}
          id="toggle_btn"
          onChange={handleVegan}
        />
        <span className="slider round"></span>
      </label>
      <p>Vegan{isVegan ? <span>On</span> : <span>Off</span>}</p>

      {/* <input type="checkbox" className="toggle_vegetarial" />
      <label htmlFor="vegetarain">Vegetarain</label> */}
    </div>
  );
}

export default Dietary;
