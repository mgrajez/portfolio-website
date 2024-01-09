import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/big-logo.png";
import menuIcon from "./../../assets/menu-icon.png";
import exitIcon from "./../../assets/exit-icon.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="nav-links">
          <a href="About" className="nav-link">
            About
          </a>
          /
          <a href="Projects" className="nav-link">
            Projects
          </a>
          /
          <a href="Contact" className="nav-link">
            Contact
          </a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <img className="menu-icon-1" src={exitIcon} alt="exit icon" />
          ) : (
            <img className="menu-icon-2" src={menuIcon} alt="menu icon" />
          )}
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-item">
              <a href="About" className="nav-link">
                About
              </a>
            </div>
            <div className="mobile-menu-item">
              <a href="Projects" className="nav-link">
                Projects
              </a>
            </div>
            <div className="mobile-menu-item">
              <a href="Contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
