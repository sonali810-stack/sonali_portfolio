// components/Hero.jsx
import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = ({ theme }) => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) {
      return undefined;
    }

    const updatePointer = (event) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--cursor-x", `${x}%`);
      section.style.setProperty("--cursor-y", `${y}%`);
    };

    window.addEventListener("pointermove", updatePointer);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = heroRef.current;
    if (!canvas || !section) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    let particles = [];
    let animationId;

    const setSize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };

    const createParticles = () => {
      const area = canvas.width * canvas.height;
      const targetCount = Math.max(24, Math.min(72, Math.floor(area / 18000)));
      particles = Array.from({ length: targetCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.4,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        alpha: 0.15 + Math.random() * 0.25,
      }));
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 205, 248, ${particle.alpha})`;
        ctx.fill();
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (theme === "dark") {
        drawParticles();
        animationId = window.requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      setSize();
      if (theme === "dark") {
        createParticles();
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    setSize();

    window.addEventListener("resize", handleResize);

    if (theme === "dark") {
      createParticles();
      animationId = window.requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, [theme]);

  return (
    <section className="hero" id="hero" ref={heroRef} data-theme={theme}>
      <canvas
        ref={canvasRef}
        className="hero-canvas"
        aria-hidden="true"
      ></canvas>
      <div className="hero-layer"></div>
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-pretitle">Full Stack Developer | CSE Student</p>
          <h1 className="hero-heading">
            Hi, I'm <span>Sonali Srivastava</span>
          </h1>
          <h2 className="hero-role">Full Stack Developer</h2>
          <p className="hero-summary">
            Full Stack Developer experienced in building responsive,
            user-friendly web and mobile applications using React.js, React
            Native, and Node.js. Skilled in designing clean interfaces,
            developing functional components, and collaborating in team-based
            projects.
          </p>
          <a
            className="hero-resume"
            href="https://drive.google.com/drive/folders/1_-eEBDthgkB1yIyP4hPVI4-4AhOk9ofp?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
