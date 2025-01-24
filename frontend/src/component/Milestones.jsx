// Milestones.jsx

import React, { useEffect, useRef } from "react";
import "./styles/Milestones.css";

const milestones = [
  {
    date: "2025-01-01",
    name: "Project Kickoff",
    description: "Started the project with an initial meeting to define goals and responsibilities.",
    type: ["Group"],
  },
  {
    date: "2025-01-10",
    name: "Wireframe Design",
    description: "Created wireframes for the application layout and flow.",
    type: ["Individual"],
  },
  {
    date: "2025-01-20",
    name: "Prototype Development",
    description: "Developed a working prototype of the application.",
    type: ["Group"],
  },
  {
    date: "2025-01-25",
    name: "Testing Phase",
    description: "Conducted extensive testing to ensure the application is bug-free.",
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
