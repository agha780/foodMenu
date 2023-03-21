import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Menu from "./components/menu";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
