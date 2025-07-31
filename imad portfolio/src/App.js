import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
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
        <div className="edu-card">
          <img src="/images/st-martins-logo.jpeg" alt="St Martins" />
          <p>
            <b>BTech CSE (AI & ML)</b> - St. Martins Engineering College <br />
            2022-2026 | CGPA: 8.38
          </p>
        </div>
        <div className="edu-card">
          <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya" />
          <p>
            <b>Intermediate</b> - Sri Chaitanya Jr. College <br />
            2020-2022 | Percentage: 94.4%
          </p>
        </div>
        <div className="edu-card">
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

        {/* Twitter Bots */}
        <div className="project-card">
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

        {/* Smart Parking */}
        <div className="project-card">
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

        {/* Electronic Signature */}
        <div className="project-card">
          <img
            src="/images/electronic-signature.png"
            alt="Electronic Signature"
          />
          <h3>Electronic Signature</h3>
          <ul>
            <li>Lightweight web app to create and download digital signatures.</li>
            <li>Built using HTML, CSS & JavaScript for a smooth canvas experience.</li>
            <li>Download signature as image file instantly.</li>
          </ul>
          <div className="badges">
            <a
              href="https://electronic-signature.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="badge clickable"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/mohammed-imad-umar/Electronic_Signature-"
              target="_blank"
              rel="noreferrer"
              className="badge clickable"
            >
              GitHub Link
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

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Mohammed Imad Umar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
