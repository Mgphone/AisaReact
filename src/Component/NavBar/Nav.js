import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/Photos/Asia Villa-1.png" alt="Logo" />
        </Link>
      </div>
      <div className="tabs">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        {/* <Link to="/location">Location</Link> */}
        <Link to="/order">
          <button>Order</button>
        </Link>

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
