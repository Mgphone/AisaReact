import React, { useState } from "react";
import Dietary from "../dietary/Dietary";
import "./Autohiddendiv.css";
import CategoryBar from "../categoryBar/CategoryBar";
function AutoHiddendiv({ handleVegan, isVegan, groupedMenu }) {
  const [isHidden, setIsHidden] = useState(true);
  const toggleVisible = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div className="stickyMenu">
      <div className="autohiddendiv">
        <button onClick={toggleVisible}>
          {isHidden ? "Dietary⬇️" : "Dietary⬆️"}
        </button>
        {!isHidden && <Dietary handleVegan={handleVegan} isVegan={isVegan} />}
        <CategoryBar groupedMenu={groupedMenu} />
      </div>
    </div>
  );
}

export default AutoHiddendiv;
