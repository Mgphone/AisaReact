import React from "react";
import Nav from "../Component/NavBar/Nav";
import Footer from "../Component/footer/Footer";
import StaticMap from "../Component/location/StaticMap";
import stores from "../Services/store";
import "./styles/location.css";
import SearchStore from "../Component/location/SearchStore";

function Location() {
  return (
    <div>
      {/* <Nav /> */}

      {/* <StaticMap locations={stores} /> */}
      <SearchStore locations={stores} />
      {/* <Footer /> */}
    </div>
  );
}

export default Location;
