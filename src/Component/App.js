import React, { useEffect, useState } from "react";
import data from "../Services/data";
import FoodCard from "./foodCard/FoodCards";
import "./App.css";
import AutoHiddendiv from "./autohiddendiv/AutoHiddendiv";
import Welcome from "./welcome/Welcome";
import Footer from "./footer/Footer";
import CategoryBar from "./categoryBar/CategoryBar";
import Nav from "./NavBar/Nav";
import FoodCards from "./foodCard/FoodCards";

function App() {
  const [menuItems, setMenuItem] = useState(data);
  const [activeCategory, setActiveCategory] = useState(menuItems);
  const [groupedMenu, setGroupedMenu] = useState({});
  const [isVegan, setIsVegan] = useState(false);
  // Effect to filter menu items based on isVegan and activeCategory
  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (activeCategory) {
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

  // const filterItems = (category) => {
  //   setActiveCategory(category);
  // };

  const handleVegan = () => {
    setIsVegan(!isVegan);
  };

  return (
    <div className="App">
      <Nav />
      <Welcome />
      <AutoHiddendiv
        handleVegan={handleVegan}
        isVegan={isVegan}
        groupedMenu={groupedMenu}
      />
      <FoodCards groupedMenu={groupedMenu} activeCategory={activeCategory} />
      <Footer />
    </div>
  );
}

export default App;
