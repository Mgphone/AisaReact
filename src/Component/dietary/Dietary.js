import React from "react";
import "./Dietary.css";
import Switch from "./Switch";
import BootStrapSwitchButton from "bootstrap-switch-button-react";

function Dietary({ handleVegan, isVegan }) {
  return (
    <div className="Dietary">
      {/* <Form>
        <Form.Check
          type="switch"
          checked={isVegan}
          onChange={handleVegan}
          label="Vegan"
        />
      </Form> */}
      <div className="switch">
        <BootStrapSwitchButton
          checked={isVegan}
          onChange={handleVegan}
          onlabel="On"
          size="m"
        />
        <label>Vegan</label>
        <BootStrapSwitchButton />
        <label>Vegetarian</label>
      </div>

      {/* <Switch isVegan={isVegan} handleVegan={handleVegan} /> */}

      {/* <label htmlFor="veganCheckbox" className="switch">
        <input
          type="checkbox"
          className="toggle_vegan"
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
