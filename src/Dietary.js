import React, { useState } from "react";

function Dietary({ handleVegan }) {
  return (
    <div className="dietary">
      <label htmlFor="veganCheckbox">Vegan</label>
      <input
        type="checkbox"
        // onChange={(e) => {
        //   handleVegan(e.target.checked);
        // }}
        id="checkbox"
        onChange={handleVegan}
      />
    </div>
  );
}

export default Dietary;
