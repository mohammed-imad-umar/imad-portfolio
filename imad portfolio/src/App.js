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
        <div className="loader-circle">
          <img src="/profile-photo.jpeg" alt="Loading" className="loader-img blink" />
        </div>
        <p className="loader-text blink">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* ✅ Hero Section */}
      <section className="hero">
        <img src="/profile-photo.jpeg" alt="Background" className="hero-bg" />
        <div className="hero-content">
          <h1>Hello, I'm Imad Umar</h1>
          <p>Crafting seamless digital experiences with code and creativity.</p>
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

      {/* ✅ About Me */}
      <section className="about">
        <h2>About Me</h2>
        <img src="/cover.jpeg" alt="Cover" className="cover-img" />
        <p>
          I am a passionate developer with a strong focus on creating scalable, 
          user-friendly applications. My expertise lies in full-stack development, 
          leveraging modern frameworks and technologies to build efficient solutions.
        </p>
        <p>
          With a background in AI & ML, I love integrating intelligent systems into 
          practical software. My goal is to bridge innovation and usability in every project.
        </p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn">View CV</a>
      </section>

      {/* ✅ Education */}
      <section className="education">
        <h2>Education</h2>
        <div className="edu-card">
          <img src="/st-francis-logo.jpeg" alt="BTech" />
          <div className="overlay">
            <p>B.Tech CSE (AI & ML)</p>
            <p>2021 - 2025 | 8.6 CGPA</p>
          </div>
        </div>
        <div className="edu-card">
          <img src="/st-martins-logo.jpeg" alt="Intermediate" />
          <div className="overlay">
            <p>Intermediate MPC</p>
            <p>2019 - 2021 | 94%</p>
          </div>
        </div>
      </section>

      {/* ✅ Projects */}
      <section className="projects">
        <h2>Projects</h2>

        {/* College Companion */}
        <div className="project-card">
          <img src="/college-companion.jpeg" alt="College Companion" />
          <div className="project-overlay">
            <div className="project-points">
              <p>📌 Built a full-stack platform for students to manage academic resources efficiently.</p>
              <p>📌 Integrated real-time collaboration and secure authentication.</p>
              <p>📌 Responsive UI for seamless usage across devices.</p>
            </div>
            <div className="project-links">
              <a href="https://college-companion-by-imad.netlify.app/" target="_blank" rel="noreferrer" className="live-demo">🚀 Live Demo</a>
              <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank" rel="noreferrer" className="github-badge">GitHub</a>
            </div>
          </div>
        </div>

        {/* Electronic Signature */}
        <div className="project-card">
          <img src="/electronic-signature.png" alt="Electronic Signature" />
          <div className="project-overlay">
            <div className="project-points">
              <p>📌 Developed a secure electronic signature platform.</p>
              <p>📌 Integrated encryption for signature authenticity.</p>
              <p>📌 Designed for businesses to streamline document signing.</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-" target="_blank" rel="noreferrer" className="github-badge">GitHub</a>
            </div>
          </div>
        </div>

        {/* Smart Parking */}
        <div className="project-card">
          <img src="/smart-parking-project.png" alt="Smart Parking" />
          <div className="project-overlay">
            <div className="project-points">
              <p>📌 Created an IoT-based smart parking solution with real-time slot tracking.</p>
              <p>📌 Backend built with Node.js, frontend optimized for mobile.</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" rel="noreferrer" className="github-badge">GitHub</a>
            </div>
          </div>
        </div>

        {/* Detecting Twitter Bots */}
        <div className="project-card">
          <img src="/twitter-bots-project.png" alt="Twitter Bots" />
          <div className="project-overlay">
            <div className="project-points">
              <p>📌 Developed ML model to identify Twitter bots based on user behavior.</p>
              <p>📌 Utilized Python, Scikit-learn, and Flask for deployment.</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" rel="noreferrer" className="github-badge">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact */}
      <section className="contact">
        <h2>Contact</h2>
        <p>📧 Email: <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:8919023402">8919023402</a></p>
      </section>

      <footer>
        <p>© 2025 Imad Umar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;