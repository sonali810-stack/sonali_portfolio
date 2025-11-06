// components/Projects.jsx
import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Eventify Website",
      period: "Sep 2025",
      description:
        "Responsive event management platform with interactive event listings, authentication-ready flows, and dashboard UI crafted in React.",
      tech: ["React.js", "Framer Motion", "Custom Hooks", "Dashboard UI"],
      category: "Web Application",
      github: "https://github.com/sonali810-stack/eventify",
      live: "https://eventifyweb.netlify.app/",
    },
    {
      title: "Campus Cravings",
      period: "Jan 2024 - Apr 2024",
      description:
        "Campus canteen ordering experience with responsive menus, item filtering, and cart flow tailored for student use.",
      tech: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
      category: "Web Application",
      github: "https://github.com/sonali810-stack/campus-cravings-project",
      live: "https://campus-craving.netlify.app/",
    },
    {
      title: "Eventify App",
      period: "Oct 2025",
      description:
        "Cross-platform mobile companion for Eventify with smooth navigation patterns, native theming, and offline-first architecture.",
      tech: ["React Native", "Expo", "React Navigation", "State Machines"],
      category: "Mobile App",
      github: "https://github.com/sonali810-stack/eventify_mobile",
    },
    {
      title: "NutruPlant",
      period: "Sep 2024 - Oct 2024",
      description:
        "Plant disease detection assistant integrating ML APIs to recognise leaf issues and surface curated treatments in real time.",
      tech: ["HTML", "CSS", "JavaScript", "REST APIs"],
      category: "Web Application",
      github: "https://github.com/sonali810-stack/NutruPlant-Website",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card glass-card ${
                activeProject === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
              onFocus={() => setActiveProject(index)}
              onBlur={() => setActiveProject(null)}
              tabIndex={0}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className="project-period">{project.period}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} source code on GitHub`}
                  >
                    <span>GitHub</span>
                  </a>
                )}
                {project.live && (
                  <a
                    className="project-link project-link--primary"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live demo`}
                  >
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <div className="project-overlay">
                <div className="holographic-shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
