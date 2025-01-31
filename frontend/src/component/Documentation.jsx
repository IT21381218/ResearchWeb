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
      description: 'Submitted on 2024/08/22',
      icon: <FaResearchgate />,
      file: '/files/RequirementsDocument.pdf',
    },
    {
      name: 'Final Report',
      description: 'Submitted on 2024/08/22',
      icon: <FaFileAlt />,
      file: '/files/RequirementsDocument.pdf',
    },
    {
      name: 'Research Logbook',
      description: 'Submitted on 2024/08/22',
      icon: <FaAddressBook />,
      file: '/files/RequirementsDocument.pdf',
    },
  ];

  const projectPresentations = [
    {
      name: 'Project Proposal',
      description: 'Submitted on 2024/08/22',
      icon: <FaFilePowerpoint/>,
      file: 'https://drive.google.com/drive/folders/1D5okpQR2gjrtjRtBOOp8TxvJmB0galCV?usp=drive_link',
    },
    {
      name: 'Progress Presentation I',
      description: 'Submitted on 2024/10/07',
      icon: <FaFilePowerpoint/>,
      file: 'https://drive.google.com/drive/folders/1rBVEDZmxd4KaYxLfYcfZfBY8rY1zGWX5?usp=sharing',
    },
    {
      name: 'Progress Presentation II',
      description: 'Submitted on 2024/08/22',
      icon: <FaFilePowerpoint/>,
      file: '/files/InitialPresentation.pptx',
    },
    {
      name: 'Final Presentation',
      description: 'Submitted on 2024/08/22',
      icon: <FaFilePowerpoint />,
      file: '/files/InitialPresentation.pptx',
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
