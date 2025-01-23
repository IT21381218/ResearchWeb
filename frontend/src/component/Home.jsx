// Home.jsx
import React from 'react';
import './styles/Home.css';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Top from './Top';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Top />
      <AboutMe />
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <p>We offer a range of services to meet your needs.</p>
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us anytime.</p>
      </section>
      <video className="background-video" autoPlay loop muted>
        <source
          src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1733940890/eehanee/1_xuwm2i.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
