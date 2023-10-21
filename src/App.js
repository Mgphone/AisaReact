import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Location from "./pages/Location/Location";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order" element={<Order />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
}
