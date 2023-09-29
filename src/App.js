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
  const [activeCategory, setActiveCategory] = useState("All DAY MENU");
  const [groupedMenu, setGroupedMenu] = useState({});
  const [isVegan, setIsVegan] = useState(false);

  // Effect to filter menu items based on isVegan and activeCategory
  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (activeCategory === "All DAY MENU") {
        return isVegan ? item.vegan === true : true;
      } else {
        return (
          activeCategory === item.category &&
          (isVegan ? item.vegan === true : true)
        );
      }
    });
    setMenuItem(filteredData);
  }, [isVegan, activeCategory]);

  useEffect(() => {
    // Group menu items by category
    const grouped = {};
    menuItems.forEach((item) => {
      grouped[item.category] = grouped[item.category] || [];
      grouped[item.category].push(item);
    });
    setGroupedMenu(grouped);
  }, [menuItems]);

  const filterItems = (category) => {
    setActiveCategory(category);
  };

  const handleVegan = () => {
    setIsVegan(!isVegan);
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
