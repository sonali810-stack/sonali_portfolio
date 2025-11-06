// components/Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Software Intern - Aakar Technologies Pvt. Ltd.",
      period: "Sep 2025 - Present",
      description: "Developed Trinix's official company website with modern UI/UX using React.js. Built responsive web applications and implemented efficient frontend architecture.",
      skills: ["React.js", "UI/UX Design", "Responsive Design", "Frontend Architecture"]
    },
    {
      company: "React Developer Intern - Celebal Technologies",
      period: "June 2025 - July 2025",
      description: "Built React projects including Music App, Spotify Clone, and E-commerce Store. Used React Hooks, Context API, Redux, and Git for version control and deployment.",
      skills: ["React Hooks", "Context API", "Redux", "Git"]
    },
    {
      company: "Web Development Intern - Octanet Services Pvt. Ltd.",
      period: "Nov 2024 - Dec 2024",
      description: "Created a responsive landing page using HTML, CSS, and JavaScript with focus on clean design and UI/UX principles.",
      skills: ["HTML", "CSS", "JavaScript", "UI/UX"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-glow"></div>
              </div>
              
              <div className="experience-card glass-card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.company}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
