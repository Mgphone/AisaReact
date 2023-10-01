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
      </div>
    </nav>
  );
}
export default Nav;
