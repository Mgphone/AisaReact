import React from "react";

function Categories({ categories, filterItems, acitveCategory }) {
  return (
    <>
      {categories.map((item, index) => (
        <button
          type="button"
          className={`${
            acitveCategory === item ? "filter_btn.active" : "filter_btn"
          }`}
          key={index}
          onClick={() => filterItems(item)}
        >
          {item}
        </button>
      ))}
    </>
  );
}

export default Categories;
