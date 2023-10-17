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
        {/* <NavLink to="/" activeClassName="active">
          Home
        </NavLink> */}
        <NavLink to="/menu" activeClassName="active">
          Menu
        </NavLink>
        <NavLink to="/location">Locations</NavLink>
        <NavLink to="/order" activeClassName="active">
          <button>Order</button>
        </NavLink>
      </div>
    </nav>
  );
}
export default Nav;
