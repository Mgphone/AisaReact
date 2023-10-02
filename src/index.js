import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import Nav from "./Component/NavBar/Nav";
import Background from "./Component/background/Background";
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
ReactDOM.render(
  <React.StrictMode>
    {/* <Background /> */}
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
