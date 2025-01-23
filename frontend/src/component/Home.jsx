import React, { useState, useEffect } from 'react';
import Top from './Top';
import About from './AboutMe';
import Navbar from './Navbar';

const Home = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <section id="top" className={currentSection === 'top' ? 'slide-in' : ''}>
        <Top />
      </section>
      <section id="services" className={currentSection === 'about' ? 'slide-in' : ''}>
        <About />
      </section>
    </div>
  );
};

export default Home;
