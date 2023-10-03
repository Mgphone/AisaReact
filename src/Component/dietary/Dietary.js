import React from "react";
import "./Dietary.css";
import BootStrapSwitchButton from "bootstrap-switch-button-react";

function Dietary({ handleVegan, isVegan }) {
  return (
    <div className="Dietary">
      <div className="switch">
        <BootStrapSwitchButton
          checked={isVegan}
          onChange={handleVegan}
          onlabel="On"
          onstyle="primary"
          size="sm"
        />
        <label>Vegan</label>
        <BootStrapSwitchButton />
        <label>Vegetarian</label>
      </div>
    </div>
  );
}

export default Dietary;
