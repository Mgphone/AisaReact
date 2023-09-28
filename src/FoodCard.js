import React from "react";

const FoodCard = ({ groupedMenu, acitveCategory }) => {
  return (
    <>
      <h1>{acitveCategory}</h1>
      {/* <div className="food_cards"> */}
      <div>
        {Object.entries(groupedMenu).map(([category, items]) => (
          <div>
            <h2 className="category">{category}</h2>
            <div className="food_cards">
              {items.map((item) => (
                <div className="food_card" key={item.id}>
                  <div className="food_card_image">
                    <img src={item.image} alt={item.image} />
                  </div>
                  <div className="food_card_text">
                    <h3>
                      {item.id}.{item.title}
                    </h3>
                    <h5>{item.description}</h5>
                    <p>£{item.price}</p>
                    <p>{item.category}</p>
                    <p>{item.contains}</p>
                    {item.vegan ? <p>Vegan🌱</p> : null}
                    {item.available ? <p>Available</p> : <p>Not Available</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodCard;
