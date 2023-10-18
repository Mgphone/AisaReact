import React from "react";
import Nav from "../Component/NavBar/Nav";
import Footer from "../Component/footer/Footer";
import Welcome from "../Component/Menu/welcome/Welcome";
import "./styles/home.css";
function Home() {
  return (
    <>
      <Nav />
      <Welcome
        imageUrl={"/Images/PHOTO-2021-10-26-11-35-13 (1).jpg"}
        className={"home_welcome"}
      />

      <div className="home-overlay-text">
        <h1>Discover the Riches of Asian Cuisine</h1>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Home;
