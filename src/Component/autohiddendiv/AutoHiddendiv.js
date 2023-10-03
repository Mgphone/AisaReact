import React, { useState } from "react";
import Dietary from "../dietary/Dietary";
import "./Autohiddendiv.css";
function AutoHiddendiv({ handleVegan, isVegan }) {
  const [isHidden, setIsHidden] = useState(true);
  const toggleVisible = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div className="autohiddendiv">
      <button onClick={toggleVisible}>
        {isHidden ? "Dietary⬇️" : "Dietary⬆️"}
      </button>
      {!isHidden && <Dietary handleVegan={handleVegan} isVegan={isVegan} />}
    </div>
  );
}

export default AutoHiddendiv;
