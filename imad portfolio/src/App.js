import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeEdu, setActiveEdu] = useState(null);
  const [activeProj, setActiveProj] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-circle">
          <img
            src="/images/profile-photo.jpeg"
            alt="Profile"
            className="loader-img blink"
          />
        </div>
        <p className="loader-text blink">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* HERO SECTION */}
      <section className="hero">
        <img
          src="/images/profile-photo.jpeg"
          alt="Profile"
          className="hero-bg"
        />
        <div className="hero-text">
          <h1>Hello, I'm Imad Umar</h1>
          <p>Passionate AI/ML Engineer crafting intelligent solutions.</p>
          <div className="hero-links">
            <a
              href="https://github.com/mohammed-imad-umar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/github-logo.jpeg" alt="GitHub" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin-logo.jpeg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="about">
        <h2>About Me</h2>
        <img src="/images/cover.jpeg" alt="Cover" className="cover-img" />
        <p>
          I am a Computer Science student specializing in Artificial Intelligence
          and Machine Learning, passionate about building efficient, scalable, and
          intelligent systems that solve real-world problems.
        </p>
        <p>
          My expertise spans across full-stack development, algorithm design, and
          creating production-ready machine learning pipelines, with a focus on
          delivering clean and optimized solutions.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-btn"
        >
          View CV
        </a>
      </section>

      {/* EDUCATION */}
      <section className="education">
        <h2>Education</h2>
        <div className="edu-cards">
          <div
            className="edu-card"
            onClick={() => setActiveEdu(activeEdu === 1 ? null : 1)}
          >
            <img src="/images/st-francis-logo.jpeg" alt="St Francis" />
            {activeEdu === 1 && (
              <div className="edu-overlay">
                <div className="ats-points">
                  <p>B.Tech in CSE (AI & ML)</p>
                  <p>CGPA: 8.7</p>
                  <p>Years: 2021 - 2025</p>
                </div>
              </div>
            )}
          </div>
          <div
            className="edu-card"
            onClick={() => setActiveEdu(activeEdu === 2 ? null : 2)}
          >
            <img src="/images/st-martins-logo.jpeg" alt="St Martins" />
            {activeEdu === 2 && (
              <div className="edu-overlay">
                <div className="ats-points">
                  <p>Intermediate MPC</p>
                  <p>Percentage: 94%</p>
                  <p>Years: 2019 - 2021</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="proj-cards">
          {/* College Companion */}
          <div
            className="proj-card"
            onClick={() => setActiveProj(activeProj === 1 ? null : 1)}
          >
            <img src="/images/college-companion.jpeg" alt="College Companion" />
            {activeProj === 1 && (
              <div className="proj-overlay">
                <div className="ats-points">
                  <p>Full-Stack + Android Smart College Companion App</p>
                  <p>Built with React, Node.js, MongoDB</p>
                  <p>Features: Notes, Timetable, Reminders</p>
                  <div className="proj-links">
                    <a
                      href="https://college-companion-by-imad.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge live"
                    >
                      🚀 Live Demo
                    </a>
                    <a
                      href="https://github.com/mohammed-imad-umar/college-companion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge github"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Electronic Signature */}
          <div
            className="proj-card"
            onClick={() => setActiveProj(activeProj === 2 ? null : 2)}
          >
            <img
              src="/images/electronic-signature.png"
              alt="Electronic Signature"
            />
            {activeProj === 2 && (
              <div className="proj-overlay">
                <div className="ats-points">
                  <p>Electronic Signature Web App</p>
                  <p>Canvas API with React.js</p>
                  <div className="proj-links">
                    <a
                      href="https://github.com/mohammed-imad-umar/Electronic_Signature-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge github"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Smart Parking */}
          <div
            className="proj-card"
            onClick={() => setActiveProj(activeProj === 3 ? null : 3)}
          >
            <img
              src="/images/smart-parking-project.png"
              alt="Smart Parking System"
            />
            {activeProj === 3 && (
              <div className="proj-overlay">
                <div className="ats-points">
                  <p>IoT-based Smart Parking System</p>
                  <p>ESP32, Sensors, Android App</p>
                  <div className="proj-links">
                    <a
                      href="https://github.com/mohammed-imad-umar/smart-parking-system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge github"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Detecting Twitter Bots */}
          <div
            className="proj-card"
            onClick={() => setActiveProj(activeProj === 4 ? null : 4)}
          >
            <img
              src="/images/twitter-bots-project.png"
              alt="Detecting Twitter Bots"
            />
            {activeProj === 4 && (
              <div className="proj-overlay">
                <div className="ats-points">
                  <p>Detecting Twitter Bots using ML</p>
                  <p>Scikit-Learn, Pandas, Flask</p>
                  <div className="proj-links">
                    <a
                      href="https://github.com/mohammed-imad-umar/detecting-twitter-bots"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge github"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact</h2>
        <p>
          📧 Email: <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a>
        </p>
        <p>📞 Phone: 8919023402</p>
      </section>

      <footer>
        <p>© 2025 Imad Umar Portfolio</p>
      </footer>
    </div>
  );
}

export default App;