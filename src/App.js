import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Location from "./pages/Location";
import ToCheck from "./pages/ToCheck";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order" element={<Order />} />
      <Route path="/location" element={<Location />} />
      <Route path="/tocheck" element={<ToCheck />} />
    </Routes>
  );
}
