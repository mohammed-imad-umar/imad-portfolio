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
          <div className="loader-circle">
            <img
              src="/profile-photo.jpeg"
              alt="Profile"
              className="loader-img"
            />
          </div>
          <p className="loader-text">Imad's Portfolio Loading...</p>
        </div>
      ) : (
        <div className="app">

          {/* Hero Section */}
          <section className="landing">
            <div className="landing-bg" />
            <div className="landing-content">
              <h1>Hello, I'm Mohammed Imad Umar</h1>
              <p className="tagline">
                A passionate CSE (AI & ML) student building impactful tech.
              </p>
              <div className="social-icons">
                <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
                  <img src="/github-logo.jpeg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-imad-umar-215a682a8" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin-logo.jpeg" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <img src="/profile-photo.jpeg" alt="Profile" className="landing-img" />
          </section>

          {/* About Me */}
          <section className="about">
            <h2>About Me</h2>
            <img src="/cover.jpeg" alt="Cover" className="cover-img" />
            <div className="about-text">
              <p>
                I'm a Computer Science student specializing in Artificial Intelligence and Machine Learning at St. Martin's Engineering College. 
                With strong full-stack development skills, I aim to create tools that are both functional and user-friendly.
              </p>
              <p>
                My portfolio reflects real-life projects such as a Twitter bot detector and IoT-based smart parking system. 
                I enjoy building impactful tech that helps people, and I'm always seeking new challenges and growth.
              </p>
              <a href="/resume.pdf" target="_blank" className="cv-btn">
                View CV
              </a>
            </div>
          </section>

          {/* Education */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-item" onClick={() => openModal("/btech.jpeg", ["CGPA: 8.7"])}>
              <img src="/st-martins-logo.jpeg" alt="BTech" />
              <h3>St. Martin’s Engineering College</h3>
              <p>B.Tech – CSE (AI & ML)</p>
            </div>
            <div className="edu-item" onClick={() => openModal("/inter.jpeg", ["Percentage: 92%"])}>
              <img src="/chaitanya-logo.jpeg" alt="Intermediate" />
              <h3>Sri Chaitanya Jr. College</h3>
              <p>Intermediate (MPC)</p>
            </div>
            <div className="edu-item" onClick={() => openModal("/school.jpeg", ["GPA: 10.0"])}>
              <img src="/st-francis-logo.jpeg" alt="School" />
              <h3>St. Francis De Sales High School</h3>
              <p>10th Grade</p>
            </div>
          </section>

          {/* Skills */}
          <section className="skills">
            <h2>Skills</h2>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>HTML, CSS, JS</li>
              <li>React.js</li>
              <li>MySQL</li>
              <li>Git & GitHub</li>
            </ul>
          </section>

          {/* Projects */}
          <section className="projects">
            <h2>Projects</h2>

            <div className="project" onClick={() => openModal("/college-companion.jpeg", [
              "Helps students manage tasks, deadlines & events",
              "Integrated notes and attendance system",
              "Lightweight UI for quick navigation"
            ])}>
              <img src="/college-companion.jpeg" alt="College Companion" />
              <h3>College Companion</h3>
              <div className="proj-links">
                <a href="https://college-companion.netlify.app" target="_blank">🚀 Live Demo</a>
                <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank">GitHub</a>
              </div>
            </div>

            <div className="project" onClick={() => openModal("/electronic-signature.png", [
              "Generate & download digital signature",
              "Quick access for document verification",
              "Lightweight responsive UI"
            ])}>
              <img src="/electronic-signature.png" alt="E-Signature" />
              <h3>Electronic Signature</h3>
              <div className="proj-links">
                <a href="https://electronic-signature-by-imad.netlify.app/" target="_blank">🚀 Live Demo</a>
                <a href="https://github.com/mohammed-imad-umar/electronic-signature" target="_blank">GitHub</a>
              </div>
            </div>

            <div className="project" onClick={() => openModal("/twitter-bots-project.png", [
              "Detects automated Twitter accounts",
              "Built ML model with behavioral analysis",
              "Interactive dashboard for testing"
            ])}>
              <img src="/twitter-bots-project.png" alt="Twitter Bot" />
              <h3>Detecting Twitter Bots</h3>
            </div>

            <div className="project" onClick={() => openModal("/smart-parking-project.png", [
              "IoT-based parking management",
              "IR sensors with live dashboard",
              "Reduces congestion in urban areas"
            ])}>
              <img src="/smart-parking-project.png" alt="Smart Parking" />
              <h3>IoT Smart Parking System</h3>
            </div>
          </section>

          {/* Contact */}
          <section className="contact">
            <h2>Contact</h2>
            <p><strong>Email:</strong> <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a></p>
            <p><strong>Phone:</strong> 8919023402</p>
          </section>

          <footer className="footer">
            <p>&copy; 2025 Mohammed Imad Umar</p>
          </footer>

          {modalImg && (
            <div className="modal" onClick={() => setModalImg(null)}>
              <div className="modal-content">
                <img src={modalImg} alt="Modal" />
                {modalPoints.length > 0 && (
                  <ul className="modal-points">
                    {modalPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;