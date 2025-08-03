import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [viewProject, setViewProject] = useState(null);
  const [viewEdu, setViewEdu] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-circle">
          <img src="/images/profile-photo.jpeg" alt="Profile" className="loader-img blink" />
        </div>
        <p className="loader-text blink">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">

      {/* HERO SECTION */}
      <section className="landing">
        <div className="hero">
          <img src="/images/profile-photo.jpeg" alt="Profile" className="hero-img" />
          <div className="hero-text">
            <h1>Hello, I'm <span>Imad Umar</span></h1>
            <p>Crafting efficient solutions with code & innovation.</p>
            <div className="social-icons">
              <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noreferrer">
                <img src="/images/github-logo.jpeg" alt="GitHub" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src="/images/linkedin-logo.jpeg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <img src="/images/cover.jpeg" alt="Cover" className="cover-img" />
        <div>
          <h2>About Me</h2>
          <p>
            I am a passionate developer with a keen interest in building scalable
            and innovative solutions. My expertise lies in full-stack development,
            machine learning, and problem-solving with clean, maintainable code.
          </p>
          <p>
            With hands-on experience in real-world projects, I focus on writing
            efficient code and creating user-centric applications. My goal is to
            blend technology and creativity to craft impactful solutions.
          </p>
          <a href="/images/resume.pdf" target="_blank" rel="noreferrer" className="cv-btn">View CV</a>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education">
        <h2>Education</h2>
        <div className="edu-grid">

          <div className="edu-card" onClick={() => setViewEdu(viewEdu === 1 ? null : 1)}>
            <img src="/images/st-francis-logo.jpeg" alt="BTech" />
            <h3>B.Tech (CSE-AI/ML)</h3>
            {viewEdu === 1 && <div className="edu-overlay"><p className="glossy">Grade: 8.5 CGPA</p></div>}
          </div>

          <div className="edu-card" onClick={() => setViewEdu(viewEdu === 2 ? null : 2)}>
            <img src="/images/st-martins-logo.jpeg" alt="Intermediate" />
            <h3>Intermediate</h3>
            {viewEdu === 2 && <div className="edu-overlay"><p className="glossy">Grade: 92%</p></div>}
          </div>

          <div className="edu-card" onClick={() => setViewEdu(viewEdu === 3 ? null : 3)}>
            <img src="/images/chaitanya-logo.jpeg" alt="School" />
            <h3>School</h3>
            {viewEdu === 3 && <div className="edu-overlay"><p className="glossy">Grade: 9.8 GPA</p></div>}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="proj-grid">

          <div className="proj-card" onClick={() => setViewProject(viewProject === 1 ? null : 1)}>
            <img src="/images/college-companion.jpeg" alt="College Companion" />
            <h3>College Companion</h3>
            <div className="badges">
              <a href="https://college-companion-by-imad.netlify.app/" target="_blank" rel="noreferrer" className="badge live">🚀 Live Demo</a>
              <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank" rel="noreferrer" className="badge github">GitHub</a>
            </div>
            {viewProject === 1 && (
              <div className="proj-overlay">
                <div className="glossy-points">
                  <p>📌 Built using React + Node.js</p>
                  <p>📌 Implements role-based access</p>
                  <p>📌 Optimized for mobile devices</p>
                </div>
              </div>
            )}
          </div>

          <div className="proj-card" onClick={() => setViewProject(viewProject === 2 ? null : 2)}>
            <img src="/images/electronic-signature.png" alt="Electronic Signature" />
            <h3>Electronic Signature</h3>
            <div className="badges">
              <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-" target="_blank" rel="noreferrer" className="badge github">GitHub</a>
            </div>
            {viewProject === 2 && (
              <div className="proj-overlay">
                <div className="glossy-points">
                  <p>📌 Secure digital signing</p>
                  <p>📌 Integrated verification</p>
                  <p>📌 Lightweight & fast</p>
                </div>
              </div>
            )}
          </div>

          <div className="proj-card" onClick={() => setViewProject(viewProject === 3 ? null : 3)}>
            <img src="/images/smart-parking-project.png" alt="Smart Parking" />
            <h3>Smart Parking System</h3>
            <div className="badges">
              <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" rel="noreferrer" className="badge github">GitHub</a>
            </div>
            {viewProject === 3 && (
              <div className="proj-overlay">
                <div className="glossy-points">
                  <p>📌 IoT based parking management</p>
                  <p>📌 Real-time slot updates</p>
                  <p>📌 Android app integration</p>
                </div>
              </div>
            )}
          </div>

          <div className="proj-card" onClick={() => setViewProject(viewProject === 4 ? null : 4)}>
            <img src="/images/twitter-bots-project.png" alt="Twitter Bots" />
            <h3>Detecting Twitter Bots</h3>
            <div className="badges">
              <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" rel="noreferrer" className="badge github">GitHub</a>
            </div>
            {viewProject === 4 && (
              <div className="proj-overlay">
                <div className="glossy-points">
                  <p>📌 ML model for bot detection</p>
                  <p>📌 Trained on real Twitter data</p>
                  <p>📌 Achieved 95% accuracy</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;