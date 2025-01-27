import React, { useState, useEffect } from 'react';
import Top from './Top';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import Documentation from './Documentation';
import Milestones from './Milestones';
import Footer from './Footer';
import ProjectScope from './ProjectScope';
import CountUpSection from './CountUpSection';

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
      <section id="countUpSection" className={currentSection === 'countUpSection' ? 'slide-in' : ''}>
        <CountUpSection />
      </section>
      <section id="top" className={currentSection === 'top' ? 'slide-in' : ''}>
        <ProjectScope />
      </section>
      <section id="Milestones" className={currentSection === 'Milestones' ? 'slide-in' : ''}>
        <Milestones />
      </section>
      <section id="Documentation" className={currentSection === 'Documentation' ? 'slide-in' : ''}>
        <Documentation />
      </section>
      <section id="about" className={currentSection === 'about' ? 'slide-in' : ''}>
        <AboutUs />
      </section>
      <section id="about" className={currentSection === 'about' ? 'slide-in' : ''}>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
