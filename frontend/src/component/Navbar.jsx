import React, { useState, useEffect } from 'react';
import './styles/Navbar.css';
import classNames from 'classnames'; // Import classnames library for conditional class handling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll event handler to set active section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Set the active section when user clicks a link
    }
    // Close the sidebar after clicking a menu item (mobile)
    setIsMenuOpen(false);
  };

  // Function to update active section based on scroll position
  const updateActiveSection = () => {
    const sections = ['top', 'literature-survey', 'research-gap', 'research-problem', 'research-objectives', 'methodology', 'technologies', 'Milestones', 'Documentation', 'about', 'contactUs'];
    let currentSection = '';
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = sectionId;
        }
      }
    });
    setActiveSection(currentSection);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1740171352/cattle%20site/logo2_cnbuwh.png"
          alt="MyApp Logo"
          className="logo-img"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close-icon">×</span> // Close icon when menu is open
        ) : (
          <>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </>
        )}
      </div>

      {/* Navbar Links for Desktop */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li
          onClick={() => handleScroll('top')}
          className={classNames({ active: activeSection === 'top' })}
        >
          Home
        </li>
        <li
          className={classNames('dropdown', { active: activeSection === 'project-scope' })}
          onClick={toggleDropdown}
        >
          <span>
            <span className="dropdown-text">Project Scope</span>
            <span className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleScroll('literature-survey')}>Literature Survey</li>
              <li onClick={() => handleScroll('research-gap')}>Research Gap</li>
              <li onClick={() => handleScroll('research-problem')}>Research Problem & Solution</li>
              <li onClick={() => handleScroll('research-objectives')}>Research Objectives</li>
              <li onClick={() => handleScroll('methodology')}>Methodology</li>
              <li onClick={() => handleScroll('technologies')}>Technologies</li>
            </ul>
          )}
        </li>
        <li
          onClick={() => handleScroll('Milestones')}
          className={classNames({ active: activeSection === 'Milestones' })}
        >
          Milestones
        </li>
        <li
          onClick={() => handleScroll('Documentation')}
          className={classNames({ active: activeSection === 'Documentation' })}
        >
          Documentation
        </li>
        <li
          onClick={() => handleScroll('about')}
          className={classNames({ active: activeSection === 'about' })}
        >
          About Us
        </li>
        <li
          onClick={() => handleScroll('contactUs')}
          className={classNames({ active: activeSection === 'contactUs' })}
        >
          Contact Us
        </li>
      </ul>

      {/* Sidebar Menu for Mobile */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li
            onClick={() => handleScroll('top')}
            className={classNames({ active: activeSection === 'top' })}
          >
            Home
          </li>
          <li
            className={classNames('dropdown', { active: activeSection === 'project-scope' })}
            onClick={toggleDropdown}
          >
            <span>
              <span className="dropdown-text">Project Scope</span>
              <span className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </span>
            {isDropdownOpen && (
              <ul className="mobile-dropdown-menu">
                <li onClick={() => handleScroll('literature-survey')}>Literature Survey</li>
                <li onClick={() => handleScroll('research-gap')}>Research Gap</li>
                <li onClick={() => handleScroll('research-problem')}>Research Problem & Solution</li>
                <li onClick={() => handleScroll('research-objectives')}>Research Objectives</li>
                <li onClick={() => handleScroll('methodology')}>Methodology</li>
                <li onClick={() => handleScroll('technologies')}>Technologies</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => handleScroll('Milestones')}
            className={classNames({ active: activeSection === 'Milestones' })}
          >
            Milestones
          </li>
          <li
            onClick={() => handleScroll('Documentation')}
            className={classNames({ active: activeSection === 'Documentation' })}
          >
            Documentation
          </li>
          <li
            onClick={() => handleScroll('about')}
            className={classNames({ active: activeSection === 'about' })}
          >
            About Us
          </li>
          <li
            onClick={() => handleScroll('contactUs')}
            className={classNames({ active: activeSection === 'contactUs' })}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;