import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Photos/Asia Villa-1.png" alt="Logo" />
      </div>
      <div className="tabs">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">Location</a>
        <a href="https://asiavilla.app4food.co.uk/Home/Outlets">
          <button>Order</button>
        </a>
      </div>
    </nav>
  );
}
export default Nav;
