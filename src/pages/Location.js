import React from "react";
import Nav from "../Component/NavBar/Nav";
import Footer from "../Component/footer/Footer";
import StaticMap from "../Component/location/StaticMap";
import store from "../Services/store";
import "./styles/location.css";

function Location() {
  return (
    <div>
      <Nav />

      <StaticMap locations={store} />
      <div className="U"></div>
      <Footer />
    </div>
  );
}

export default Location;
