import React from 'react';
import './styles/ProjectScope.css';
import { FaSearch, FaExclamationCircle, FaShareAlt } from 'react-icons/fa'; // Import the icons
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Import icons

const ProjectScope = () => {
  return (
    <div className="project-scope">
      <section id="literature-survey" className="literature-survey">
        <div className="literature-survey-content">
          <img
            src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735639456/intern%20frontend/813326657067760057_imlsmr.png" // Replace with your image URL
            alt="Literature Survey"
            className="literature-survey-image"
          />
          <div className="literature-survey-text">
            <h2>Literature Survey</h2>
            <p>
              In this section, we discuss the relevant literature in the field of research. The literature survey is a critical
              part of understanding existing work and identifying gaps in knowledge. Here we explore various studies, their methodologies, 
              and findings.
            </p>
          </div>
        </div>
      </section>

      {/* Research Gap Section */}
      <section id="research-gap">
        <div className='research-gap-heading'>
          <h2>Research Gap</h2>
        </div>
        <div className="research-gap-content">
          <div className="research-gap-item">
            <FaSearch className="research-gap-icon" />
            <h3>Identification & Classification</h3>
            <p>
              This part focuses on identifying and classifying the existing research gaps in the field. We categorize the gaps based on various
              factors like methodologies, data types, and research areas to better understand the scope of future studies.
            </p>
          </div>

          <div className="research-gap-item">
            <FaExclamationCircle className="research-gap-icon" />
            <h3>Severity Assessment</h3>
            <p>
              In this section, we assess the severity of the identified gaps. We analyze the impact of each gap on the overall research landscape
              and prioritize them based on their potential for contributing to advancements in the field.
            </p>
          </div>

          <div className="research-gap-item">
            <FaShareAlt className="research-gap-icon" />
            <h3>Information Sharing</h3>
            <p>
              The final part emphasizes the importance of sharing research findings and information across the community. We explore various
              platforms and methods for disseminating knowledge to facilitate collaboration and future research.
            </p>
          </div>
        </div>
      </section>

      {/* Research Problem & Solution Section */}
      <section id="research-problem" className="research-problem">
        <div className="research-problem-top">
          <div className="research-problem-left">
            <h2>Research Problem</h2>
            <h3>How to classify pest and diseases in coconut and provide surveillance to people in real time?</h3>
            <p>
              The research problem addresses the challenges and issues that exist within the current body of knowledge. It identifies gaps
              and outlines the main areas where further investigation is needed to make progress in the field. The research solution proposes a methodology or approach to address the identified problem. It outlines the steps and strategies
              that can be implemented to overcome the challenges and gaps found in the existing research.The research solution proposes a methodology or approach to address the identified problem. It outlines the steps and strategies
              that can be implemented to overcome the challenges and gaps found in the existing research.
            </p>
          </div>
          <div className="research-problem-right">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/fUu5l6VVmUU" // Replace with your YouTube video link
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Research Solution Section */}
        <div className="research-solution">
          <h2>Research Solution</h2>
          <p>
            The research solution proposes a methodology or approach to address the identified problem. It outlines the steps and strategies
            that can be implemented to overcome the challenges and gaps found in the existing research. The research solution proposes a methodology or approach to address the identified problem. It outlines the steps and strategies
            that can be implemented to overcome the challenges and gaps found in the existing research. The research solution proposes a methodology or approach to address the identified problem. It outlines the steps and strategies
            that can be implemented to overcome the challenges and gaps found in the existing research.
          </p>
        </div>
      </section>

      <section id="research-objectives" className="research-objectives">
  <h2>Research Objectives</h2>
  <div className="objectives-container">
    <div className="objective-card">
      <h3>Objective 1: Understanding</h3>
      <p>
        Gain a comprehensive understanding of the current challenges and gaps
        in the field by reviewing existing literature and data.
      </p>
    </div>
    <div className="objective-card">
      <h3>Objective 2: Innovation</h3>
      <p>
        Develop innovative solutions to address identified research gaps using
        cutting-edge methodologies and technologies.
      </p>
    </div>
    <div className="objective-card">
      <h3>Objective 3: Collaboration</h3>
      <p>
        Foster collaboration between researchers and industry experts to share
        knowledge and create impactful solutions.
      </p>
    </div>
    <div className="objective-card">
      <h3>Objective 4: Implementation</h3>
      <p>
        Implement and evaluate proposed solutions to measure their effectiveness
        and scalability in real-world scenarios.
      </p>
    </div>
  </div>
</section>



<section id="methodology" className="methodology">
  <div className="methodology-content">
    <div className="methodology-text">
      <h2>Methodology</h2>
      <p>
        Our methodology involves a structured approach to research and problem-solving. We employ qualitative and quantitative methods to gather data, analyze trends, and derive actionable insights. By leveraging advanced tools and frameworks, we ensure accuracy, reliability, and scalability in our solutions.
      </p>
    </div>
    <div className="methodology-image">
      <img
        src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735640072/intern%20frontend/813328503903725869_kwjyqu.png" // Replace with your image URL
        alt="Methodology Illustration"
      />
    </div>
  </div>
</section>


<section id="technologies" className="technologies">
  <h2>Technologies</h2>
  <Marquee gradient={false} speed={50} className="technologies-marquee">
    <div className="icon-wrapper">
      <div className="tech-item">
        <FaReact className="tech-icon" title="React" />
        <p>React</p>
      </div>
      <div className="tech-item">
        <FaNodeJs className="tech-icon" title="Node.js" />
        <p>Node.js</p>
      </div>
      <div className="tech-item">
        <FaPython className="tech-icon" title="Python" />
        <p>Python</p>
      </div>
      <div className="tech-item">
        <FaDatabase className="tech-icon" title="Database" />
        <p>Database</p>
      </div>
      <div className="tech-item">
        <FaHtml5 className="tech-icon" title="HTML5" />
        <p>HTML5</p>
      </div>
      <div className="tech-item">
        <FaCss3Alt className="tech-icon" title="CSS3" />
        <p>CSS3</p>
      </div>
      <div className="tech-item">
        <FaJsSquare className="tech-icon" title="JavaScript" />
        <p>JavaScript</p>
      </div>
    </div>
  </Marquee>
</section>


    </div>
  );
};

export default ProjectScope;
