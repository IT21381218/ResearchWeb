// Top.jsx
import React from 'react';
import './styles/Top.css';

const Top = () => {
  return (
    <div className="top-section">
      <div className="top-content">
        <h1>Welcome to MyApp</h1>
        <p>Your one-stop solution for all your needs.</p>
        <a href="#services" className="top-button">Explore Services</a>
      </div>
    </div>
  );
};

export default Top;
