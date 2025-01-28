import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>SLIIT Malabe Campus, New Kandy Rd, Malabe 10115</p>
          <p>Phone: +94 71 477 7848</p>
          <p>Email: cattlesite@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#literature-survey">Project Scope</a></li>
            <li><a href="#Milestones">Milestones</a></li>
            <li><a href="#Documentation">Documentation</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Cattle Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
