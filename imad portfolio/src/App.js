import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

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
          className="profile-img clickable"
          onClick={() => openImage("/images/profile-photo.jpeg")}
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
          <img
            src="/images/st-martins-logo.jpeg"
            alt="St Martins"
            className="clickable"
            onClick={() => openImage("/images/st-martins-logo.jpeg")}
          />
          <p>
            <b>BTech CSE (AI & ML)</b> - St. Martins Engineering College <br />
            2022-2026 | CGPA: 8.38
          </p>
        </div>
        <div className="edu-card">
          <img
            src="/images/chaitanya-logo.jpeg"
            alt="Sri Chaitanya"
            className="clickable"
            onClick={() => openImage("/images/chaitanya-logo.jpeg")}
          />
          <p>
            <b>Intermediate</b> - Sri Chaitanya Jr. College <br />
            2020-2022 | Percentage: 94.4%
          </p>
        </div>
        <div className="edu-card">
          <img
            src="/images/st-francis-logo.jpeg"
            alt="St Francis"
            className="clickable"
            onClick={() => openImage("/images/st-francis-logo.jpeg")}
          />
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
        <div className="project-card">
          <img
            src="/images/twitter-bots-project.png"
            alt="Twitter Bots"
            className="clickable"
            onClick={() => openImage("/images/twitter-bots-project.png")}
          />
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

        <div className="project-card">
          <img
            src="/images/smart-parking-project.png"
            alt="Smart Parking System"
            className="clickable"
            onClick={() => openImage("/images/smart-parking-project.png")}
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

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <img src={selectedImage} alt="Full View" className="modal-img" />
        </div>
      )}
    </div>
  );
}

export default App;
