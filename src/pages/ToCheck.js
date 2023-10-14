import React from "react";
import stores from "../Services/store";
import "./styles/ToCheck.css";
import Nav from "../Component/NavBar/Nav";
import Footer from "../Component/footer/Footer";
function ToCheck() {
  return (
    <div className="tocheck">
      <Nav />
      {stores.map((store, index) => (
        <div className="toCheckstore" key={index}>
          {index + 1}
          <p>
            <span className="bold">Name:</span>
            {store.Name}
          </p>
          <p>
            <span className="bold">Address:</span>
            {store.Address}
          </p>
          <p>
            <span className="bold">Telephone:</span>
            {store.tel}
          </p>
          <p>
            <span className="bold">Opening:</span>
            {store.Opening}
          </p>
          <p>
            <span className="bold">Closing:</span>
            {store.Closing}
          </p>
          <hr />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default ToCheck;
