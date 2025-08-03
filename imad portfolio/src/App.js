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

          {/* ==== Landing Section (Updated) ==== */}
          <section
            className="landing"
            style={{
              backgroundImage: "url('/images/profile-photo.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(20px)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                paddingTop: "150px",
                color: "#000",
              }}
            >
              <h1>Hello, I'm Mohammed Imad Umar</h1>
              <p style={{ fontSize: "1.2rem", margin: "15px 0" }}>
                A passionate CSE (AI & ML) student committed to building smart solutions
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <a
                  href="https://github.com/mohammed-imad-umar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/github-logo.png"
                    alt="GitHub"
                    style={{ width: "40px" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-imad-umar-215a682a8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/linkedin-logo.png"
                    alt="LinkedIn"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
            </div>
            <div style={{ height: "400px" }} />{/* spacing */}
          </section>

          {/* ==== Header (UNCHANGED) ==== */}
          <header className="header">
            <h1>Mohammed Imad Umar</h1>
            <p>Computer Science & Engineering (AI & ML)</p>
          </header>

          {/* ==== About Me Section (Updated) ==== */}
          <section
            className="about"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "60px 20px",
              gap: "40px",
              backgroundColor: "#f4f4f4",
              color: "#000",
            }}
          >
            <img
              src="/images/cover.jpg"
              alt="Cover"
              style={{ flex: "1", borderRadius: "10px", width: "100%", maxWidth: "350px" }}
            />
            <div style={{ flex: "2" }}>
              <h2>About Me</h2>
              <p style={{ margin: "20px 0", lineHeight: 1.6 }}>
                I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, with a deep passion for transforming innovative ideas into impactful applications. My academic journey at St. Martin's Engineering College has bolstered my technical foundation, while hands-on experience in full-stack development and cloud deployment drives my ambition to solve real-world problems through technology.
              </p>
              <p style={{ marginBottom: "20px", lineHeight: 1.6 }}>
                Beyond academics, I’ve led projects ranging from predictive bot detection and IoT-based parking systems to user-centric web tools aimed at productivity enhancement. I blend creativity with analytical thinking and continuously seek opportunities to contribute to meaningful tech innovations while honing my skills.
              </p>
              <a
                href="/resume.pdf"
                download
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Download CV
              </a>
            </div>
          </section>

          {/* ==== Education Section (UNCHANGED) ==== */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-card" onClick={() => openModal("/images/st-martins-logo.jpeg")}>
              <img
                src="/images/st-martins-logo.jpeg"
                alt="St Martins"
                className="thumb"
              />
              <p>
                <b>BTech CSE (AI & ML)</b> - St. Martins Engineering College <br />
                2022–2026 | CGPA: 8.38
              </p>
            </div>
            <div className="edu-card" onClick={() => openModal("/images/chaitanya-logo.jpeg")}>
              <img
                src="/images/chaitanya-logo.jpeg"
                alt="Sri Chaitanya"
                className="thumb"
              />
              <p>
                <b>Intermediate</b> - Sri Chaitanya Jr. College <br />
                2020–2022 | Percentage: 94.4%
              </p>
            </div>
            <div className="edu-card" onClick={() => openModal("/images/st-francis-logo.jpeg")}>
              <img
                src="/images/st-francis-logo.jpeg"
                alt="St Francis"
                className="thumb"
              />
              <p>
                <b>High School</b> - St. Francis De Sales High School <br />
                2020 | Grade: 10.0
              </p>
            </div>
          </section>

          {/* ==== Skills Section (UNCHANGED) ==== */}
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

          {/* ==== Projects Section (UNCHANGED) ==== */}
          <section className="projects">
            <h2>Projects</h2>
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
            <div
              className="project-card"
              onClick={() =>
                openModal("/images/twitter-bots-project.png", [
                  "Built ML model with 74% accuracy to classify bots",
                  "Implemented NLP & tweet-frequency features",
                  "Developed Tkinter GUI for real-time predictions",
                ])
              }
            >
              <img
                src="/images/twitter-bots-project.png"
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
            <div
              className="project-card"
              onClick={() =>
                openModal("/images/smart-parking-project.png", [
                  "IoT-based parking system with Android + Node.js",
                  "Integrated GPS & sensors to reduce search time by 40%",
                  "Built secure REST APIs for authentication & payments",
                ])
              }
            >
              <img
                src="/images/smart-parking-project.png"
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

          {/* ==== Contact Section (Updated) ==== */}
          <section className="contact" style={{ padding: "50px 20px", textAlign: "center", backgroundColor: "#fff", color: "#000" }}>
            <h2>Contact</h2>
            <div style={{ marginTop: "20px", lineHeight: 1.6 }}>
              <div><strong>Email:</strong> imadu1525@gmail.com</div>
              <div><strong>Phone:</strong> 8919023402</div>
            </div>
          </section>

          {/* ==== Footer (UNCHANGED) ==== */}
          <footer className="footer">
            <p>© 2025 Mohammed Imad Umar. All rights reserved.</p>
          </footer>

          {modalImg && (
            <div className="modal" onClick={() => setModalImg(null)}>
              <img src={modalImg} alt="Enlarged" className="modal-content" />
              <div className="modal-points">
                {modalPoints.map((point, index) => (
                  <p key={index} className="point" style={{ animationDelay: `${index * 0.4}s` }}>
                    {point}
                  </p>
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