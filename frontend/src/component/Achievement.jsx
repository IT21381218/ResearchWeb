"use client"

import { useEffect, useRef, useState } from "react"
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa"
import { MdEmojiEvents } from "react-icons/md"
import "./styles/Achievement.css"

const Achievement = () => {
  const achievementRef = useRef(null)
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false)

  // Confetti function
  const createConfetti = () => {
    const confettiContainer = document.createElement("div")
    confettiContainer.className = "confetti-container"
    document.body.appendChild(confettiContainer)

    // Create multiple confetti pieces
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti-piece"

      // Random colors for confetti
      const colors = ["#f57702", "#28a745", "#17a2b8", "#ffc107", "#dc3545", "#6f42c1", "#20c997"]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]

      // Random shapes
      const shapes = ["square", "circle", "triangle"]
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)]

      confetti.style.backgroundColor = randomColor
      confetti.classList.add(randomShape)

      // Random starting position
      confetti.style.left = Math.random() * 100 + "%"
      confetti.style.animationDelay = Math.random() * 3 + "s"
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s"

      confettiContainer.appendChild(confetti)
    }

    // Remove confetti after animation
    setTimeout(() => {
      if (confettiContainer.parentNode) {
        confettiContainer.parentNode.removeChild(confettiContainer)
      }
    }, 5000)
  }

  useEffect(() => {
    const card = document.querySelector(".achievement-card")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")

            // Trigger confetti only once
            if (!hasTriggeredConfetti) {
              setTimeout(() => {
                createConfetti()
                setHasTriggeredConfetti(true)
              }, 800) // Delay to sync with card animation
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (card) observer.observe(card)

    return () => observer.disconnect()
  }, [hasTriggeredConfetti])

  return (
    <div className="achievement-container" ref={achievementRef}>
      <div className="achievement-content">
        <h1 className="achievement-title">Our Achievement</h1>

        <div className="achievement-showcase">
          <div className="achievement-card">
            <div className="achievement-header">
              <div className="achievement-icon">
                <FaTrophy />
              </div>
              <div className="achievement-status">
                <span className="status-badge selected">SELECTED</span>
              </div>
            </div>

            <div className="conference-image">
              <img
                src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1751106421/cattle%20site/Untitled-1_vcngjq.png"
                alt="SmartGenCon 2025 Conference"
                className="conference-img"
              />
              <div className="image-overlay">
                <MdEmojiEvents className="overlay-icon" />
              </div>
            </div>

            <div className="achievement-details">
              <h2 className="conference-name">SmartGenCon 2025</h2>
              <h3 className="conference-full-name">
                International Conference on Smart Generation Computing, Communication and Networking
              </h3>

              <p className="achievement-description">
                We are proud to announce that our research on{" "}
                <strong>"CattleSite: Integrated Veterinary Application for Enhanced Cow Health Management"</strong>
                has been selected for presentation at SmartGenCon 2025. This prestigious international conference
                focuses on cutting-edge smart technologies and computing innovations.
              </p>

              <div className="conference-info">
                <div className="info-item">
                  <FaCalendarAlt className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Conference Date</span>
                    <span className="info-value">11th Oct 2025</span>
                  </div>
                </div>

                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Event Type</span>
                    <span className="info-value">International Conference</span>
                  </div>
                </div>

                <div className="info-item">
                  <FaFileAlt className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Publication</span>
                    <span className="info-value">Research Paper Accepted</span>
                  </div>
                </div>
              </div>

              <div className="research-highlights">
                <h4>Research Highlights</h4>
                <ul>
                  <li>Advanced IoT sensor integration for real-time cattle health monitoring</li>
                  <li>Machine learning algorithms for predictive health analytics</li>
                  <li>Smart agriculture technology implementation</li>
                  <li>Innovative approach to livestock management systems</li>
                </ul>
              </div>

              <div className="achievement-footer">
                <div className="team-recognition">
                  <span className="recognition-text">
                    This achievement represents our team's dedication to advancing smart agriculture through technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement
