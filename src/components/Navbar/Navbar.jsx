import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, []);

  return (
    <div className="container-navbar" id="navbar">
      <p>Site under construction</p>
      {/* <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={scrollToTop}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/" onClick={scrollToTop} className="nav-link">
            HOME
          </Link>
          <a href="#about" className="nav-link" onClick={handleMenuItemClick}>
            ABOUT
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={handleMenuItemClick}
          >
            PROJECTS
          </a>
          <a href="#contact" className="nav-link" onClick={handleMenuItemClick}>
            CONTACT
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
              <a className="nav-link" onClick={scrollToTop}>
                HOME
              </a>
            </div>
            <div className="mobile-menu-item">
              <a
                href="#about"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                ABOUT
              </a>
            </div>
            <div className="mobile-menu-item">
              <a
                href="#projects"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                PROJECTS
              </a>
            </div>
            <div className="mobile-menu-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={handleMenuItemClick}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </nav> */}
    </div>
  );
}

export default Navbar;
