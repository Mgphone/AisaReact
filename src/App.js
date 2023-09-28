import React, { useEffect, useState } from "react";
import data from "./data";
import FoodCard from "./FoodCard";
import "./App.css";
import Categories from "./Categories";
const allCategories = [
  "All DAY MENU",
  "Vegan🌱",
  ...new Set(data.map((item) => item.category)),
];

// const Vegan = data.filter((item) => item.vegan === true);
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItem] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [acitveCategory, setActiveCategory] = useState("");
  const [groupedMenu, setGroupedMenu] = useState({});
  useEffect(() => {
    const grouped = {};
    // eslint-disable-next-line array-callback-return
    menuItems.map((item) => {
      grouped[item.category] = grouped[item.category] || [];
      grouped[item.category].push(item);
    });
    setGroupedMenu(grouped);
  }, [menuItems]);
  // console.log(groupedMenu);
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All DAY MENU") {
      setMenuItem(data);
      return;
    }
    if (category === "Vegan🌱") {
      const newItems = data.filter((item) => item.vegan === true);
      setMenuItem(newItems);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <div className="App">
      <div class="menu">
        <h1>Food Menu</h1>

        <Categories
          categories={categories}
          acitveCategory={acitveCategory}
          filterItems={filterItems}
        />
        <FoodCard groupedMenu={groupedMenu} acitveCategory={acitveCategory} />
      </div>
    </div>
  );
}

export default App;
