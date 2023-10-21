import React, { useEffect, useState } from "react";
import data from "../../data/data";
import AutoHiddendiv from "./autohiddendiv/AutoHiddendiv";
import Welcome from "../../Component/welcome/Welcome";
import Footer from "../../Component/footer/Footer";
// import Nav from "../../Component/navBar/Nav";
import Nav from "../../Component/navBar/Nav";
import FoodCards from "./foodCard/FoodCards";
import "./Menu.css";
// import item from "../assets/Images/welcomeasia.png";

function Menu() {
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
    <div className="menu">
      <Nav />
      <Welcome
        imageUrl={require("../../assets/Images/welcomeasia.png")}
        className="centered-image"
        containerClassName="welcome-menu-container"
        alt="welcome-menu-alt"
      />
      <div className="menu-overlay-text">
        <a href="#menu_foodcards">
          <h1>Our Menu</h1>
        </a>
      </div>
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

export default Menu;
