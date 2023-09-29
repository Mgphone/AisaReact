import React, { useEffect, useState } from "react";
import data from "./data";
import FoodCard from "./FoodCard";
import "./App.css";
import Categories from "./Categories";
import Dietary from "./Dietary";

const allCategories = [
  "All DAY MENU",
  ...new Set(data.map((item) => item.category)),
];

function App() {
  const [menuItems, setMenuItem] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("");
  const [groupedMenu, setGroupedMenu] = useState({});
  const [isVegan, setIsVegan] = useState(false);

  useEffect(() => {
    const grouped = {};
    menuItems.forEach((item) => {
      grouped[item.category] = grouped[item.category] || [];
      grouped[item.category].push(item);
    });
    setGroupedMenu(grouped);
  }, [menuItems]);

  useEffect(() => {
    // Filter menu items based on the vegan filter when isVegan changes
    const filteredData = isVegan
      ? menuItems.filter((item) => item.vegan === true)
      : menuItems;
    setMenuItem(filteredData);
  }, [isVegan]);

  const filterItems = (category) => {
    setActiveCategory(category);

    if (category === "All DAY MENU") {
      // If "All DAY MENU" is selected, show items based on the vegan filter
      const filteredData = isVegan
        ? data.filter((item) => item.vegan === true)
        : data;
      setMenuItem(filteredData);
    } else {
      const newItems = data.filter((item) => item.category === category);
      const filteredData = isVegan
        ? newItems.filter((item) => item.vegan === true)
        : newItems;
      setMenuItem(filteredData);
    }
  };
  console.log(isVegan);
  const handleVegan = (value) => {
    setIsVegan(value);
  };

  return (
    <div className="App">
      <div className="menu">
        <h1>Food Menu</h1>
        <Dietary handleVegan={handleVegan} />
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <FoodCard groupedMenu={groupedMenu} activeCategory={activeCategory} />
      </div>
    </div>
  );
}

export default App;
