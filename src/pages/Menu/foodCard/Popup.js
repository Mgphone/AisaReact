import React, { useEffect } from "react";
import "./Popup.css";
function Popup({ isOpen, item, closePopup, clickOutside }) {
  useEffect(() => {
    const keyPress = (e) => {
      if (e.key === "Escape" && isOpen) {
        closePopup();
      }
    };
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, [isOpen, closePopup]);
  const handleBackground = () => {
    if (clickOutside) {
      closePopup();
    }
  };
  return (
    <div>
      {isOpen && (
        <div className="popup pop-active" onClick={handleBackground}>
          <div className="popup-content">
            <h1>{item.title}</h1>
            {/* <img src={item.image} alt={item.image} /> */}
            {item.image ? (
              <img
                // src={item.image}
                src={require(`../../../assets${item.image}`)}
                alt={item.title}
              />
            ) : (
              <img
                className="noimage"
                src={require("../../../assets/Images/noimage.jpg")}
                alt={item.title}
              />
            )}
            {item.vegan ? <p className="popup_vegan">Vegan</p> : ""}
            <p class="description">{item.description}</p>
            {item.contains ? (
              <p className="popup_contains">
                <h5>Options:</h5>
                {item.contains}
              </p>
            ) : (
              ""
            )}
            <button className="close-button" onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
