// Navbar.jsx
import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className="navbar-links">
        <li onClick={() => handleScroll('home')}>Home</li>
        <li onClick={() => handleScroll('about')}>About</li>
        <li onClick={() => handleScroll('services')}>Services</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
