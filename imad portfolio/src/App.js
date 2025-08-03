import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [activeEdu, setActiveEdu] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-circle blink">
          <img src="/profile-photo.jpeg" alt="Profile" className="loader-img" />
        </div>
        <p className="loader-text blink">Loading Portfolio…</p>
      </div>
    );
  }

  return (
    <div className="App">

      {/* ===== Hero Section ===== */}
      <section className="landing">
        <img src="/profile-photo.jpeg" alt="bg" className="bg-img" />
        <div className="landing-text">
          <h1>Hello, I'm Imad Umar</h1>
          <p>Passionate CSE (AI & ML) Student | Building Intelligent Solutions</p>
          <div className="social-links">
            <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noreferrer">
              <img src="/github-logo.jpeg" alt="GitHub" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="/linkedin-logo.jpeg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== About Me ===== */}
      <section className="about">
        <h2>About Me</h2>
        <img src="/cover.jpeg" alt="Cover" className="cover-img" />
        <div className="about-text">
          <p>
            I am a dedicated CSE (AI & ML) student passionate about creating
            innovative solutions that leverage the power of technology to solve
            real-world problems. My focus lies in developing intelligent systems
            that combine efficiency with user-centric design.
          </p>
          <p>
            With hands-on experience in machine learning, full-stack
            development, and IoT applications, I aim to contribute to projects
            that push the boundaries of innovation. My ultimate goal is to build
            impactful tools that make a difference in everyday life.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="cv-btn">
            View CV
          </a>
        </div>
      </section>

      {/* ===== Education ===== */}
      <section className="education">
        <h2>Education</h2>
        <div className="edu-grid">
          <div className="edu-card" onClick={() => setActiveEdu(activeEdu === 1 ? null : 1)}>
            <img src="/st-francis-logo.jpeg" alt="B.Tech" />
            {activeEdu === 1 && (
              <div className="edu-overlay">
                <p>B.Tech in CSE (AI & ML)</p>
                <p>2021 - 2025</p>
                <p>CGPA: 8.7</p>
              </div>
            )}
          </div>
          <div className="edu-card" onClick={() => setActiveEdu(activeEdu === 2 ? null : 2)}>
            <img src="/st-martins-logo.jpeg" alt="Intermediate" />
            {activeEdu === 2 && (
              <div className="edu-overlay">
                <p>Intermediate MPC</p>
                <p>2019 - 2021</p>
                <p>Percentage: 95%</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">

          {/* College Companion */}
          <div className="project-card" onClick={() => setActiveProject(activeProject === 1 ? null : 1)}>
            <img src="/college-companion.jpeg" alt="College Companion" />
            {activeProject === 1 && (
              <div className="project-overlay">
                <div className="ats-points">
                  <p>📌 Smart notes & resources sharing</p>
                  <p>📌 Interactive UI for students</p>
                  <p>📌 Cloud-based storage</p>
                </div>
                <div className="badges">
                  <a href="https://college-companion-by-imad.netlify.app/" target="_blank" rel="noreferrer" className="badge live">🚀 Live Demo</a>
                  <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank" rel="noreferrer" className="badge github">GitHub</a>
                </div>
              </div>
            )}
          </div>

          {/* Electronic Signature */}
          <div className="project-card" onClick={() => setActiveProject(activeProject === 2 ? null : 2)}>
            <img src="/electronic-signature.png" alt="Electronic Signature" />
            {activeProject === 2 && (
              <div className="project-overlay">
                <div className="ats-points">
                  <p>📌 Secure digital signature system</p>
                  <p>📌 User-friendly canvas integration</p>
                  <p>📌 Saves and verifies e-signatures</p>
                </div>
                <div className="badges">
                  <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-" target="_blank" rel="noreferrer" className="badge github">GitHub</a>
                  <a href="https://electronic-signature-demo.netlify.app/" target="_blank" rel="noreferrer" className="badge live">🚀 Live Demo</a>
                </div>
              </div>
            )}
          </div>

          {/* Smart Parking */}
          <div className="project-card" onClick={() => setActiveProject(activeProject === 3 ? null : 3)}>
            <img src="/smart-parking-project.png" alt="Smart Parking" />
            {activeProject === 3 && (
              <div className="project-overlay">
                <div className="ats-points">
                  <p>📌 Real-time parking management</p>
                  <p>📌 IoT integration for slot detection</p>
                  <p>📌 Android + Full-Stack solution</p>
                </div>
                <div className="badges">
                  <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" rel="noreferrer" className="badge github">GitHub</a>
                </div>
              </div>
            )}
          </div>

          {/* Detecting Twitter Bots */}
          <div className="project-card" onClick={() => setActiveProject(activeProject === 4 ? null : 4)}>
            <img src="/twitter-bots-project.png" alt="Twitter Bots" />
            {activeProject === 4 && (
              <div className="project-overlay">
                <div className="ats-points">
                  <p>📌 ML model to detect bots</p>
                  <p>📌 Analyzes Twitter metadata</p>
                  <p>📌 Python + Sklearn pipeline</p>
                </div>
                <div className="badges">
                  <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" rel="noreferrer" className="badge github">GitHub</a>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ===== Contact ===== */}
      <section className="contact">
        <h2>Contact</h2>
        <p>📧 Email: imadu1525@gmail.com</p>
        <p>📱 Phone: 8919023402</p>
      </section>

      {/* ===== Footer ===== */}
      <footer>
        <p>© 2025 Imad Umar. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;