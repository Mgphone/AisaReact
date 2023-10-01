import React from "react";
import "./Categories.css";
function Categories({ categories, filterItems, activeCategory }) {
  return (
    <div className="categories">
      <div className="button-container">
        {categories.map((item, index) => (
          <button
            type="button"
            className={`filter_btn ${activeCategory === item ? "active" : ""}`}
            key={index}
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
