import React, { useState } from "react";
import Nav from "../Component/NavBar/Nav";
import Footer from "../Component/footer/Footer";
import StaticMap from "../Component/location/StaticMap";
import stores from "../Services/store";
import "./styles/location.css";
import SearchStore from "../Component/location/SearchStore";

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
