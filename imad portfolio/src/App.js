import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Mohammed Imad Umar</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <img src="/images/profile-photo.jpeg" alt="Profile" className="profile-img" />
        <p>
          Hello! I'm Mohammed Imad Umar, a Computer Science and Engineering (AI & ML) student with strong skills in Java, Python, HTML, CSS, and JavaScript.
          I love creating user-friendly applications and working on AI/ML projects.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="edu-card">
          <img src="/images/st-martins-logo.jpeg" alt="St. Martins" className="edu-img" />
          <h3>B.Tech in CSE (AI & ML)</h3>
          <p>St. Martins Engineering College | 2022-2026 | CGPA: 8.38</p>
        </div>
        <div className="edu-card">
          <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya" className="edu-img" />
          <h3>Intermediate</h3>
          <p>Sri Chaitanya Jr. College | 2020-2022 | Percentage: 94.4%</p>
        </div>
        <div className="edu-card">
          <img src="/images/st-francis-logo.jpeg" alt="St. Francis" className="edu-img" />
          <h3>High School</h3>
          <p>St. Francis De Sales High School | 2020 | Grade: 10.0</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Java</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>MySQL</li>
          <li>AI & ML</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="project-card">
          <img src="/images/twitter-bots-project.png" alt="Twitter Bots" className="proj-img" />
          <h3>Detecting Malicious Twitter Bots</h3>
          <ul>
            <li>Built ML model with logistic regression achieving 74% accuracy.</li>
            <li>Engineered NLP features like tweet frequency and URL usage.</li>
            <li>Created a Tkinter GUI for real-time analysis.</li>
          </ul>
          <a className="badge" href="https://github.com/mohammed-imad-umar/twitter-bots" target="_blank">GitHub Repo</a>
        </div>
        <div className="project-card">
          <img src="/images/smart-parking-project.png" alt="Smart Parking" className="proj-img" />
          <h3>Smart Parking System</h3>
          <ul>
            <li>IoT-integrated parking system using Android + Node.js.</li>
            <li>GPS & sensors reduce search time by 40%.</li>
            <li>Secure REST APIs for authentication & payments.</li>
          </ul>
          <a className="badge" href="https://github.com/mohammed-imad-umar/smart-parking" target="_blank">GitHub Repo</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Get in Touch</h2>
        <div className="badges">
          <a href="mailto:Imadu1525@gmail.com" className="badge email">📧 Email</a>
          <a href="https://www.linkedin.com/in/mohammed-imad-umar" className="badge linkedin" target="_blank">💼 LinkedIn</a>
          <a href="https://github.com/mohammed-imad-umar" className="badge github" target="_blank">🐙 GitHub</a>
          <a href="https://leetcode.com/u/mohammed-imad-umar" className="badge leetcode" target="_blank">🟡 LeetCode</a>
          <a href="/resume.pdf" className="badge resume" target="_blank">📄 Resume</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Mohammed Imad Umar. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;