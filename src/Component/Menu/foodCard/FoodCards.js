import React, { useState } from "react";
import "./FoodCards.css";
import CutWord from "./cutWord/CutWord";

const FoodCards = ({ groupedMenu, activeCategory }) => {
  // console.log(Object.entries(groupedMenu).length);
  // console.log("Active Category " + activeCategory);
  // const [isOpen, setIsOpen] = useState(false);
  // const [toggleOpen.settoggleOpen]=useState('')
  // const [openItem, setOpenItem] = useState(null);
  // console.log(openItem);
  const handleclick = (item) => {
    alert("You click " + item.title);
  };
  return (
    <>
      {/* <h1>{activeCategory}</h1> */}
      {/* <div className="food_cards"> */}

      <div className="menu_foodcards">
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
                    // onClick={() => setOpenItem(item)}
                    onClick={() => handleclick(item)}
                  >
                    <div className="food_card_text">
                      <h2 className="food_card_title">{item.title}</h2>
                      <p className="food_card_description">
                        {/* {item.description} */}
                        <CutWord text={item.description} maxLength={85} />
                      </p>
                      <p className="food_card_contain)">
                        <span className="contains">Contains: </span>
                        {item.contains}
                      </p>
                      {item.vegan ? (
                        <div className="Vegan">Vegan</div>
                      ) : (
                        <div className="something"></div>
                      )}
                      {/* <a href="https://asiavilla.app4food.co.uk/Home/Outlets">
                        <button>Order</button>
                      </a> */}
                      {/* Add any other information you want to display */}
                    </div>
                    <div className="food_card_image">
                      {/* <img src={item.image} alt={item.title} /> */}
                      {item.image ? (
                        <img src={item.image} alt={item.title} />
                      ) : (
                        <img src="/Photos/noimage.jpg" alt={item.title} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FoodCards;
