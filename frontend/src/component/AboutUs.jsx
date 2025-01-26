import React from 'react';
import { FaLinkedin, FaFacebook , FaGithub } from 'react-icons/fa';
import './styles/AboutUs.css';

const AboutUs = () => {
  const supervisors = [
    {
      name: "Mr. S.M.B Harshanath",
      position: "Supervisor",
      description: "Senior Lecturer, Sri Lanka Institute of Information Technology.",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737918830/cattle%20site/scan_image_1508475670-SMBH_bg81gq.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/buddhikaharshanathsm/",
        facebook: "https://www.facebook.com/smbharshanath",
      },
    },
    {
      name: "Ms. Manori Gamage",
      position: "Co-Supervisor",
      description: "Senior Lecturer, Sri Lanka Institute of Information Technology",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737918830/cattle%20site/scan_image_1509944773-GamageMP_qppkin.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/manori-gamage-a95b3a177/",
        facebook: "https://twitter.com/janedoe",
      },
    },
  ];

  const teamMembers = [
    {
      name: "Poornaka Perera",
      position: "Team Leader",
      description: "Bachelor of Science (Hons) in Information Technology Specializing in Information Technology",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737716972/cattle%20site/Poornaka_u8bpxr.jpg",
      social: {
        linkedin: "https://linkedin.com/in/alicebrown",
        facebook: "https://www.facebook.com/share/1FHNrdDR9y/?mibextid=qi2Omg",
      },
    },
    {
      name: "Eehanee Hettiarachchi",
      position: "Team Member",
      description: "Bachelor of Science (Hons) in Information Technology Specializing in Information Technology",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737917296/cattle%20site/Eehanee_Hettiarachchi_-_Copy_tudpl9.png",
      social: {
        linkedin: "https://www.linkedin.com/in/eehanee-hettiarachchi-322435219/",
        facebook: "https://www.facebook.com/share/1FHNrdDR9y/?mibextid=qi2Omg",
      },
    },
    {
      name: "Thesarana Dissanayake",
      position: "Team Member",
      description: "Bachelor of Science (Hons) in Information Technology Specializing in Information Technology",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737917297/cattle%20site/Thesarana_ittl0w.jpg",
      social: {
        linkedin: "http://www.linkedin.com/in/bthesarana",
        facebook: "https://web.facebook.com/thesarana.dissanayake/",
      },
    },
    {
      name: "You",
      position: "Team Member",
      description: "Bachelor of Science (Hons) in Information Technology Specializing in Information Technology",
      image: "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734375943/eehanee/807900008838988707_g6kwsc.png",
      social: {
        linkedin: "https://linkedin.com/in/yourprofile",
        facebook: "https://github.com/yourprofile",
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
      {social.facebook && (
        <a href={social.facebook } target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaFacebook  />
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
            <div key={index} className="Aboutcard supervisor-card">
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
            <div key={index} className="Aboutcard team-card">
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
