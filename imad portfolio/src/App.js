import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <img src="/images/profile-photo.jpeg" alt="Profile" className="loader-img blink" />
          <p className="loader-text">Imad's Portfolio Loading...</p>
        </div>
      ) : (
        <div className="app">
          {/* Hero Section */}
          <section className="hero" style={{ backgroundImage: "url('/images/profile-photo.jpeg')" }}>
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1>Hello, I'm Mohammed Imad Umar</h1>
              <p className="tagline">A passionate CSE (AI & ML) student creating impactful digital solutions.</p>
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
            <img src="/images/cover.jpeg" alt="Cover" className="about-img" />
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I'm a Computer Science student specializing in Artificial Intelligence and Machine Learning at St. Martin's Engineering College.
                I love building full-stack applications that solve real-world problems with a mix of logic and creativity.
              </p>
              <p>
                My portfolio reflects impactful projects, including IoT-based systems, Twitter bot detection models, and smart web apps.
                I aim to create technology that simplifies life and brings innovation to everyday problems.
              </p>
              <a href="/resume.pdf" download className="cv-button">Download CV</a>
            </div>
          </section>

          {/* Education */}
          <section className="education">
            <h2>Education</h2>
            <div className="edu-item">
              <img src="/images/st-martins-logo.jpeg" alt="BTech" />
              <div>
                <h3>St. Martin’s Engineering College</h3>
                <p>B.Tech – Computer Science (AI & ML)</p>
              </div>
            </div>
            <div className="edu-item">
              <img src="/images/chaitanya-logo.jpeg" alt="Intermediate" />
              <div>
                <h3>Sri Chaitanya Jr. College</h3>
                <p>Intermediate (MPC)</p>
              </div>
            </div>
            <div className="edu-item">
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
              <img src="/images/twitter-bots-project.png" alt="Twitter Bot" />
              <h3>Detecting Twitter Bots</h3>
              <p>Machine learning model to identify bot accounts on Twitter with real-time API testing.</p>
            </div>
            <div className="project">
              <img src="/images/smart-parking-project.png" alt="Smart Parking" />
              <h3>IoT Smart Parking System</h3>
              <p>IoT-based parking solution using NodeMCU and IR sensors with live dashboard.</p>
            </div>
            <div className="project">
              <img src="/images/college-companion.jpeg" alt="College Companion" />
              <h3>College Companion</h3>
              <p>Web app to manage student life with tasks, attendance, and notes in one place.</p>
            </div>
            <div className="project">
              <img src="/images/electronic-signature.png" alt="E-Signature" />
              <h3>Electronic Signature</h3>
              <p>Web-based signature generator to securely create and download digital signatures.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="contact">
            <h2>Contact</h2>
            <p><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
            <p><strong>Phone:</strong> 8919023402</p>
          </section>

          <footer className="footer">
            <p>&copy; 2025 Mohammed Imad Umar. All rights reserved.</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;