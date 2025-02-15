import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="logo">
          <img src="/deeplogo.png" alt="Deep Net Soft" />
          <div className="logo-text">
            <span className="deep-net">DEEP <b>NET</b></span>
            <span className="soft">SOFT</span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        {menuOpen ?        
          <ul className="`nav-links">
            <li><a href="/" className="nav-link" onClick={() => setMenuOpen(false)}>HOME</a></li>
            <li><a href="/menu" className="nav-link active" onClick={() => setMenuOpen(false)}>MENU</a></li>
            <li><a href="/reservation" className="nav-link" onClick={() => setMenuOpen(false)}>MAKE A RESERVATION</a></li>
            <li><a href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>CONTACT US</a></li>
          </ul>:""}

        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/" className="nav-link" onClick={() => setMenuOpen(false)}>HOME</a></li>
          <li><a href="/menu" className="nav-link active" onClick={() => setMenuOpen(false)}>MENU</a></li>
          <li><a href="/reservation" className="nav-link" onClick={() => setMenuOpen(false)}>MAKE A RESERVATION</a></li>
          <li><a href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
