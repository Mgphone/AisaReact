import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Nav.css";
function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" activeClassName="active">
          <img src="/Photos/Asia Villa-1.png" alt="Logo" />
        </NavLink>
      </div>
      <div className="tabs">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/menu" activeClassName="active">
          Menu
        </NavLink>
        {/* <Link to="/location">Location</Link> */}
        <NavLink to="/order" activeClassName="active">
          <button>Order</button>
        </NavLink>

        {/* <a href="/menu">Menu</a>
        <a href="/about">Location</a>
        <a href="https://asiavilla.app4food.co.uk/Home/Outlets">
          <button>Order</button>
        </a> */}
      </div>
    </nav>
  );
}
export default Nav;
