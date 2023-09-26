import React from "react";
import data from "./data";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div class="menu">
        <h1>Food Menu</h1>
        <div className="food_cards">
          {data.map((item) => (
            <div className="food_card">
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
                {item.available ? <p>Available</p> : <p>Not Available</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
