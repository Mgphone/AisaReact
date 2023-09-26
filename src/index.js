import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";
import Background from "./Background";
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Background />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
