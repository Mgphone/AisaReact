import React, { useState } from "react";
import Nav from "../../Component/NavBar/Nav";
import Footer from "../../Component/footer/Footer";
import StaticMap from "./StaticMap";
import stores from "../../data/store";
import SearchStore from "./SearchStore";
import "./location.css";

function Location() {
  console.log(
    "This is log from location JS " + process.env.REACT_APP_GOOGLE_API_KEY
  );
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
