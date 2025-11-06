// components/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-media">
            <div className="about-photo-frame">
              <span className="about-photo-spotlight" aria-hidden="true"></span>
              <img
                className="about-photo"
                src="/myphoto.jpg"
                alt="Sonali Srivastava"
              />
              <span className="about-photo-border" aria-hidden="true"></span>
            </div>
          </div>

          <div className="glass-card about-panel">
            <p className="about-description">
              I am a detail-oriented full stack developer focused on creating
              accessible, high-performance web and mobile applications. My
              toolkit spans React.js, React Native, and Node.js, and I love
              translating complex requirements into intuitive, user-first
              experiences.
            </p>
            <p className="about-description">
              Currently, I am pursuing a B.Tech in Computer Science and
              Engineering at Bennett University (CGPA 7.8/10, till 5th semester)
              while collaborating with teams to ship products that balance
              thoughtful design and robust engineering.
            </p>

            <div className="about-links">
              <a
                className="about-link"
                href="https://www.linkedin.com/in/sonali-srivastava-974819254/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="about-link"
                href="https://github.com/sonali810-stack"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
