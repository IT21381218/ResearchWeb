// Milestones.jsx

import React, { useEffect, useRef } from "react";
import "./styles/Milestones.css";

const milestones = [
  {
    date: "2025-01-10",
    name: "Project Proposal",
    description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    type: ["Group"],
  },
  {
    date: "2024-12-06",
    name: "Progress Presentation I",
    description: "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    type: ["Group", "Individual"],
  },
  {
    date: "2025-03-07",
    name: "Research Paper",
    description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge",
    type: ["Group", "Individual"],
  },
  {
    date: "2025-03-18",
    name: "Progress Presentation II",
    description: "Conducted extensive testing to ensure the application is bug-free.",
    type: ["Group", "Individual"],
  },
  {
    date: "2025-01-25",
    name: "MS Planner",
    description: "Maintain a project management tool.",
    type: ["Group"],
  },
  {
    date: "2025-01-25",
    name: "Website Assessment",
    description: "Conducted extensive testing to ensure the application is bug-free.",
    type: ["Group", "Individual"],
  },
  {
    date: "2025-01-25",
    name: "Logbook",
    description: "Daily status of the project is validated through the Logbook.",
    type: ["Individual"],
  },
  {
    date: "2025-01-25",
    name: "Final Report",
    description: "Final Report evalutes the completed project done throughout the year.",
    type: ["Group", "Individual"],
  },
  {
    date: "2025-01-25",
    name: "Final Presentation & Viva",
    description: "Viva is held individually to assess each members contribution to the project.",
    type: ["Group", "Individual"],
  },
];

const Milestones = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".timeline-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Milestones-container">
      <div className="timeline-container" ref={timelineRef}>
        <h1 className="timeline-title">Project Milestones</h1>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline-card`}
            >
              <div className="card-content">
                <span className="date">{milestone.date}</span>
                <h2 className="name">{milestone.name}</h2>
                <p className="description">{milestone.description}</p>
                <div className="types">
                  {milestone.type.map((t, i) => (
                    <span key={i} className={`type ${t.toLowerCase()}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestones;
