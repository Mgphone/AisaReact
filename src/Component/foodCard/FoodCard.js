import React from "react";
import "./FoodCard.css";

const FoodCard = ({ groupedMenu, activeCategory }) => {
  // console.log(Object.entries(groupedMenu).length);
  // console.log("Active Category " + activeCategory);
  return (
    <>
      {/* <h1>{activeCategory}</h1> */}
      {/* <div className="food_cards"> */}

      <div>
        {Object.entries(groupedMenu).length === 0 ? (
          <div className="food_card">
            <h5>🙏</h5>
            <h5>Sorry There are no Match</h5>
            <h1>Please Try again</h1>
          </div>
        ) : (
          Object.entries(groupedMenu).map(([category, items]) => (
            <div key={category}>
              <h2>{category}</h2>
              {/* <div key={category}> */}
              <div className="food_cards">
                {items.map((item) => (
                  <div className="food_card" key={item.id}>
                    <div className="food_card_image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="food_card_text">
                      {item.vegan ? (
                        <div className="Vegan">Vg</div>
                      ) : (
                        <div className="something"></div>
                      )}
                      <h3>
                        {item.id}.{item.title}
                      </h3>
                      <h5>{item.description}</h5>
                      <p>{item.contains}</p>
                      <a href="https://asiavilla.app4food.co.uk/Home/Outlets">
                        <button>Order</button>
                      </a>
                      {/* Add any other information you want to display */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FoodCard;
