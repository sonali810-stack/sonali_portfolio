import React, { useEffect, useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ theme = "dark", onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    NAV_LINKS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
      <div className="navbar__container">
        <a
          className="navbar__brand"
          href="#hero"
          onClick={() => handleNavClick("hero")}
        >
          Sonali's <span>Portfolio</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
        >
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-label">Menu</span>
        </button>

        <nav
          id="site-navigation"
          className="navbar__links"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${
                activeSection === link.id ? "is-active" : ""
              }`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__theme-toggle"
          onClick={() => {
            onToggleTheme?.();
            setIsMenuOpen(false);
          }}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          aria-pressed={theme === "light"}
        >
          <span className="navbar__theme-icon" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
