import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./styles/CountUpSection.css";

const CountUpSection = () => {
  const [startCount, setStartCount] = useState(false); // State to control when to start count-up
  const sectionRef = useRef(null); // Reference to the section

  const totalCattle = 1122370; // Total cattle population in Sri Lanka
  const cattleDiseases = 5761; // Number of cattle diseases reported annually
  const cattleDeaths = 2563; // Number of cattle deaths annually
  const deathPercentage = ((cattleDeaths / totalCattle) * 100).toFixed(2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true); // Start count-up when section is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="countup-section" ref={sectionRef}>
      <h1 className="countup-title">
        Cattle Statistics in <span className="highlight">Sri Lanka</span>
      </h1>
      <div className="countup-container">
        <div className="countup-card">
          <h2>Total Cattle Diseases</h2>
          {startCount && (
            <CountUp
              start={0}
              end={cattleDiseases}
              duration={2.5}
              separator=","
              className="countup-number"
            />
          )}
          <p>Reported annually</p>
        </div>
        <div className="countup-card">
          <h2>Total Cattle Deaths</h2>
          {startCount && (
            <CountUp
              start={0}
              end={cattleDeaths}
              duration={2.5}
              separator=","
              className="countup-number"
            />
          )}
          <p>Reported annually</p>
        </div>
        <div className="countup-card">
          <h2>Cattle Death Percentage</h2>
          {startCount && (
            <CountUp
              start={0}
              end={deathPercentage}
              duration={2.5}
              decimals={2}
              suffix="%"
              className="countup-number"
            />
          )}
          <p>Out of total cattle population</p>
        </div>
      </div>
    </div>
  );
};

export default CountUpSection;
