import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import { Routes, Route } from "react-router-dom";

function RoutePaths() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/features" element={<Features />}></Route>
    </Routes>
  );
}

export default RoutePaths;
