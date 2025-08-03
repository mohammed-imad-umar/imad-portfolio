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
          {/* Landing Section */}
          <section
            className="landing"
            style={{
              backgroundImage: "url('/images/profile-photo.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(20%)",
              position: "relative",
            }}
          >
            <div className="landing-overlay" />
            <div className="landing-content">
              <h1>Hello, I'm Mohammed Imad Umar</h1>
              <p>A passionate CSE (AI & ML) student building impactful tech solutions.</p>
              <div className="social-icons">
                <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
                  <img src="/images/github-logo.jpeg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-imad-umar-215a682a8" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin-logo.jpeg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section className="about">
            <div className="about-left">
              <h2>About Me</h2>
              <p>
                I'm a Computer Science student specializing in Artificial Intelligence and Machine Learning at St. Martin's Engineering College.
                I love building impactful projects that solve real-life problems with clean and scalable code.
              </p>
              <p>
                My experience spans web development, IoT, and machine learning applications. 
                I believe technology should make life easier and more efficient for everyone.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-btn"
              >
                View CV
              </a>
            </div>
            <div className="about-right">
              <img src="/images/cover.jpeg" alt="Cover" />
            </div>
          </section>

          {/* Education */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-item" onClick={() => openModal("/images/st-martins-logo.jpeg", ["B.Tech – CSE (AI & ML)", "Grade: 8.7 CGPA"])}>
              <img src="/images/st-martins-logo.jpeg" alt="BTech" />
              <h3>St. Martin’s Engineering College</h3>
              <p>B.Tech – CSE (AI & ML)</p>
            </div>
            <div className="edu-item" onClick={() => openModal("/images/chaitanya-logo.jpeg", ["Intermediate – MPC", "Grade: 95%"])}>
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

            <div className="project" onClick={() => openModal("/images/electronic-signature.png", ["Digital signature creation & download", "Helps with online/offline document signing", "Minimal UI with instant export"])}>
              <img src="/images/electronic-signature.png" alt="Electronic Signature" />
              <h3>Electronic Signature</h3>
              <div className="proj-links">
                <a href="https://electronic-signature-by-imad.netlify.app/" target="_blank" rel="noopener noreferrer">🚀 Live Demo</a>
                <a href="https://github.com/mohammed-imad-umar/electronic-signature" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="project" onClick={() => openModal("/images/college-companion.jpeg", ["Manages student academics", "Event reminders & notes storage", "Built for seamless college life"])}>
              <img src="/images/college-companion.jpeg" alt="College Companion" />
              <h3>College Companion</h3>
              <div className="proj-links">
                <a href="https://college-companion.netlify.app/" target="_blank" rel="noopener noreferrer">🚀 Live Demo</a>
                <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="project" onClick={() => openModal("/images/twitter-bots-project.png", ["Detects bot accounts on Twitter", "ML classification using behavior data", "Deployed UI for testing"])}>
              <img src="/images/twitter-bots-project.png" alt="Twitter Bots" />
              <h3>Detecting Twitter Bots</h3>
            </div>

            <div className="project" onClick={() => openModal("/images/smart-parking-project.png", ["IoT-based smart parking", "Live dashboard monitoring", "Optimizes urban parking"])}>
              <img src="/images/smart-parking-project.png" alt="Smart Parking" />
              <h3>IoT Smart Parking System</h3>
            </div>
          </section>

          {/* Contact */}
          <section className="contact">
            <h2>Contact</h2>
            <p>📧 <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a></p>
            <p>📱 8919023402</p>
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
                <div className="modal-points">
                  {modalPoints.map((point, i) => (
                    <p key={i}>{point}</p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;