// [START OF FILE]
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
            src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
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
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile.jpeg)`,
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
                A passionate CSE (AI & ML) student building smart and impactful tech.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/github-logo.jpeg`} alt="GitHub" style={{ width: "40px" }} />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-imad-umar-215a682a8" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/linkedin-logo.jpeg`} alt="LinkedIn" style={{ width: "40px" }} />
                </a>
              </div>
            </div>
            <div style={{ height: "400px" }} />
          </section>

          {/* Header */}
          <header className="header">
            <h1>Mohammed Imad Umar</h1>
            <p>Computer Science & Engineering (AI & ML)</p>
          </header>

          {/* About Me Section */}
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
              src={`${process.env.PUBLIC_URL}/images/cover.jpeg`}
              alt="Cover"
              style={{ flex: "1", borderRadius: "10px", width: "100%", maxWidth: "350px" }}
            />
            <div style={{ flex: "2" }}>
              <h2>About Me</h2>
              <p style={{ margin: "20px 0", lineHeight: 1.6 }}>
                I'm a Computer Science student specializing in Artificial Intelligence and Machine Learning at St. Martin's Engineering College. With a strong foundation in full-stack web development and a knack for problem-solving, I aim to create digital tools that are both functional and user-friendly. I believe that code is not just logic—it's a creative expression of problem-solving.
              </p>
              <p style={{ marginBottom: "20px", lineHeight: 1.6 }}>
                My portfolio reflects a range of real-life projects, including a Twitter bot detector and IoT-based smart parking system. I enjoy working on impactful tech that helps people—whether it's automating tasks, managing student life, or building scalable platforms. I'm always seeking new challenges and growth as a tech enthusiast.
              </p>
              <a
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                download
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                  marginTop: "10px"
                }}
              >
                Download CV
              </a>
            </div>
          </section>

          {/* Education Section */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-item">
              <img src={`${process.env.PUBLIC_URL}/images/st-martins-logo.jpeg`} alt="BTech" />
              <div>
                <h3>St. Martin’s Engineering College</h3>
                <p>B.Tech – Computer Science (AI & ML)</p>
              </div>
            </div>
            <div className="edu-item">
              <img src={`${process.env.PUBLIC_URL}/images/chaitanya-logo.jpeg`} alt="Intermediate" />
              <div>
                <h3>Sri Chaitanya Jr. College</h3>
                <p>Intermediate (MPC)</p>
              </div>
            </div>
            <div className="edu-item">
              <img src={`${process.env.PUBLIC_URL}/images/st-francis-logo.jpeg`} alt="School" />
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
                src={`${process.env.PUBLIC_URL}/images/twitter-bots-project.png`}
                alt="Twitter Bot"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/images/twitter-bots-project.png`)}
              />
              <h3>Detecting Twitter Bots</h3>
              <p>
                Built a machine learning model to identify bot accounts on Twitter using behavioral data.
                Integrated classification metrics and API testing for real-time detection.
                Deployed the system with an intuitive UI for demonstration and testing.
              </p>
            </div>
            <div className="project">
              <img
                src={`${process.env.PUBLIC_URL}/images/smart-parking-project.png`}
                alt="Smart Parking"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/images/smart-parking-project.png`)}
              />
              <h3>IoT Smart Parking System</h3>
              <p>
                Developed an IoT-based smart parking system using NodeMCU and IR sensors.
                Created a live dashboard to monitor slot availability and usage stats.
                Aimed at reducing congestion and optimizing urban parking infrastructure.
              </p>
            </div>
            <div className="project">
              <img
                src={`${process.env.PUBLIC_URL}/images/college-companion.jpeg`}
                alt="College Companion"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/images/college-companion.jpeg`)}
              />
              <h3>College Companion</h3>
              <p>
                A web app for students to manage schedules, notes, and assignments in one place.
                Helps organize college life with ease and productivity.
              </p>
            </div>
            <div className="project">
              <img
                src={`${process.env.PUBLIC_URL}/images/electronic-signature.png`}
                alt="Electronic Signature"
                onClick={() => openModal(`${process.env.PUBLIC_URL}/images/electronic-signature.png`)}
              />
              <h3>Electronic Signature</h3>
              <p>
                A tool to draw and download digital signatures for official documents.
                Provides a convenient way to generate and share e-signatures online.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
            <p>Phone: 8919023402</p>
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
                <ul>
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
// [END OF FILE]