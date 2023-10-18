import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineRestaurantMenu, MdOutlineWorkHistory } from "react-icons/md";
function HomeCards() {
  const scrollToStory = () => {
    const search = document.getElementById("our-story");
    if (search) {
      search.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home-cards">
      <div className="home-search">
        <FaLocationDot className="icon" />
        <h1>find your local AsiaVilla</h1>
        <hr />
        <p>
          Discover an array of dining options in your desired areas, explore
          menus, and embark on culinary adventures with ease. Find, savor, and
          enjoy dining experiences with us.
        </p>
        <NavLink to="/location">
          <button>Search</button>
        </NavLink>
      </div>
      <div className="home-menu">
        <MdOutlineRestaurantMenu className="icon" />
        <h1>Discover Our Culinary Offerings</h1>
        <hr />
        <p>
          Our website showcases an enticing restaurant menu, offering a
          delectable array of culinary delights. Explore our dishes, flavors,
          and satisfy your cravings experience.
        </p>
        <NavLink to="/menu">
          <button>Search</button>
        </NavLink>
      </div>
      <div className="home-story">
        <MdOutlineWorkHistory className="icon" />
        <h1>Unveiling Our Journey</h1>
        <hr />
        <p>
          Delve into our compelling narrative. Our story unravels the journey,
          passion, and dedication behind our brand. Discover the essence of our
          mission and the heart that drives us.
        </p>

        <button onClick={scrollToStory}>Search</button>
      </div>
    </div>
  );
}

export default HomeCards;
