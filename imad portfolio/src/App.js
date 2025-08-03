import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [modalImg, setModalImg] = useState(null);
  const [modalPoints, setModalPoints] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (img, points = []) => {
    setModalImg(img);
    setModalPoints(points);
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <img src="/images/profile-photo.jpeg" alt="Profile" className="loader-img" />
          <p className="loader-text">
            <span className="typing">Imad's Portfolio Loading...</span>
          </p>
        </div>
      ) : (
        <div className="app">
          {/* Modal */}
          {modalImg && (
            <div className="modal" onClick={() => setModalImg(null)}>
              <img src={modalImg} alt="Enlarged" className="modal-content" />
              <div className="modal-points">
                {modalPoints.map((point, i) => (
                  <p key={i} className="point" style={{ animationDelay: `${i * 0.4}s` }}>
                    {point}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Header */}
          <header className="header">
            <div className="header-content">
              <h1>Mohammed Imad Umar</h1>
              <p>Computer Science & Engineering (AI & ML)</p>
            </div>
          </header>

          {/* About */}
          <section className="about section">
            <div className="about-content">
              <img
                src="/images/profile-photo.jpeg"
                alt="Profile"
                className="profile-img"
                onClick={() => openModal("/images/profile-photo.jpeg")}
              />
              <div>
                <h2>About Me</h2>
                <p>
                  Hello! I'm Mohammed Imad Umar, a passionate Computer Science and Engineering (AI & ML)
                  student. Skilled in Java, Python, HTML, CSS, JavaScript, and MySQL.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="education section">
            <h2>Education</h2>
            <div className="edu-grid">
              <div className="edu-card" onClick={() => openModal("/images/st-martins-logo.jpeg")}>
                <img src="/images/st-martins-logo.jpeg" alt="St Martins" className="thumb" />
                <p><b>BTech CSE (AI & ML)</b> - St. Martins Engineering College <br/> 2022-2026 | CGPA: 8.38</p>
              </div>
              <div className="edu-card" onClick={() => openModal("/images/chaitanya-logo.jpeg")}>
                <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya" className="thumb" />
                <p><b>Intermediate</b> - Sri Chaitanya Jr. College <br/> 2020-2022 | Percentage: 94.4%</p>
              </div>
              <div className="edu-card" onClick={() => openModal("/images/st-francis-logo.jpeg")}>
                <img src="/images/st-francis-logo.jpeg" alt="St Francis" className="thumb" />
                <p><b>High School</b> - St. Francis De Sales High School <br/> 2020 | Grade: 10.0</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="skills section">
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
          <section className="projects section">
            <h2>Projects</h2>

            <div
              className="project-card"
              onClick={() =>
                openModal("/images/twitter-bots-project.png", [
                  "Built ML model with 74% accuracy to classify bots",
                  "Implemented NLP & tweet-frequency features",
                  "Developed Tkinter GUI for real-time predictions"
                ])
              }
            >
              <img src="/images/twitter-bots-project.png" alt="Twitter Bots" className="thumb"/>
              <h3>Detecting Malicious Twitter Bots</h3>
              <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots"
                 target="_blank" rel="noreferrer" className="link-btn">GitHub Link</a>
            </div>

            <div
              className="project-card"
              onClick={() =>
                openModal("/images/smart-parking-project.png", [
                  "IoT-based parking system with Android + Node.js",
                  "Integrated GPS & sensors to reduce search time by 40%",
                  "Built secure REST APIs for authentication & payments"
                ])
              }
            >
              <img src="/images/smart-parking-project.png" alt="Smart Parking" className="thumb"/>
              <h3>Smart Parking System</h3>
              <a href="https://github.com/mohammed-imad-umar/smart-parking-system"
                 target="_blank" rel="noreferrer" className="link-btn">GitHub Link</a>
            </div>

            <div
              className="project-card"
              onClick={() =>
                openModal("/images/electronic-signature.png", [
                  "Lightweight web-based signature app",
                  "Built with HTML, CSS, and JavaScript",
                  "Download digital signature as image"
                ])
              }
            >
              <img src="/images/electronic-signature.png" alt="Electronic Signature" className="thumb"/>
              <h3>Electronic Signature App</h3>
              <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-"
                 target="_blank" rel="noreferrer" className="link-btn">GitHub Link</a>
              <a href="https://electronic-signature.netlify.app/"
                 target="_blank" rel="noreferrer" className="live-demo">🚀 Live Demo</a>
            </div>

            <div
              className="project-card"
              onClick={() =>
                openModal("/images/college-companion.jpeg", [
                  "Smart dashboard for college utilities",
                  "Integrated tools like CGPA calculator & timetable planner",
                  "Notes, syllabus & attendance in one platform"
                ])
              }
            >
              <img src="/images/college-companion.jpeg" alt="College Companion" className="thumb"/>
              <h3>College Companion</h3>
              <a href="https://github.com/mohammed-imad-umar/college-companion"
                 target="_blank" rel="noreferrer" className="link-btn">GitHub Link</a>
              <a href="https://college-companion-by-imad.netlify.app/"
                 target="_blank" rel="noreferrer" className="live-demo">🚀 Live Demo</a>
            </div>
          </section>

          {/* Contact */}
          <section className="contact section">
            <h2>Get in Touch</h2>
            <div className="badges">
              <a href="https://linkedin.com/in/mohammed-imad-umar" target="_blank" rel="noreferrer" className="badge clickable">LinkedIn</a>
              <a href="https://leetcode.com/mohammed_imad_umar" target="_blank" rel="noreferrer" className="badge clickable">LeetCode</a>
              <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noreferrer" className="badge clickable">GitHub</a>
              <a href="mailto:imadu1525@gmail.com" className="badge clickable">Email</a>
              <a href="/images/resume.pdf" target="_blank" rel="noreferrer" className="badge clickable">Resume</a>
            </div>
          </section>

          <footer className="footer">
            <p>© 2025 Mohammed Imad Umar. All rights reserved.</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;