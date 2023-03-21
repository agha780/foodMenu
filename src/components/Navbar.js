import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <span>Foody</span>
      </div>
      <ul className="custom">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signUp">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
