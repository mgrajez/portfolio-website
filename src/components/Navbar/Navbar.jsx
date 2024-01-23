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

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-navbar" id="navbar">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={scrollToTop}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link" onClick={handleMenuItemClick}>
            About
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={handleMenuItemClick}
          >
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={handleMenuItemClick}>
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
              <a
                href="#home"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                Home
              </a>
            </div>
            <div className="mobile-menu-item">
              <a
                href="#about"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                About
              </a>
            </div>
            <div className="mobile-menu-item">
              <a
                href="#projects"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                Projects
              </a>
            </div>
            <div className="mobile-menu-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
