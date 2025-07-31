import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for fade-in
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <img src="/images/profile-photo.jpeg" alt="Profile" className="loader-img" />
        <h2 className="loader-text">Imad's Portfolio Loading...</h2>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Mohammed Imad Umar</h1>
        <p>Computer Science & Engineering (AI & ML)</p>
      </header>

      {/* About */}
      <section id="about" className={`about fade-section ${visibleSections["about"] ? "show" : ""}`}>
        <img
          src="/images/profile-photo.jpeg"
          alt="Profile"
          className="profile-img"
          onClick={() => setModalImage("/images/profile-photo.jpeg")}
        />
        <h2>About Me</h2>
        <p>
          Hello! I'm Mohammed Imad Umar, a passionate Computer Science and
          Engineering (AI & ML) student. Skilled in Java, Python, HTML, CSS,
          JavaScript, and MySQL. I enjoy building practical, user-friendly web
          apps and contributing to innovative projects.
        </p>
      </section>

      {/* Education */}
      <section id="education" className={`education fade-section ${visibleSections["education"] ? "show" : ""}`}>
        <h2>Education</h2>
        <div className="edu-card" onClick={() => setModalImage("/images/st-martins-logo.jpeg")}>
          <img src="/images/st-martins-logo.jpeg" alt="St Martins" className="thumb" />
          <p><b>BTech CSE (AI & ML)</b> - St. Martins Engineering College <br /> 2022-2026 | CGPA: 8.38</p>
        </div>
        <div className="edu-card" onClick={() => setModalImage("/images/chaitanya-logo.jpeg")}>
          <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya" className="thumb" />
          <p><b>Intermediate</b> - Sri Chaitanya Jr. College <br /> 2020-2022 | Percentage: 94.4%</p>
        </div>
        <div className="edu-card" onClick={() => setModalImage("/images/st-francis-logo.jpeg")}>
          <img src="/images/st-francis-logo.jpeg" alt="St Francis" className="thumb" />
          <p><b>High School</b> - St. Francis De Sales High School <br /> 2020 | Grade: 10.0</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={`skills fade-section ${visibleSections["skills"] ? "show" : ""}`}>
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
      <section id="projects" className={`projects fade-section ${visibleSections["projects"] ? "show" : ""}`}>
        <h2>Projects</h2>

        <div className="project-card" onClick={() => setModalImage("/images/twitter-bots-project.png")}>
          <img src="/images/twitter-bots-project.png" alt="Twitter Bots" className="thumb" />
          <h3>Detecting Malicious Twitter Bots</h3>
          <ul>
            <li>Built ML model with 74% accuracy to classify bots.</li>
            <li>Used NLP & tweet frequency features for detection.</li>
            <li>Developed Tkinter GUI for real-time predictions.</li>
          </ul>
          <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" rel="noreferrer" className="link-btn">
            GitHub Link
          </a>
        </div>

        <div className="project-card" onClick={() => setModalImage("/images/smart-parking-project.png")}>
          <img src="/images/smart-parking-project.png" alt="Smart Parking System" className="thumb" />
          <h3>Smart Parking System</h3>
          <ul>
            <li>IoT-based parking system with Android + Node.js.</li>
            <li>Integrated GPS & sensors to reduce search time by 40%.</li>
            <li>Built secure REST APIs for authentication & payments.</li>
          </ul>
          <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" rel="noreferrer" className="link-btn">
            GitHub Link
          </a>
        </div>

        <div className="project-card" onClick={() => setModalImage("/images/electronic-signature.png")}>
          <img src="/images/electronic-signature.png" alt="Electronic Signature" className="thumb" />
          <h3>Electronic Signature</h3>
          <ul>
            <li>Lightweight web app to draw and download digital signatures.</li>
            <li>Built using HTML, CSS, and JavaScript.</li>
          </ul>
          <div className="badge-links">
            <a href="https://mohammed-imad-umar.github.io/Electronic_Signature-/" target="_blank" rel="noreferrer" className="badge clickable">Live Demo</a>
            <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-" target="_blank" rel="noreferrer" className="badge clickable">GitHub Link</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`contact fade-section ${visibleSections["contact"] ? "show" : ""}`}>
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

      {/* Modal */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Enlarged" className="modal-content" />
        </div>
      )}
    </div>
  );
}

export default App;
