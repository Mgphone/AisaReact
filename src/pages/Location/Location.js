import React, { useState } from "react";
import Nav from "../../Component/navBar/Nav";
import Footer from "../../Component/footer/Footer";
import StaticMap from "./StaticMap";
import stores from "../../data/store";
import SearchStore from "./SearchStore";
import "./location.css";

function Location() {
  return (
    <div>
      <Nav />
      <div className="location-container">
        <SearchStore />
        <StaticMap locations={stores} />
      </div>

      <Footer />
    </div>
  );
}

export default Location;
