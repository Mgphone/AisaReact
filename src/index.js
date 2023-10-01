import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import Nav from "./Component/NavBar/Nav";
import Background from "./Component/background/Background";
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Background />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
