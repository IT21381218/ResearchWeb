import React from 'react';
import './styles/ProjectScope.css';
import { FaSearch, FaExclamationCircle, FaShareAlt } from 'react-icons/fa'; // Import the icons
import Marquee from "react-fast-marquee";
import { FaReact, FaPython, FaGithub } from "react-icons/fa"; // Import icons
import { SiTensorflow, SiGooglecloud, SiGooglecolab,SiGooglemaps,SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

const ProjectScope = () => {
  return (
    <div className="project-scope" id="literature-survey">
      <section  className="literature-survey">
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
            <h3>How can we leverage advanced technologies to develop an accurate and efficient disease detection and prevention system for cows?</h3>
            <p>
            The health management of cows is a critical aspect of livestock farming, directly influencing productivity, economic viability, and animal welfare. Despite advancements in veterinary medicine, many cow owners still face challenges in timely disease detection, effective care practices, and efficient communication with veterinarians. These issues are exacerbated by the lack of accessible and comprehensive technological solutions tailored to the specific needs of cow health management.
            <br/>
            One of the primary issues is the late diagnosis of diseases. Cows frequently exhibit modest signs that go unrecognized until the illness worsens, resulting in higher mortality rates and huge economic losses. Early diagnosis is critical for effective disease treatment and prevention in herds, but traditional approaches are labor-intensive and need specialist knowledge that not all cow owners have.
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
          A thorough veterinary application that makes use of cutting-edge technologies to enhance illness detection, care procedures, and communication is required to meet these obstacles. In order to provide a comprehensive solution for cow health management, the suggested application intends to incorporate AI-driven diagnostic capabilities, individualized health records management, and community participation features. The program aims to increase the productivity of cattle husbandry and the general well-being of cows by promoting a supportive community, supporting efficient care practices, and improving early disease diagnosis.
          </p>
        </div>
      </section>

      <section id="research-objectives" className="research-objectives">
  <h2>Research Objectives</h2>
  <div className="objectives-container">
    <div className="objective-card">
      <h3>Enhance disease detection and prevention</h3>
      <p>
        Gain a comprehensive understanding of the current challenges and gaps
        in the field by reviewing existing literature and data.
      </p>
    </div>
    <div className="objective-card">
      <h3>Improve cow care practices</h3>
      <p>
        Develop innovative solutions to address identified research gaps using
        cutting-edge methodologies and technologies.
      </p>
    </div>
    <div className="objective-card">
      <h3>Predict milk production</h3>
      <p>
        Foster collaboration between researchers and industry experts to share
        knowledge and create impactful solutions.
      </p>
    </div>
    <div className="objective-card">
      <h3>Streamline veterinary communication and services</h3>
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
        <SiTensorflow   className="tech-icon" title="Tensorflow  " />
        <p>Tensorflow </p>
      </div>
      <div className="tech-item">
        <FaPython className="tech-icon" title="Python" />
        <p>Python</p>
      </div>
      <div className="tech-item">
        <IoLogoFirebase className="tech-icon" title="Firebase" />
        <p>Firebase</p>
      </div>
      <div className="tech-item">
        <SiGooglecloud  className="tech-icon" title="Googlecloud " />
        <p>Google cloud </p>
      </div>
      <div className="tech-item">
        <SiGooglecolab  className="tech-icon" title="Googlecolab " />
        <p>Google Colab </p>
      </div>
      <div className="tech-item">
        <SiGooglemaps  className="tech-icon" title="Googlemaps " />
        <p>Google map API </p>
      </div>
      <div className="tech-item">
        <SiPostman  className="tech-icon" title="Postman" />
        <p>Postman</p>
      </div>
      <div className="tech-item">
        <FaGithub  className="tech-icon" title="Github" />
        <p>Github</p>
      </div>
      <div className="tech-item">
        <VscVscode className="tech-icon" title="Vscode" />
        <p>VS code</p>
      </div>
    </div>
  </Marquee>
</section>


    </div>
  );
};

export default ProjectScope;
