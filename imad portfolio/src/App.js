import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      
      {/* Navbar */}
      <header className="bg-indigo-600 text-white p-4 flex justify-center gap-6 font-semibold shadow-md sticky top-0">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </header>

      {/* Home Section */}
      <section id="home" className="text-center p-8">
        <h1 className="text-4xl font-bold mb-2">Mohammed Imad Umar</h1>
        <p className="text-lg text-gray-600">
          Hi, I'm a passionate CSE (AI & ML) student building amazing web experiences.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-white shadow rounded max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <img
          src="/images/profile-photo.jpeg"
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg border-4 border-indigo-200 mb-4"
        />
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Hello! I'm Mohammed Imad Umar, a Computer Science and Engineering (AI & ML) student with a solid
          foundation in Java, Python, HTML, CSS, and JavaScript. I love building user-friendly apps and
          continuously expanding my technical expertise.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="/images/st-martins-logo.jpeg" alt="St. Martins" className="rounded-lg w-full h-48 object-cover mb-3" />
            <h3 className="font-bold">BTech in CSE (AI&ML)</h3>
            <p>St. Martins Engineering College</p>
            <p>2022-2026 | CGPA: 8.38</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="/images/chaitanya-logo.jpeg" alt="Chaitanya" className="rounded-lg w-full h-48 object-cover mb-3" />
            <h3 className="font-bold">Intermediate</h3>
            <p>Sri Chaitanya Jr. College</p>
            <p>2020-2022 | 94.4%</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="/images/st-francis-logo.jpeg" alt="St. Francis" className="rounded-lg w-full h-48 object-cover mb-3" />
            <h3 className="font-bold">High School</h3>
            <p>St. Francis De Sales High School</p>
            <p>2020 | GPA: 10.0</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Java","Python","HTML","CSS","JavaScript","MySQL","C","AI & ML"].map(skill => (
            <span key={skill} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium shadow">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/images/twitter-bots-project.png" alt="Twitter Bots" className="rounded-lg w-full h-60 object-cover mb-3" />
            <h3 className="font-bold mb-2">Detecting Malicious Twitter Bots</h3>
            <ul className="text-gray-700 list-disc ml-5">
              <li>Built ML model with logistic regression, 74% accuracy.</li>
              <li>Engineered features using NLP & tweet frequency.</li>
              <li>Created Tkinter GUI for real-time tweet analysis.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/images/smart-parking-project.png" alt="Smart Parking" className="rounded-lg w-full h-60 object-cover mb-3" />
            <h3 className="font-bold mb-2">Smart Parking System</h3>
            <ul className="text-gray-700 list-disc ml-5">
              <li>Developed IoT-based parking system with Android + Node.js.</li>
              <li>Integrated GPS & sensors to reduce search time by 40%.</li>
              <li>Built secure REST APIs for authentication & payments.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact + Badges */}
      <section id="contact" className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:Imadu1525@gmail.com">
            <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
          </a>
          <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/mohammed-imad-umar" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black" alt="LeetCode" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Resume-0A66C2?style=for-the-badge&logo=readthedocs&logoColor=white" alt="Resume" />
          </a>
        </div>
      </section>

      <footer className="bg-indigo-600 text-white text-center py-4 mt-8">
        © 2025 Mohammed Imad Umar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
