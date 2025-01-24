import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1714587388/citymart/logo_transparent_limzrg.png"
          alt="MyApp Logo"
          className="logo-img"
        />
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => handleScroll('top')}>Home</li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span>
            <span className="dropdown-text">Project Scope</span>
            <span className="dropdown-icon">▼</span>
          </span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleScroll('literature-survey')}>
                Literature Survey
              </li>
              <li onClick={() => handleScroll('research-gap')}>
                Research Gap
              </li>
              <li onClick={() => handleScroll('research-problem')}>
                Research Problem & Solution
              </li>
              <li onClick={() => handleScroll('research-objectives')}>
                Research Objectives
              </li>
              <li onClick={() => handleScroll('methodology')}>
                Methodology
              </li>
              <li onClick={() => handleScroll('technologies')}>
                Technologies
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => handleScroll('Milestones')}>Milestones</li>
        <li onClick={() => handleScroll('Documentation')}>Documentation</li>
        <li onClick={() => handleScroll('about')}>About Us</li>
      </ul>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
