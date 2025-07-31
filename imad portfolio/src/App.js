import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [zoomedImg, setZoomedImg] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-circle"></div>
        <p className="loading-text">Imad's Portfolio Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {zoomedImg && (
        <div className="image-popup" onClick={() => setZoomedImg(null)}>
          <img src={zoomedImg} alt="Zoomed" className="popup-img" />
        </div>
      )}

      {/* Header */}
      <header className="header">
        <h1>Mohammed Imad Umar</h1>
        <p>Computer Science & Engineering (AI & ML)</p>
      </header>

      {/* About Section */}
      <section className="about">
        <img
          src="/images/profile-photo.jpeg"
          alt="Profile"
          className="profile-img"
          onClick={() => setZoomedImg("/images/profile-photo.jpeg")}
        />
        <h2>About Me</h2>
        <p>
          Hello! I'm Mohammed Imad Umar, a passionate Computer Science and
          Engineering (AI & ML) student. Skilled in Java, Python, HTML, CSS,
          JavaScript, and MySQL. I enjoy building practical, user-friendly web
          apps and contributing to innovative projects.
        </p>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <div
          className="edu-card"
          onClick={() => setZoomedImg("/images/st-martins-logo.jpeg")}
        >
          <img src="/images/st-martins-logo.jpeg" alt="St Martins" />
          <p>
            <b>BTech CSE (AI & ML)</b> - St. Martins Engineering College <br />
            2022-2026 | CGPA: 8.38
          </p>
        </div>
        <div
          className="edu-card"
          onClick={() => setZoomedImg("/images/chaitanya-logo.jpeg")}
        >
          <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya" />
          <p>
            <b>Intermediate</b> - Sri Chaitanya Jr. College <br />
            2020-2022 | Percentage: 94.4%
          </p>
        </div>
        <div
          className="edu-card"
          onClick={() => setZoomedImg("/images/st-francis-logo.jpeg")}
        >
          <img src="/images/st-francis-logo.jpeg" alt="St Francis" />
          <p>
            <b>High School</b> - St. Francis De Sales High School <br />
            2020 | Grade: 10.0
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
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

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div
          className="project-card"
          onClick={() => setZoomedImg("/images/twitter-bots-project.png")}
        >
          <img src="/images/twitter-bots-project.png" alt="Twitter Bots" />
          <h3>Detecting Malicious Twitter Bots</h3>
          <ul>
            <li>Built ML model with 74% accuracy to classify bots.</li>
            <li>Used NLP & tweet frequency features for detection.</li>
            <li>Developed Tkinter GUI for real-time predictions.</li>
          </ul>
          <a
            href="https://github.com/mohammed-imad-umar/detecting-twitter-bots"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            GitHub Link
          </a>
        </div>

        <div
          className="project-card"
          onClick={() => setZoomedImg("/images/smart-parking-project.png")}
        >
          <img
            src="/images/smart-parking-project.png"
            alt="Smart Parking System"
          />
          <h3>Smart Parking System</h3>
          <ul>
            <li>Developed IoT-based parking system with Android + Node.js.</li>
            <li>Integrated GPS & sensors to reduce search time by 40%.</li>
            <li>Built secure REST APIs for authentication & payments.</li>
          </ul>
          <a
            href="https://github.com/mohammed-imad-umar/smart-parking-system"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            GitHub Link
          </a>
        </div>

        {/* ✅ Electronic Signature Project */}
        <div
          className="project-card"
          onClick={() => setZoomedImg("/images/electronic-signature.png")}
        >
          <img
            src="/images/electronic-signature.png"
            alt="Electronic Signature"
          />
          <h3>Electronic Signature App</h3>
          <ul>
            <li>Draw digital signatures easily on a canvas.</li>
            <li>Download your signature as an image file.</li>
            <li>Lightweight web app built with HTML, CSS & JS.</li>
          </ul>
          <div className="project-buttons">
            <a
              href="https://github.com/mohammed-imad-umar/Electronic_Signature-"
              target="_blank"
              rel="noreferrer"
              className="link-btn"
            >
              GitHub Link
            </a>
            <a
              href="https://your-electronic-signature.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="live-demo-btn"
            >
              🚀 Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <div className="badges">
          <a
            href="https://linkedin.com/in/mohammed-imad-umar"
            target="_blank"
            rel="noreferrer"
            className="badge clickable"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/mohammed_imad_umar"
            target="_blank"
            rel="noreferrer"
            className="badge clickable"
          >
            LeetCode
          </a>
          <a
            href="https://github.com/mohammed-imad-umar"
            target="_blank"
            rel="noreferrer"
            className="badge clickable"
          >
            GitHub
          </a>
          <a href="mailto:imadu1525@gmail.com" className="badge clickable">
            Email
          </a>
          <a
            href="/images/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="badge clickable"
          >
            Resume
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Mohammed Imad Umar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
