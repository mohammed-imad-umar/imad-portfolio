import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-circle blink">
          <img
            src="/images/profile-photo.jpeg"
            alt="Profile"
            className="loader-img"
          />
        </div>
        <p className="loader-text blink">Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="/images/profile-photo.jpeg"
          alt="Profile"
          className="hero-bg"
        />
        <div className="hero-content">
          <h1>Hello, I am <span>Imad Umar</span></h1>
          <p className="tagline">A passionate developer crafting intelligent solutions</p>
          <div className="social-links">
            <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noreferrer">
              <img src="/images/github-logo.jpeg" alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/mohammed-imad-umar" target="_blank" rel="noreferrer">
              <img src="/images/linkedin-logo.jpeg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <img src="/images/cover.jpeg" alt="Cover" className="cover-photo" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a Computer Science student specializing in AI & ML, with a strong passion
            for developing intelligent and user-centric solutions. My expertise lies in
            full-stack development and machine learning, focusing on building scalable
            and impactful applications.
          </p>
          <p>
            Alongside my academic journey, I have worked on multiple real-world projects,
            honing my skills in problem-solving, data structures, and clean software
            architecture. I aim to combine creativity with technology to deliver premium
            digital experiences.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            View CV
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <div className="edu-grid">
          <div className="edu-card">
            <img src="/images/st-francis-logo.jpeg" alt="College" />
            <div className="edu-overlay">
              <p className="year">2021 - 2025</p>
              <p>B.Tech in CSE (AI & ML)</p>
              <p className="grade">Grade: 8.7 CGPA</p>
            </div>
          </div>
          <div className="edu-card">
            <img src="/images/st-martins-logo.jpeg" alt="Intermediate" />
            <div className="edu-overlay">
              <p className="year">2019 - 2021</p>
              <p>Intermediate MPC</p>
              <p className="grade">Grade: 95%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>

        {/* College Companion */}
        <div className="project-card">
          <img src="/images/college-companion.jpeg" alt="College Companion" />
          <div className="project-overlay">
            <div className="ats-points">
              <p>📌 Full-stack app for student resource management</p>
              <p>📌 Real-time updates with Firebase</p>
              <p>📌 Clean UI with responsive design</p>
            </div>
            <div className="project-links">
              <a href="https://college-companion-by-imad.netlify.app/" target="_blank" rel="noreferrer" className="live-demo">🚀 Live Demo</a>
              <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank" rel="noreferrer" className="github-link">GitHub</a>
            </div>
          </div>
        </div>

        {/* Electronic Signature */}
        <div className="project-card">
          <img src="/images/electronic-signature.png" alt="Electronic Signature" />
          <div className="project-overlay">
            <div className="ats-points">
              <p>📌 Digital signature creation & verification</p>
              <p>📌 Secure hash algorithms for integrity</p>
              <p>📌 Simple & clean UI</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-" target="_blank" rel="noreferrer" className="github-link">GitHub</a>
              <a href="#" target="_blank" rel="noreferrer" className="live-demo">🚀 Live Demo</a>
            </div>
          </div>
        </div>

        {/* Smart Parking System */}
        <div className="project-card">
          <img src="/images/smart-parking-project.png" alt="Smart Parking" />
          <div className="project-overlay">
            <div className="ats-points">
              <p>📌 IoT-enabled smart parking solution</p>
              <p>📌 Real-time slot detection</p>
              <p>📌 Integrated mobile app</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" rel="noreferrer" className="github-link">GitHub</a>
            </div>
          </div>
        </div>

        {/* Detecting Twitter Bots */}
        <div className="project-card">
          <img src="/images/twitter-bots-project.png" alt="Twitter Bots" />
          <div className="project-overlay">
            <div className="ats-points">
              <p>📌 Machine learning model to detect bots</p>
              <p>📌 Feature engineering for accuracy</p>
              <p>📌 Detailed analytics dashboard</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" rel="noreferrer" className="github-link">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>📧 imadu1525@gmail.com</p>
        <p>📱 8919023402</p>
      </section>

      <footer>
        <p>© 2025 Imad Umar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;