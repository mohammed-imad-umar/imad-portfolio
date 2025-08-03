import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [modalImg, setModalImg] = useState(null);
  const [modalPoints, setModalPoints] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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
          <img
            src="/images/profile-photo.jpeg"
            alt="Profile"
            className="loader-img blink"
          />
          <p className="loader-text">Loading Portfolio...</p>
        </div>
      ) : (
        <div className="app">

          {/* HERO SECTION */}
          <section
            className="hero"
            style={{
              backgroundImage: "url('/images/profile-photo.jpeg')",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>Hello, I'm <span>Mohammed Imad Umar</span></h1>
              <p className="tagline">A passionate CSE (AI & ML) student building smart & impactful tech solutions.</p>
              <div className="social-links">
                <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
                  <img src="/images/github-logo.jpeg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-imad-umar-215a682a8" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin-logo.jpeg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="about">
            <img src="/images/cover.jpeg" alt="Cover" className="cover-img" />
            <div>
              <h2>About Me</h2>
              <p>
                I'm a Computer Science student specializing in Artificial Intelligence and Machine Learning at St. Martin's Engineering College.
                I enjoy creating digital tools that are functional and user-friendly while solving real-world problems.
              </p>
              <p>
                My work includes AI-driven models, IoT-based systems, and full-stack apps designed to bring efficiency into everyday life.
                I believe code isn't just logic, it's a way to craft impact and empower users.
              </p>
              <a href="/resume.pdf" target="_blank" className="cv-btn">View CV</a>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-item" onClick={() => openModal("/images/st-martins-logo.jpeg", ["B.Tech – Computer Science (AI & ML)", "CGPA: 8.5"])}>
              <img src="/images/st-martins-logo.jpeg" alt="BTech" />
              <h3>St. Martin’s Engineering College</h3>
              <p>B.Tech – AI & ML</p>
            </div>
            <div className="edu-item" onClick={() => openModal("/images/chaitanya-logo.jpeg", ["Intermediate – MPC", "Percentage: 94%"])}>
              <img src="/images/chaitanya-logo.jpeg" alt="Intermediate" />
              <h3>Sri Chaitanya Jr. College</h3>
              <p>Intermediate – MPC</p>
            </div>
            <div className="edu-item" onClick={() => openModal("/images/st-francis-logo.jpeg", ["10th Grade", "GPA: 10.0"])}>
              <img src="/images/st-francis-logo.jpeg" alt="School" />
              <h3>St. Francis De Sales High School</h3>
              <p>10th Grade</p>
            </div>
          </section>

          {/* SKILLS */}
          <section className="skills">
            <h2>Skills</h2>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>React.js</li>
              <li>MySQL</li>
              <li>HTML, CSS, JS</li>
              <li>Git & GitHub</li>
            </ul>
          </section>

          {/* PROJECTS */}
          <section className="projects">
            <h2>Projects</h2>
            <div className="project" onClick={() => openModal("/images/college-companion.jpeg", ["College Companion App", "Manages student tasks and resources", "Integrated with live demo UI"])}>
              <img src="/images/college-companion.jpeg" alt="College Companion" />
              <h3>College Companion</h3>
              <div className="buttons">
                <a href="https://college-companion-link.netlify.app" target="_blank" className="live-btn">🚀 Live Demo</a>
                <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank" className="git-btn">GitHub</a>
              </div>
            </div>
            <div className="project" onClick={() => openModal("/images/electronic-signature.png", ["E-Signature Tool", "Download & use your digital sign", "Created to solve RTO signature hassle"])}>
              <img src="/images/electronic-signature.png" alt="E-Signature" />
              <h3>Electronic Signature</h3>
              <div className="buttons">
                <a href="https://electronic-signature-by-imad.netlify.app/" target="_blank" className="live-btn">🚀 Live Demo</a>
                <a href="https://github.com/mohammed-imad-umar/electronic-signature" target="_blank" className="git-btn">GitHub</a>
              </div>
            </div>
            <div className="project" onClick={() => openModal("/images/twitter-bots-project.png", ["Detecting Twitter Bots", "ML model for identifying bot accounts", "Real-time API testing & classification"])}>
              <img src="/images/twitter-bots-project.png" alt="Twitter Bots" />
              <h3>Detecting Twitter Bots</h3>
            </div>
            <div className="project" onClick={() => openModal("/images/smart-parking-project.png", ["IoT Smart Parking System", "Live dashboard & IR sensors", "Optimizing urban parking spaces"])}>
              <img src="/images/smart-parking-project.png" alt="Smart Parking" />
              <h3>IoT Smart Parking</h3>
            </div>
          </section>

          {/* CONTACT */}
          <section className="contact">
            <h2>Contact</h2>
            <p>📧 <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a></p>
            <p>📱 8919023402</p>
          </section>

          {/* FOOTER */}
          <footer className="footer">
            <p>&copy; 2025 Mohammed Imad Umar. All rights reserved.</p>
          </footer>

          {/* MODAL */}
          {modalImg && (
            <div className="modal" onClick={() => setModalImg(null)}>
              <img src={modalImg} alt="Modal" />
              {modalPoints.length > 0 && (
                <ul className="modal-points">
                  {modalPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

        </div>
      )}
    </>
  );
}

export default App;