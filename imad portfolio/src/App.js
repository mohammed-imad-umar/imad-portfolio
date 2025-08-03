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
              src={`${process.env.PUBLIC_URL}/images/profile-photo.jpeg`}
              alt="Profile"
              className="loader-img blink"
            />
          </div>
          <p className="loader-text">Imad's Portfolio Loading...</p>
        </div>
      ) : (
        <div className="app">

          {/* Landing Section */}
          <section
            className="landing"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile-photo.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              filter: "blur(2px)",
            }}
          >
            <div className="landing-overlay">
              <div className="landing-text">
                <h1>Hello, I'm Mohammed Imad Umar</h1>
                <p>A passionate AI & ML enthusiast building impactful tech.</p>
                <div className="landing-links">
                  <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/images/github-logo.jpeg`} alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/mohammed-imad-umar-215a682a8" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/images/linkedin-logo.jpeg`} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section className="about">
            <h2>About Me</h2>
            <img
              src={`${process.env.PUBLIC_URL}/images/cover.jpeg`}
              alt="Cover"
              className="about-cover"
            />
            <p>
              I'm a Computer Science student specializing in Artificial Intelligence and
              Machine Learning at St. Martin's Engineering College. I love building tech that
              solves real problems, with a balance of functionality and user experience.
            </p>
            <p>
              My projects include a Twitter bot detector, IoT-based smart parking, and student
              companion platforms. I'm always curious about AI innovations and strive to create
              scalable and efficient solutions that leave a positive impact.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn"
            >
              View CV
            </a>
          </section>

          {/* Education Section */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-item" onClick={() => openModal(`${process.env.PUBLIC_URL}/images/btech.jpeg`, ["B.Tech – Computer Science (AI & ML)", "2021 - 2025", "St. Martin’s Engineering College"])}>
              <img src={`${process.env.PUBLIC_URL}/images/btech.jpeg`} alt="BTech" />
              <div><h3>B.Tech – CSE (AI & ML)</h3><p>2021 - 2025</p></div>
            </div>
            <div className="edu-item" onClick={() => openModal(`${process.env.PUBLIC_URL}/images/inter.jpeg`, ["Intermediate MPC", "2019 - 2021", "Sri Chaitanya Jr. College"])}>
              <img src={`${process.env.PUBLIC_URL}/images/inter.jpeg`} alt="Intermediate" />
              <div><h3>Intermediate (MPC)</h3><p>2019 - 2021</p></div>
            </div>
            <div className="edu-item" onClick={() => openModal(`${process.env.PUBLIC_URL}/images/school.jpeg`, ["10th Grade – GPA 10.0", "2018 - 2019", "St. Francis De Sales High School"])}>
              <img src={`${process.env.PUBLIC_URL}/images/school.jpeg`} alt="School" />
              <div><h3>10th Grade</h3><p>2018 - 2019</p></div>
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
            <div className="project" onClick={() => openModal(`${process.env.PUBLIC_URL}/images/twitter-bots-project.png`, [
              "Built ML model to detect bot accounts on Twitter",
              "Integrated classification metrics",
              "Deployed with an intuitive UI"
            ])}>
              <img src={`${process.env.PUBLIC_URL}/images/twitter-bots-project.png`} alt="Twitter Bot" />
              <h3>Detecting Twitter Bots</h3>
              <div className="project-links">
                <a href="https://github.com/mohammed-imad-umar/twitter-bots" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="project" onClick={() => openModal(`${process.env.PUBLIC_URL}/images/smart-parking-project.png`, [
              "IoT-based smart parking system",
              "Live dashboard to monitor slots",
              "Optimized urban parking infrastructure"
            ])}>
              <img src={`${process.env.PUBLIC_URL}/images/smart-parking-project.png`} alt="Smart Parking" />
              <h3>Smart Parking System</h3>
              <div className="project-links">
                <a href="https://github.com/mohammed-imad-umar/smart-parking" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="project" onClick={() => openModal(`${process.env.PUBLIC_URL}/images/college-companion.jpeg`, [
              "Full-stack + Android app for student life management",
              "Real-time updates and notifications",
              "Deployed with Netlify & Firebase"
            ])}>
              <img src={`${process.env.PUBLIC_URL}/images/college-companion.jpeg`} alt="College Companion" />
              <h3>College Companion</h3>
              <div className="project-links">
                <a href="https://college-companion.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>

            <div className="project" onClick={() => openModal(`${process.env.PUBLIC_URL}/images/electronic-signature.png`, [
              "Digital signature verification system",
              "Implemented secure signing algorithms",
              "User-friendly web UI"
            ])}>
              <img src={`${process.env.PUBLIC_URL}/images/electronic-signature.png`} alt="Electronic Signature" />
              <h3>Electronic Signature</h3>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:imadu1525@gmail.com">imadu1525@gmail.com</a></p>
            <p>Phone: 8919023402</p>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2025 Mohammed Imad Umar. All rights reserved.</p>
          </footer>

          {/* Modal */}
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