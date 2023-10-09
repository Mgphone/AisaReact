import React, { useEffect, useState } from "react";
import data from "../Services/data";
import AutoHiddendiv from "../Component/Menu/autohiddendiv/AutoHiddendiv";
import Welcome from "../Component/Menu/welcome/Welcome";
import Footer from "../Component/footer/Footer";
import Nav from "../Component/NavBar/Nav";
import FoodCards from "../Component/Menu/foodCard/FoodCards";

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
      <Welcome imageUrl="/Images/welcomeasia.png" className="centered-image" />
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
