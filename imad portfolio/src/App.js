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
          <img src="/images/profile-photo.jpeg" alt="Profile" className="loader-img blink" />
          <p className="loader-text">Imad's Portfolio Loading...</p>
        </div>
      ) : (
        <div className="app">
          {/* ✅ Hero Section */}
          <section className="hero">
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1>Hello, I'm <span className="highlight">Mohammed Imad Umar</span></h1>
              <p className="tagline">CSE (AI & ML) Student • Building smart and impactful tech solutions</p>
              <div className="social-icons">
                <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noreferrer">
                  <img src="/images/github-logo.jpeg" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/mohammed-imad-umar" target="_blank" rel="noreferrer">
                  <img src="/images/linkedin-logo.jpeg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </section>

          {/* ✅ About Section */}
          <section className="about">
            <img src="/images/cover.jpeg" alt="Cover" className="cover-img" />
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I am Mohammed Imad Umar, a Computer Science and Engineering (AI & ML) student passionate
                about creating efficient and user-centric digital solutions. With expertise in Java,
                Python, and full-stack web development, I focus on building projects that combine innovation,
                scalability, and real-world usability.
              </p>
              <p>
                My work spans AI-driven models, IoT-based applications, and productivity tools aimed at
                solving practical challenges. I value clean design, optimized performance, and impactful
                functionality in every project I create. Constantly learning and experimenting, I strive to
                develop software that makes a meaningful difference in how people interact with technology.
              </p>
              <a href="/images/resume.pdf" download className="cv-btn">Download CV</a>
            </div>
          </section>

          {/* ✅ Education Section */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-card">
              <img src="/images/st-martins-logo.jpeg" alt="St Martins" />
              <p><b>BTech CSE (AI & ML)</b> - St. Martins Engineering College <br /> 2022-2026 | CGPA: 8.38</p>
            </div>
            <div className="edu-card">
              <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya" />
              <p><b>Intermediate</b> - Sri Chaitanya Jr. College <br /> 2020-2022 | Percentage: 94.4%</p>
            </div>
            <div className="edu-card">
              <img src="/images/st-francis-logo.jpeg" alt="St Francis" />
              <p><b>High School</b> - St. Francis De Sales High School <br /> 2020 | Grade: 10.0</p>
            </div>
          </section>

          {/* ✅ Skills Section */}
          <section className="skills">
            <h2>Skills</h2>
            <div className="skill-badges">
              <span>Java</span><span>Python</span><span>HTML</span><span>CSS</span>
              <span>JavaScript</span><span>MySQL</span><span>C</span><span>AI & ML</span>
            </div>
          </section>

          {/* ✅ Projects Section */}
          <section className="projects">
            <h2>Projects</h2>

            {/* College Companion */}
            <div className="project-card"
              onClick={() =>
                openModal("/images/college-companion.jpeg", [
                  "All-in-one student productivity hub",
                  "Includes CGPA Calculator, Timetable & Notes",
                  "Built with React.js and Firebase"
                ])
              }>
              <img src="/images/college-companion.jpeg" alt="College Companion" />
              <h3>College Companion</h3>
              <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank" rel="noreferrer" className="link-btn">GitHub</a>
              <a href="https://college-companion-by-imad.netlify.app/" target="_blank" rel="noreferrer" className="live-btn">🚀 Live Demo</a>
            </div>

            {/* Twitter Bots */}
            <div className="project-card"
              onClick={() =>
                openModal("/images/twitter-bots-project.png", [
                  "Built ML model with 74% accuracy to classify bots",
                  "Implemented NLP & tweet-frequency features",
                  "Developed Tkinter GUI for real-time predictions"
                ])
              }>
              <img src="/images/twitter-bots-project.png" alt="Twitter Bots" />
              <h3>Detecting Malicious Twitter Bots</h3>
              <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" rel="noreferrer" className="link-btn">GitHub</a>
            </div>

            {/* Smart Parking */}
            <div className="project-card"
              onClick={() =>
                openModal("/images/smart-parking-project.png", [
                  "IoT-based parking system with Android + Node.js",
                  "Integrated GPS & sensors to reduce search time by 40%",
                  "Built secure REST APIs for authentication & payments"
                ])
              }>
              <img src="/images/smart-parking-project.png" alt="Smart Parking" />
              <h3>Smart Parking System</h3>
              <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" rel="noreferrer" className="link-btn">GitHub</a>
            </div>

            {/* Electronic Signature */}
            <div className="project-card"
              onClick={() =>
                openModal("/images/electronic-signature.png", [
                  "Lightweight web-based signature app",
                  "Built with HTML, CSS, and JavaScript",
                  "Download digital signature as image"
                ])
              }>
              <img src="/images/electronic-signature.png" alt="Electronic Signature" />
              <h3>Electronic Signature App</h3>
              <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-" target="_blank" rel="noreferrer" className="link-btn">GitHub</a>
              <a href="https://electronic-signature-by-imad.netlify.app/" target="_blank" rel="noreferrer" className="live-btn">🚀 Live Demo</a>
            </div>
          </section>

          {/* ✅ Contact Section */}
          <section className="contact">
            <h2>Contact</h2>
            <div className="contact-info">
              <p>📧 <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a></p>
              <p>📱 +91 8919023402</p>
            </div>
          </section>

          <footer className="footer">
            <p>© 2025 Mohammed Imad Umar. All rights reserved.</p>
          </footer>

          {/* ✅ Modal */}
          {modalImg && (
            <div className="modal" onClick={() => setModalImg(null)}>
              <img src={modalImg} alt="Modal" />
              <div className="modal-points">
                {modalPoints.map((point, i) => (
                  <p key={i} style={{ animationDelay: `${i * 0.5}s` }}>{point}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;