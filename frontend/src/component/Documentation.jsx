import React from 'react';
import { FaAddressBook, FaResearchgate , FaFilePowerpoint, FaClipboardList, FaFileAlt } from 'react-icons/fa';
import { PiProjectorScreenChartFill } from "react-icons/pi";
import './styles/Documentation.css';

const Documentation = () => {
  const projectDocuments = [
    {
      name: 'Topic Assessment',
      description: 'Submitted on 2024/10/10',
      icon: <FaClipboardList/>,
      file: '/files/TAF_24-25J-085.pdf',
    },
    {
      name: 'Project Proposal',
      description: 'Submitted on 2024/08/22',
      icon: <PiProjectorScreenChartFill/>,
      file: 'https://drive.google.com/drive/folders/1JoEnFurCaFXDZITfBC3f-PcLMfDd9etl?usp=drive_link',
    },
    {
      name: 'Research Paper',
      description: 'Submitted on 2025/03/17',
      icon: <FaResearchgate />,
      file: 'https://drive.google.com/drive/folders/1zAVgjfTnuCMgxDkxtBRN41ABOwsLxzR_?usp=sharing',
    },
    {
      name: 'Final Report',
      description: 'Submitted on 2025/04/10',
      icon: <FaFileAlt />,
      file: 'https://drive.google.com/drive/folders/1iKPGLbfFM2YFFl4tp2JEft1BGCWRAxf_?usp=sharing',
    },
    {
      name: 'Research Logbook',
      description: 'Submitted on 2025/05/25',
      icon: <FaAddressBook />,
      file: 'https://drive.google.com/drive/folders/1UxySz39-jVmyBWfhbPjfUkQyOqq6iQ7m?usp=sharing',
    },
  ];

  const projectPresentations = [
    {
      name: 'Project Proposal',
      description: 'Submitted on 2024/08/22',
      icon: <FaFilePowerpoint/>,
      file: '/files/24-25J-085 Project Proposal.pdf',
    },
    {
      name: 'Progress Presentation I',
      description: 'Submitted on 2024/12/07',
      icon: <FaFilePowerpoint/>,
      file: '/files/24-25J-085 Progress Presentation 1.pdf',
    },
    {
      name: 'Progress Presentation II',
      description: 'Submitted on 2025/03/20',
      icon: <FaFilePowerpoint/>,
      file: '/files/24-25J-085 - Progress Presentation 2.pdf',
    },
    {
      name: 'Final Presentation',
      description: 'Submitted on 2025/05/27',
      icon: <FaFilePowerpoint />,
      file: '/files/Final viva Presentation.pdf',
    },
  ];

  const renderCard = (document) => (
    <div className="card" key={document.name}>
      <div className="document-icon">{document.icon}</div>
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
