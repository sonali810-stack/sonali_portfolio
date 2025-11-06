// components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card glass-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>sonali23810@gmail.com</p>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>+91-8368074050</p>
            </div>

            <a
              href="https://www.linkedin.com/in/sonali-srivastava-974819254/"
              target="_blank"
              rel="noopener noreferrer"
              className="info-card glass-card info-card-link"
            >
              <div className="info-icon">🔗</div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/sonalisrivastava</p>
            </a>

            <a
              href="https://github.com/sonali810-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="info-card glass-card info-card-link"
            >
              <div className="info-icon">💻</div>
              <h3>GitHub</h3>
              <p>github.com/sonali810-stack</p>
            </a>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <span className="button-arrow">→</span>
            </button>
          </form>
        </div>

        <footer className="footer">
          <p>© 2025 Sonali Srivastava. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
