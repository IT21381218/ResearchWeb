// Home.jsx
import React from 'react';
import './styles/Home.css';
import Navbar from './Navbar';
import Top from './Top';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Top />
      <video className="background-video" autoPlay loop muted>
        <source src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1733940890/eehanee/1_xuwm2i.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;