import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Show loader first
  if (loading) {
    return (
      <div className="loader">
        <img src="/images/profile-photo.jpeg" alt="Profile" className="loader-img" />
        <p className="loader-text">Imad's Portfolio Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Modal for tap-to-view */}
      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Enlarged" className="modal-content" />
        </div>
      )}

      {/* Header */}
      <header className="header fade-section">
        <h1>Mohammed Imad Umar</h1>
        <p>Computer Science & Engineering (AI & ML)</p>
      </header>

      {/* About Section */}
      <section className="about fade-section">
        <img
          src="/images/profile-photo.jpeg"
          alt="Profile"
          className="profile-img"
          onClick={() => setModalImg("/images/profile-photo.jpeg")}
        />
        <h2>About Me</h2>
        <p>
          Hello! I'm Mohammed Imad Umar, a passionate Computer Science and Engineering (AI & ML)
          student. Skilled in Java, Python, HTML, CSS, JavaScript, and MySQL.
        </p>
      </section>

      {/* Education */}
      <section className="education fade-section">
        <h2>Education</h2>
        <div className="edu-card" onClick={() => setModalImg("/images/st-martins-logo.jpeg")}>
          <img src="/images/st-martins-logo.jpeg" alt="St Martins" className="thumb" />
          <p><b>BTech CSE (AI & ML)</b> - St. Martins Engineering College <br/> 2022-2026 | CGPA: 8.38</p>
        </div>
        <div className="edu-card" onClick={() => setModalImg("/images/chaitanya-logo.jpeg")}>
          <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya" className="thumb" />
          <p><b>Intermediate</b> - Sri Chaitanya Jr. College <br/> 2020-2022 | Percentage: 94.4%</p>
        </div>
        <div className="edu-card" onClick={() => setModalImg("/images/st-francis-logo.jpeg")}>
          <img src="/images/st-francis-logo.jpeg" alt="St Francis" className="thumb" />
          <p><b>High School</b> - St. Francis De Sales High School <br/> 2020 | Grade: 10.0</p>
        </div>
      </section>

      {/* Skills */}
      <section className="skills fade-section">
        <h2>Skills</h2>
        <div className="badges">
          <span className="badge">Java</span>
          <span className="badge">Python</span>
          <span className="badge">HTML</span>
          <span className="badge">CSS</span>
          <span className="badge">JavaScript</span>
          <span className="badge">MySQL</span>
          <span className="badge">C</span>
          <span className="badge">AI & ML</span>
        </div>
      </section>

      {/* Projects */}
      <section className="projects fade-section">
        <h2>Projects</h2>

        <div className="project-card" onClick={() => setModalImg("/images/twitter-bots-project.png")}>
          <img src="/images/twitter-bots-project.png" alt="Twitter Bots" className="thumb"/>
          <h3>Detecting Malicious Twitter Bots</h3>
          <ul>
            <li>ML model with 74% accuracy.</li>
            <li>Used NLP & tweet frequency.</li>
          </ul>
          <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots"
             target="_blank" rel="noreferrer" className="link-btn">GitHub Link</a>
        </div>

        <div className="project-card" onClick={() => setModalImg("/images/smart-parking-project.png")}>
          <img src="/images/smart-parking-project.png" alt="Smart Parking" className="thumb"/>
          <h3>Smart Parking System</h3>
          <ul>
            <li>IoT-based system with Android + Node.js.</li>
          </ul>
          <a href="https://github.com/mohammed-imad-umar/smart-parking-system"
             target="_blank" rel="noreferrer" className="link-btn">GitHub Link</a>
        </div>

        {/* Signature Project */}
        <div className="project-card" onClick={() => setModalImg("/images/electronic-signature.png")}>
          <img src="/images/electronic-signature.png" alt="Electronic Signature" className="thumb"/>
          <h3>Electronic Signature App</h3>
          <ul>
            <li>Draw & download digital signatures.</li>
            <li>Built with HTML, CSS, JS.</li>
          </ul>
          <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-"
             target="_blank" rel="noreferrer" className="link-btn">GitHub Link</a>
          <a href="https://mohammed-imad-umar-electronic-signature.netlify.app"
             target="_blank" rel="noreferrer" className="badge clickable">Live Demo</a>
        </div>
      </section>

      {/* Contact */}
      <section className="contact fade-section">
        <h2>Get in Touch</h2>
        <div className="badges">
          <a href="https://linkedin.com/in/mohammed-imad-umar" target="_blank" rel="noreferrer" className="badge clickable">LinkedIn</a>
          <a href="https://leetcode.com/mohammed_imad_umar" target="_blank" rel="noreferrer" className="badge clickable">LeetCode</a>
          <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noreferrer" className="badge clickable">GitHub</a>
          <a href="mailto:imadu1525@gmail.com" className="badge clickable">Email</a>
          <a href="/images/resume.pdf" target="_blank" rel="noreferrer" className="badge clickable">Resume</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Mohammed Imad Umar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
