// components/Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "C++", "C", "DSA", "OOPs"]
    },
    {
      category: "Frameworks/Libraries",
      skills: ["React.js", "React Native", "Node.js", "AngularJS", "Bootstrap"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Responsive Design", "REST APIs"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-card">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-progress"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
