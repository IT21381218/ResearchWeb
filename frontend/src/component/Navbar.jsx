import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1714587388/citymart/logo_transparent_limzrg.png" // Replace with your Cloudinary URL
          alt="MyApp Logo"
          className="logo-img"
        />
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => handleScroll('top')}>Home</li>
        <li onClick={() => handleScroll('about')}>About Us</li>
        <li onClick={() => handleScroll('services')}>Services</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
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
