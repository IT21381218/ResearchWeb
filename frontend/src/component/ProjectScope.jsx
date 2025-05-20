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
            src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1742198514/cattle%20site/dfd_vfjkf9.png" // Replace with your image URL
            alt="Literature Survey"
            className="literature-survey-image"
          />
          <div className="literature-survey-text">
  <h2>Literature Survey</h2>
  <p>
    Recent developments in livestock health monitoring have seen an increasing role for machine learning (ML) and Internet of Things (IoT) technologies.
    CNN-based disease identification achieved 88% accuracy on skin disease detection in cattle using image datasets (AlZub, 2024).
    Similarly, respiratory disease detection via CNNs showed promising results with the help of high-quality imagery (Ghaffari et al., 2022).
    However, the integration of CNNs into symptom-based diagnosis remains limited (Ali Rohan et al., 2024).
  </p>

  <p>
    Tools like the mobile app developed by Shanka (2022) allow users to input symptoms to receive possible diagnoses, emphasizing the need for ML integration.
    Slob et al. (2020) introduced an adaptive dairy management system that relied on manual input and needed frequent updates.
    Furthermore, Pavkin et al. (2021) used regression models to detect cattle illness from behavioral changes, such as feeding and movement patterns.
  </p>

  <p>
    Real-time monitoring through IoT devices such as RFID tags and heart rate sensors enables effective disease tracking (Rajak et al., 2023).
    Ji et al. (2022) used machine learning to predict milk yield and composition in robotic farms, achieving excellent results through cross-validation.
  </p>

  <p>
    Veterinary scheduling platforms like CattleMax and PetDesk have improved client satisfaction by enabling appointment and communication tools (CattleMax, 2023; PetDesk, 2023).
    However, these platforms lack integration with geolocation or vet profile management features, which are critical in rural and emergency contexts.
  </p>

  <p>
    In contrast, the CattleSite system addresses these limitations by integrating ML-powered disease detection, real-time IoT data, predictive milk yield modeling, and advanced vet communication tools within a unified platform.
  </p>

  <p><strong>References:</strong></p>
  <ul>
    <li>AlZub, A.A. (2024). CNN-based Bovine Disease Detection. Indian Journal of Animal Research.</li>
    <li>Ghaffari, M.H. et al. (2022). Deep learning in Respiratory Diagnosis. Journal of Dairy Science.</li>
    <li>Ali Rohan et al. (2024). Application of CNNs in Symptom-based Diagnosis. ScienceDirect.</li>
    <li>Shanka, A.G. (2022). Mobile App for Cattle Disease Diagnosis. ResearchGate.</li>
    <li>Slob, N. et al. (2020). Adaptive Dairy Recommendation Systems. ResearchGate.</li>
    <li>Pavkin, D.U. et al. (2021). Behavior-based Disease Detection using Regression. Algorithms for Cattle Health.</li>
    <li>Rajak, P. et al. (2023). IoT in Agricultural Health Systems. Journal of Agriculture and Food Research.</li>
    <li>Ji, B. et al. (2022). ML-based Milk Yield Prediction. Biosystems Engineering.</li>
    <li>CattleMax (2023). Online Veterinary Management Platform. https://www.cattlemax.com/</li>
    <li>PetDesk (2023). Vet-Client Communication Platform. https://petdesk.com/</li>
  </ul>
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
      <p>Developing a machine learning-based system for early cow disease detection, including a comprehensive disease database, an interactive symptom checker, and a CNN for image classification.</p>
    </div>
    <div className="objective-card">
      <h3>Improve cow care practices</h3>
      <p>The integrated cow care system combines health records, nutrition tracking, and predictive analytics to optimize cattle management, improve productivity, and enhance overall cow health.</p>
    </div>
    <div className="objective-card">
      <h3>Predict milk production</h3>
      <p>Developing a predictive model to forecast milk production using historical environmental data, helping farmers optimize herding, nutrition, and productivity.</p>
    </div>
    <div className="objective-card">
      <h3>Streamline veterinary communication and services</h3>
      <p>Leveraging modern technology to enhance communication and service delivery between veterinarians and farmers through appointment scheduling, emergency assistance, and location-based veterinary services.</p>
    </div>
  </div>
</section>



<section id="methodology" className="methodology">
  <div className="methodology-content">
    <div className="methodology-text">
      <h2>Methodology</h2>
      <p>
      The CattleSite system leverages machine learning, IoT, and centralized data management to improve cow health monitoring, disease detection, and veterinary services. It utilizes CNN and ResNet50 for disease classification and logistic regression for behavior-based health predictions. Real-time health data from IoT sensors is integrated with farm records in Firebase, analyzed using Random Forest Classifier to predict health risks and optimize nutrition, with insights displayed via a React-based dashboard
      <br></br>
      For milk production prediction, a Random Forest model analyzes historical data and environmental factors, providing real-time forecasts via a Python FastAPI backend. The system enhances veterinary communication using Google Maps and Places APIs to locate nearby clinics, NLP for vet recommendations, and Socket.io for real-time chat and appointment scheduling. Testing demonstrated 87.5% disease detection accuracy and 4.7% MAPE error in milk prediction, ensuring efficient cow care, predictive analytics, and streamlined veterinary services, ultimately improving dairy farm productivity.
      </p>
    </div>
    <div className="methodology-image">
      <img
        src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1741806320/cattle%20site/Untitled_Diagram_eurrmw.png" // Replace with your image URL
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
