import React from "react";
import "./Education.css";

const educationHistory = [
  {
    institution: "Bennett University, Greater Noida",
    period: "2022 – 2026",
    qualification: "B.Tech in Computer Science and Engineering",
    result: "CGPA: 7.8/10 (till 5th semester)",
  },
  {
    institution: "Sun Valley International School",
    period: "2021 – 2022",
    qualification: "12th CBSE",
    result: "Percentage: 65%",
  },
  {
    institution: "Sun Valley International School",
    period: "2019 – 2020",
    qualification: "10th CBSE",
    result: "Percentage: 82%",
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="education-timeline">
          {educationHistory.map((item) => (
            <article
              key={`${item.institution}-${item.period}`}
              className="education-card glass-card"
            >
              <div className="education-card__header">
                <h3 className="education-card__institution">
                  {item.institution}
                </h3>
                <span className="education-card__period">{item.period}</span>
              </div>
              <p className="education-card__qualification">
                {item.qualification}
              </p>
              <p className="education-card__result">{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
