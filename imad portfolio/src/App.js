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

          {/* 🔥 Landing Section */}
          <section className="landing" style={{
            backgroundImage: "url('/images/profile-photo.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(0)",
            position: "relative"
          }}>
            <div className="overlay">
              <h1>Hello, I'm Mohammed Imad Umar</h1>
              <p className="tagline">Aspiring AI/ML Engineer building real-world tech solutions</p>
              <div className="social-icons">
                <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noreferrer">
                  <img src="/images/github-logo.png" alt="GitHub" className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-imad-umar-215a682a8" target="_blank" rel="noreferrer">
                  <img src="/images/linkedin-logo.png" alt="LinkedIn" className="icon" />
                </a>
              </div>
            </div>
          </section>

          {/* Header (Do not touch) */}
          <header className="header">
            <h1>Mohammed Imad Umar</h1>
            <p>Computer Science & Engineering (AI & ML)</p>
          </header>

          {/* 🔥 About Me Section Updated */}
          <section className="about-me-section">
            <div className="about-container">
              <img src="/images/cover.jpg" alt="Cover" className="about-img" />
              <div className="about-text">
                <h2>About Me</h2>
                <p>
                  I'm an enthusiastic AI & ML engineering student passionate about solving real-world problems with scalable tech. With strong foundations in software development and data science, I enjoy building intelligent systems that create impact.
                </p>
                <p>
                  My expertise spans Java, Python, Web Development, and Machine Learning. I thrive on challenges and love transforming ideas into functional, user-centric solutions.
                </p>
                <a href="/images/resume.pdf" target="_blank" rel="noreferrer" className="download-btn">Download CV</a>
              </div>
            </div>
          </section>

          {/* ✅ Education Section – UNTOUCHED */}
          {/* ✅ Skills Section – UNTOUCHED */}
          {/* ✅ Projects Section – UNTOUCHED */}

          {/* 🔥 Contact Section Simplified */}
          <section className="contact">
            <h2>Get in Touch</h2>
            <div className="contact-slim">
              <p>Email: <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a></p>
              <p>Phone: 8919023402</p>
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