import React, { useState } from "react";
// import "./FoodCards.css";
import CutWord from "./cutWord/CutWord";
import Popup from "./Popup";

const FoodCards = ({ groupedMenu, activeCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState("");

  const openPopup = (item) => {
    setPopupData(item);
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="menu_foodcards" id="menu_foodcards">
        {Object.entries(groupedMenu).length === 0 ? (
          <div className="food_card">
            <h5>🙏</h5>
            <h5>Sorry There are no Match</h5>
            <h1>Please Try again</h1>
          </div>
        ) : (
          Object.entries(groupedMenu).map(([category, items]) => (
            <div id={category} key={category}>
              <h2>{category}</h2>
              {/* <div key={category}> */}
              <div className="food_cards">
                {items.map((item) => (
                  <button
                    className="food_card"
                    key={item.id}
                    // onClick={() => handleclick(item)}
                    onClick={() => openPopup(item)}
                  >
                    <div className="food_card_text">
                      <h2 className="food_card_title">{item.title}</h2>
                      <p className="food_card_description">
                        {/* {item.description} */}
                        <CutWord text={item.description} maxLength={85} />
                      </p>
                      {item.contains ? (
                        <p className="food_card_contain)">
                          <span className="contains">Contains: </span>
                          {item.contains}
                        </p>
                      ) : (
                        ""
                      )}
                      {item.vegan ? (
                        <div className="Vegan">Vegan</div>
                      ) : (
                        <div className="something"></div>
                      )}
                    </div>
                    <div className="food_card_image">
                      {/* <img src={item.image} alt={item.title} /> */}
                      {item.image ? (
                        <img
                          // src={item.image}
                          // src={require("../../../assets"+{item.image})`}
                          src={require(`../../../assets${item.image}`)}
                          alt={item.title}
                        />
                      ) : (
                        <img
                          // src={require(`../../../assets"/Photos/noimage.jpg"`)}
                          src={require("../../../assets/Images/noimage.jpg")}
                          alt={item.title}
                        />
                      )}
                    </div>
                  </button>
                ))}
                <Popup
                  isOpen={isOpen}
                  item={popupData}
                  closePopup={closePopup}
                  clickOutside={true}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FoodCards;
