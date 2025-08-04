import React, { useState, useEffect } from "react";
import "./App.css";

const skills = [
  {
    name: "Java",
    icon: "/images/skills/java.svg", // You can use SVGs or PNGs for icons
    desc: "Robust OOP language for scalable backend and Android apps.",
    color: "#f89820"
  },
  {
    name: "Python",
    icon: "/images/skills/python.svg",
    desc: "Versatile scripting for AI, ML, automation, and web.",
    color: "#3572A5"
  },
  {
    name: "SQL",
    icon: "/images/skills/sql.svg",
    desc: "Efficient data querying and relational database design.",
    color: "#e38c00"
  },
  {
    name: "HTML",
    icon: "/images/skills/html.svg",
    desc: "Semantic markup for accessible, SEO-friendly web pages.",
    color: "#e34c26"
  },
  {
    name: "CSS",
    icon: "/images/skills/css.svg",
    desc: "Modern, responsive, and animated web styling.",
    color: "#264de4"
  },
  {
    name: "C",
    icon: "/images/skills/c.svg",
    desc: "Low-level programming for performance-critical systems.",
    color: "#00599C"
  },
  {
    name: "JavaScript",
    icon: "/images/skills/javascript.svg",
    desc: "Dynamic, interactive web experiences and full-stack apps.",
    color: "#f7df1e"
  },
  {
    name: "DSA",
    icon: "/images/skills/dsa.svg",
    desc: "Strong foundation in algorithms and data structures.",
    color: "#6c63ff"
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [activeEducation, setActiveEducation] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-circle blink">
          <img src="/images/profile-photo.jpeg" alt="Loading" className="loader-img blink" />
        </div>
        <p className="loader-text blink">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/profile-photo.jpeg" alt="Profile" className="hero-bg blur-img" />
        <div className="hero-text">
          <h1>
            <span className="gradient-text">Hello, I'm Imad Umar</span>
          </h1>
          <p>Crafting intelligent solutions with AI & modern web technologies.</p>
          <div className="social-icons">
            <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-logo.jpeg" alt="GitHub" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-logo.jpeg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <img src="/images/cover.jpeg" alt="Cover" className="about-cover big-cover" />
        <div>
          <h2>About Me</h2>
          <p>
            I'm a passionate CSE (AI & ML) student focused on building scalable
            applications and intelligent machine learning systems. I love solving
            complex problems with simple, elegant solutions.
          </p>
          <p>
            My work involves crafting clean, efficient code and designing
            user-friendly interfaces. Always eager to learn and experiment with
            new technologies to create impactful projects.
          </p>
          <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn">
            View CV
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <div className="edu-card" onClick={() => setActiveEducation(activeEducation === 1 ? null : 1)}>
          <img src="/images/st-martins-logo.jpeg" alt="BTech" />
          <div className="edu-info">
            <h3>B.Tech - CSE (AI & ML) (2022 - 2026)</h3>
            {activeEducation === 1 && <p className="edu-grade">CGPA: 8.4</p>}
          </div>
        </div>
        <div className="edu-card" onClick={() => setActiveEducation(activeEducation === 2 ? null : 2)}>
          <img src="/images/chaitanya-logo.jpeg" alt="Intermediate" />
          <div className="edu-info">
            <h3>Intermediate - MPC (2020 - 2022)</h3>
            {activeEducation === 2 && <p className="edu-grade">Percentage: 94.4%</p>}
          </div>
        </div>
        <div className="edu-card" onClick={() => setActiveEducation(activeEducation === 3 ? null : 3)}>
          <img src="/images/st-francis-logo.jpeg" alt="School" />
          <div className="edu-info">
            <h3>Schooling - SSC (2020)</h3>
            {activeEducation === 3 && <p className="edu-grade">GRADE: 10.0</p>}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-badges-row">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`skill-badge${activeSkill === idx ? " active" : ""}`}
              style={{ "--badge-color": skill.color }}
              onMouseEnter={() => setActiveSkill(idx)}
              onMouseLeave={() => setActiveSkill(null)}
              tabIndex={0}
            >
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-desc">
                {activeSkill === idx && <span>{skill.desc}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        {/* ... existing project cards ... */}
        {/* College Companion */}
        <div className="project-card" onClick={() => setActiveProject(activeProject === 1 ? null : 1)}>
          <img src="/images/college-companion.jpeg" alt="College Companion" />
          <h3>College Companion</h3>
          <div className="badges">
            <a href="https://college-companion-by-imad.netlify.app/" target="_blank" className="live-demo">🚀 Live Demo</a>
            <a href="https://github.com/mohammed-imad-umar/college-companion" target="_blank" className="github-badge">GitHub</a>
          </div>
          {activeProject === 1 && (
            <div className="project-points cinematic">
              <p>📌 Smart academic companion with interactive dashboard.</p>
              <p>📌 Integrated student resource management.</p>
              <p>📌 Clean UI and responsive design.</p>
            </div>
          )}
        </div>
        {/* ... other project cards ... */}
        <div className="project-card" onClick={() => setActiveProject(activeProject === 2 ? null : 2)}>
          <img src="/images/electronic-signature.png" alt="Electronic Signature" />
          <h3>Electronic Signature</h3>
          <div className="badges">
            <a href="https://electronic-signature.netlify.app/" target="_blank" className="live-demo">🚀 Live Demo</a>
            <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-" target="_blank" className="github-badge">GitHub</a>
          </div>
          {activeProject === 2 && (
            <div className="project-points cinematic">
              <p>📌 Digital signing system with secure authentication.</p>
              <p>📌 Smooth canvas-based signature capture.</p>
              <p>📌 Easy integration with other platforms.</p>
            </div>
          )}
        </div>
        <div className="project-card" onClick={() => setActiveProject(activeProject === 3 ? null : 3)}>
          <img src="/images/smart-parking-project.png" alt="Smart Parking" />
          <h3>Smart Parking System</h3>
          <div className="badges">
            <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" className="github-badge">GitHub</a>
          </div>
          {activeProject === 3 && (
            <div className="project-points cinematic">
              <p>📌 IoT based real-time parking management.</p>
              <p>📌 Mobile app + cloud integrated system.</p>
              <p>📌 Secure and scalable architecture.</p>
            </div>
          )}
        </div>
        <div className="project-card" onClick={() => setActiveProject(activeProject === 4 ? null : 4)}>
          <img src="/images/twitter-bots-project.png" alt="Twitter Bots" />
          <h3>Detecting Twitter Bots</h3>
          <div className="badges">
            <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" className="github-badge">GitHub</a>
          </div>
          {activeProject === 4 && (
            <div className="project-points cinematic">
              <p>📌 ML model to detect bot accounts on Twitter.</p>
              <p>📌 High accuracy with real-time prediction.</p>
              <p>📌 Optimized for large datasets.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>📧 imadu1525@gmail.com</p>
        <p>📱 8919023402</p>
      </section>

      <footer>
        <p>© 2025 Imad Umar | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
