import React from "react";
import Nav from "../Component/NavBar/Nav";
import Footer from "../Component/footer/Footer";
import Welcome from "../Component/Menu/welcome/Welcome";
import "./styles/home.css";
function Home() {
  return (
    <>
      <Nav />
      <Welcome />

      <div className="overlay-text">
        <h1>Fun Fact</h1>
        Why did the tomato turn red at the restaurant? Because it saw the salad
        dressing! 🍅😄
      </div>
      <Footer />
    </>
  );
}

export default Home;
