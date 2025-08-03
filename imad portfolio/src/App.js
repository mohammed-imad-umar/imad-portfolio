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

          {/* Hero Section */}
          <section
            className="landing"
            style={{
              backgroundImage: "url('/images/profile-photo.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
            }}
          ></section>

          <div className="hero-content">
            <h1>Hello, I'm Mohammed Imad Umar</h1>
            <p>A passionate CSE (AI & ML) student building smart and impactful tech.</p>
            <div className="social-links">
              <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-logo.jpeg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/mohammed-imad-umar-215a682a8" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-logo.jpeg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* About Me */}
          <section className="about">
            <img src="/images/cover.jpeg" alt="Cover" className="cover-img" />
            <div>
              <h2>About Me</h2>
              <p>
                I'm a Computer Science student specializing in Artificial Intelligence and Machine Learning at St. Martin's Engineering College. With a strong foundation in full-stack web development and a knack for problem-solving, I aim to create digital tools that are both functional and user-friendly.
              </p>
              <p>
                My portfolio reflects a range of real-life projects, including a Twitter bot detector and IoT-based smart parking system. I enjoy working on impactful tech that helps people—whether it's automating tasks, managing student life, or building scalable platforms.
              </p>
              <a href="/resume.pdf" download className="cv-button">Download CV</a>
            </div>
          </section>

          {/* Education */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-item" onClick={() => openModal("/images/st-martins-logo.jpeg")}>
              <img src="/images/st-martins-logo.jpeg" alt="BTech" />
              <div>
                <h3>St. Martin’s Engineering College</h3>
                <p>B.Tech – Computer Science (AI & ML)</p>
              </div>
            </div>
            <div className="edu-item" onClick={() => openModal("/images/chaitanya-logo.jpeg")}>
              <img src="/images/chaitanya-logo.jpeg" alt="Intermediate" />
              <div>
                <h3>Sri Chaitanya Jr. College</h3>
                <p>Intermediate (MPC)</p>
              </div>
            </div>
            <div className="edu-item" onClick={() => openModal("/images/st-francis-logo.jpeg")}>
              <img src="/images/st-francis-logo.jpeg" alt="School" />
              <div>
                <h3>St. Francis De Sales High School</h3>
                <p>10th Grade – GPA: 10.0</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="skills">
            <h2>Skills</h2>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>MySQL</li>
              <li>Git & GitHub</li>
            </ul>
          </section>

          {/* Projects */}
          <section className="projects">
            <h2>Projects</h2>
            <div className="project">
              <img
                src="/images/twitter-bots-project.png"
                alt="Twitter Bot"
                onClick={() =>
                  openModal("/images/twitter-bots-project.png", [
                    "ML model to identify bot accounts",
                    "Behavioral pattern detection",
                    "Deployed with intuitive UI"
                  ])
                }
              />
              <h3>Detecting Twitter Bots</h3>
              <div className="project-buttons">
                <a href="https://github.com/mohammed-imad-umar/twitter-bot" className="glow-btn">GitHub</a>
                <a href="#" className="glow-btn">🚀 Live Demo</a>
              </div>
            </div>
            <div className="project">
              <img
                src="/images/smart-parking-project.png"
                alt="Smart Parking"
                onClick={() =>
                  openModal("/images/smart-parking-project.png", [
                    "IoT-based parking system",
                    "Real-time slot monitoring",
                    "Urban congestion optimization"
                  ])
                }
              />
              <h3>IoT Smart Parking System</h3>
              <div className="project-buttons">
                <a href="https://github.com/mohammed-imad-umar/smart-parking" className="glow-btn">GitHub</a>
                <a href="#" className="glow-btn">🚀 Live Demo</a>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="contact">
            <h2>Contact</h2>
            <p><strong>Email:</strong> <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a></p>
            <p><strong>Phone:</strong> 8919023402</p>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2025 Mohammed Imad Umar. All rights reserved.</p>
          </footer>

          {/* Modal */}
          {modalImg && (
            <div className="modal" onClick={() => setModalImg(null)}>
              <img src={modalImg} alt="Modal" />
              {modalPoints.length > 0 && (
                <ul className="ats-points">
                  {modalPoints.map((point, index) => (
                    <li key={index}>{point}</li>
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