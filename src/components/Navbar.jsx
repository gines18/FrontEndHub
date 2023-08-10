// Navbar.js

import React, { useState } from "react";
import "./Styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Colors</a>
        </li>
        <li>
          <a href="#">Backgrounds</a>
        </li>
        <li>
          <a href="#">Fonts</a>
        </li>
        <li>
          <a href="#">Photo Editor</a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
