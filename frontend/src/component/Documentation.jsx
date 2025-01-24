import React from 'react';
import './styles/Documentation.css';

const Documentation = () => {
  const projectDocuments = [
    {
      name: 'Project Plan',
      description: 'Detailed project plan outlining the timeline and milestones.',
      image: 'https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734375805/eehanee/807899038176362627_it4oua.png', // Replace with your image URL
      file: '/files/ProjectPlan.pdf', // Replace with your file path
    },
    {
      name: 'Requirements Document',
      description: 'Comprehensive document detailing the project requirements.',
      image: 'https://via.placeholder.com/150',
      file: '/files/RequirementsDocument.pdf',
    },
  ];

  const projectPresentations = [
    {
      name: 'Initial Presentation',
      description: 'Slides from the initial project kickoff meeting.',
      image: 'https://via.placeholder.com/150',
      file: '/files/InitialPresentation.pptx',
    },
    {
      name: 'Final Presentation',
      description: 'Final presentation slides summarizing the project outcomes.',
      image: 'https://via.placeholder.com/150',
      file: '/files/LogBook-23-IT20409982.pdf',
    },
  ];

  const renderCard = (document) => (
    <div className="card" key={document.name}>
      <img src={document.image} alt={document.name} className="document-image" />
      <h3>{document.name}</h3>
      <p className="description">{document.description}</p>
      <a href={document.file} download className="download-btn">
        Download
      </a>
    </div>
  );

  return (
    <div className="documentation">
      <h1>Documentation</h1>

      <section className="documents-section">
        <h2>Project Documents</h2>
        <div className="documents-container">
          {projectDocuments.map(renderCard)}
        </div>
      </section>

      <section className="presentations-section">
        <h2>Project Presentations</h2>
        <div className="presentations-container">
          {projectPresentations.map(renderCard)}
        </div>
      </section>
    </div>
  );
};

export default Documentation;
