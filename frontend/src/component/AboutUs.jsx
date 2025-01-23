import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './styles/AboutUs.css';

const AboutUs = () => {
  const supervisors = [
    {
      name: "Dr. John Smith",
      position: "Supervisor",
      description: "Dr. John Smith is an expert in software engineering with over 20 years of experience in academia and industry.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734375943/eehanee/807900008838988707_g6kwsc.png",
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
      },
    },
    {
      name: "Dr. Jane Doe",
      position: "Co-Supervisor",
      description: "Dr. Jane Doe specializes in artificial intelligence and machine learning, contributing to cutting-edge research in the field.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734375943/eehanee/807900008838988707_g6kwsc.png",
      social: {
        linkedin: "https://linkedin.com/in/janedoe",
        twitter: "https://twitter.com/janedoe",
      },
    },
  ];

  const teamMembers = [
    {
      name: "Alice Brown",
      position: "Team Member",
      description: "Alice is a front-end developer with a passion for creating responsive and user-friendly web applications.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734375943/eehanee/807900008838988707_g6kwsc.png",
      social: {
        linkedin: "https://linkedin.com/in/alicebrown",
        github: "https://github.com/alicebrown",
      },
    },
    {
      name: "Bob Johnson",
      position: "Team Member",
      description: "Bob is a back-end developer with expertise in databases and server-side technologies.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734375943/eehanee/807900008838988707_g6kwsc.png",
      social: {
        linkedin: "https://linkedin.com/in/bobjohnson",
        github: "https://github.com/bobjohnson",
      },
    },
    {
      name: "Charlie Lee",
      position: "Team Member",
      description: "Charlie is a full-stack developer, skilled in both front-end and back-end technologies, with a focus on scalability.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734375943/eehanee/807900008838988707_g6kwsc.png",
      social: {
        linkedin: "https://linkedin.com/in/charlielee",
        github: "https://github.com/charlielee",
      },
    },
    {
      name: "You",
      position: "Team Member",
      description: "You are a dedicated team member with a passion for coding and problem-solving.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734375943/eehanee/807900008838988707_g6kwsc.png",
      social: {
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourprofile",
      },
    },
  ];

  const renderSocialLinks = (social) => (
    <div className="social-links">
      {social.linkedin && (
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaLinkedin />
        </a>
      )}
      {social.twitter && (
        <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaTwitter />
        </a>
      )}
      {social.github && (
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaGithub />
        </a>
      )}
    </div>
  );

  return (
    <div className="about-us">
      <h1>About Us</h1>

      <section className="supervisors-section">
        <h2>Supervisors</h2>
        <div className="supervisors-container">
          {supervisors.map((supervisor, index) => (
            <div key={index} className="card supervisor-card">
              <img src={supervisor.image} alt={supervisor.name} className="profile-image" />
              <h3>{supervisor.name}</h3>
              <p className="position">{supervisor.position}</p>
              <p className="description">{supervisor.description}</p>
              {renderSocialLinks(supervisor.social)}
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Team Members</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="card team-card">
              <img src={member.image} alt={member.name} className="profile-image" />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="description">{member.description}</p>
              {renderSocialLinks(member.social)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
