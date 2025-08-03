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
          <p className="loader-text">Imad's Portfolio Loading...</p>
        </div>
      ) : (
        <div className="app">
          {/* Modal */}
          {modalImg && (
            <div className="modal" onClick={() => setModalImg(null)}>
              <img src={modalImg} alt="Enlarged" className="modal-content" />
              <div className="modal-points">
                {modalPoints.map((point, i) => (
                  <p
                    key={i}
                    className="point"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Landing Section */}
          <section className="landing">
            <div className="landing-bg">
              <img
                src="/images/profile-photo.jpeg"
                alt="Background"
                className="landing-blur"
              />
            </div>
            <div className="landing-content">
              <h1>Hello, I'm Mohammed Imad Umar</h1>
              <p>A passionate AI & ML enthusiast shaping ideas into real tech</p>
              <div className="social-icons">
                <a
                  href="https://github.com/mohammed-imad-umar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/github-logo.png"
                    alt="GitHub"
                    className="icon"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/mohammed-imad-umar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/linkedin-logo.png"
                    alt="LinkedIn"
                    className="icon"
                  />
                </a>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section className="about-section">
            <div className="about-left">
              <img
                src="/images/cover.jpg"
                alt="Cover"
                className="about-cover"
              />
            </div>
            <div className="about-right">
              <h2>About Me</h2>
              <p>
                I'm a Computer Science Engineering (AI & ML) student with a strong passion
                for developing impactful software solutions. With solid experience in Java,
                Python, and full-stack technologies, I strive to merge technical excellence
                with real-world usability.
              </p>
              <p>
                My focus is on solving practical problems through intelligent systems,
                user-centric design, and clean code. I enjoy hackathons, building deployable
                apps, and working on projects that make a difference.
              </p>
              <a
                href="/images/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="download-btn"
              >
                Download CV
              </a>
            </div>
          </section>

          {/* Education */}
          <section className="education">
            <h2>Education</h2>
            <div
              className="edu-card"
              onClick={() => openModal("/images/btech.jpg")}
            >
              <img src="/images/btech.jpg" alt="BTech" className="thumb" />
              <p>
                <b>BTech CSE (AI & ML)</b> - St. Martin's Engineering College <br />
                2022-2026 | CGPA: 8.38
              </p>
            </div>
            <div
              className="edu-card"
              onClick={() => openModal("/images/inter.jpg")}
            >
              <img src="/images/inter.jpg" alt="Intermediate" className="thumb" />
              <p>
                <b>Intermediate</b> - Sri Chaitanya Jr. College <br />
                2020-2022 | Percentage: 94.4%
              </p>
            </div>
            <div
              className="edu-card"
              onClick={() => openModal("/images/school.jpg")}
            >
              <img src="/images/school.jpg" alt="School" className="thumb" />
              <p>
                <b>High School</b> - St. Francis De Sales High School <br />
                2020 | Grade: 10.0
              </p>
            </div>
          </section>

          {/* Skills */}
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

          {/* Projects */}
          <section className="projects">
            <h2>Projects</h2>

            {/* College Companion */}
            <div
              className="project-card"
              onClick={() =>
                openModal("/images/college-companion.jpeg", [
                  "Centralized dashboard for college resources",
                  "Integrated tools: Notes, Timetable, CGPA Calculator",
                  "Boosted student productivity with intuitive UI",
                ])
              }
            >
              <img
                src="/images/college-companion.jpeg"
                alt="College Companion"
                className="thumb"
              />
              <h3>College Companion</h3>
              <a
                href="https://github.com/mohammed-imad-umar/college-companion"
                target="_blank"
                rel="noreferrer"
                className="link-btn"
              >
                GitHub Link
              </a>
              <a
                href="https://college-companion-by-imad.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="live-demo"
              >
                🚀 Live Demo
              </a>
            </div>

            {/* Twitter Bots */}
            <div
              className="project-card"
              onClick={() =>
                openModal("/images/twitter-bot.jpg", [
                  "Built ML model with 74% accuracy to classify bots",
                  "Implemented NLP & tweet-frequency features",
                  "Developed Tkinter GUI for real-time predictions",
                ])
              }
            >
              <img
                src="/images/twitter-bot.jpg"
                alt="Twitter Bots"
                className="thumb"
              />
              <h3>Detecting Malicious Twitter Bots</h3>
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
            <div
              className="project-card"
              onClick={() =>
                openModal("/images/smart-parking.jpg", [
                  "IoT-based parking system with Android + Node.js",
                  "Integrated GPS & sensors to reduce search time by 40%",
                  "Built secure REST APIs for authentication & payments",
                ])
              }
            >
              <img
                src="/images/smart-parking.jpg"
                alt="Smart Parking"
                className="thumb"
              />
              <h3>Smart Parking System</h3>
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

          {/* Contact */}
          <section className="contact">
            <h2>Get in Touch</h2>
            <div className="badges">
              <a href="mailto:imadu1525@gmail.com" className="contact-btn email">
                <i className="fas fa-envelope"></i> imadu1525@gmail.com
              </a>
              <span className="contact-btn phone">
                <i className="fas fa-phone"></i> 8919023402
              </span>
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