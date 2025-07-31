import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="p-6 bg-gray-800 text-white text-center">
        <h1 className="text-4xl font-bold">Mohammed Imad Umar</h1>
        <nav className="mt-4 space-x-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="p-8 text-center">
        <h2 className="text-3xl font-semibold">Hi, I'm Mohammed Imad Umar!</h2>
        <p className="mt-2 text-lg">
          A passionate Computer Science and Engineering (AI & ML) student dedicated to building amazing web experiences.
        </p>
      </section>

      <section id="about" className="p-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <img src="/images/profile-photo.jpeg" alt="Profile"
          className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl border-4 border-indigo-200" />
        <p className="mt-4">
          Hello! I'm Mohammed Imad Umar, a Computer Science and Engineering (AI & ML) student with a solid foundation in
          programming and web development. I am proficient in Java, Python, HTML, CSS, and JavaScript.
        </p>
      </section>

      <section id="education" className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="mb-6">
          <img src="/images/st-martins-logo.jpeg" alt="St. Martins Engineering College" className="w-96 mx-auto" />
          <h3 className="text-xl font-bold">BTech in Computer Science Engineering (AI&ML)</h3>
          <p>St. Martins Engineering College | 2022-2026, Hyderabad</p>
          <p>CGPA: 8.38</p>
        </div>
        <div className="mb-6">
          <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya Jr. College" className="w-96 mx-auto" />
          <h3 className="text-xl font-bold">Intermediate</h3>
          <p>Sri Chaitanya Jr. College | 2020-2022, Hyderabad</p>
          <p>Percentage: 94.4%</p>
        </div>
        <div className="mb-6">
          <img src="/images/st-francis-logo.jpeg" alt="St. Francis De Sales High School" className="w-96 mx-auto" />
          <h3 className="text-xl font-bold">High School</h3>
          <p>St. Francis De Sales High School | 2020, Korutla</p>
          <p>Grade: 10.0</p>
        </div>
      </section>

      <section id="projects" className="p-8 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <div className="mb-6">
          <img src="/images/twitter-bots-project.png" alt="Detecting Twitter Bots Project" className="w-96 mx-auto" />
          <h3 className="text-xl font-bold">Detecting Malicious Twitter Bots</h3>
          <p>• Built ML model with logistic regression to classify bots with 74% accuracy.<br />
            • Engineered features using NLP and tweet frequency for better detection.<br />
            • Developed Tkinter GUI for real-time tweet analysis.
          </p>
          <a href="https://github.com/mohammed-imad-umar/twitter-bot-detection"
            target="_blank" rel="noopener noreferrer"
            className="text-blue-500 underline">GitHub Link</a>
        </div>

        <div className="mb-6">
          <img src="/images/smart-parking-project.png" alt="Smart Parking System Project" className="w-96 mx-auto" />
          <h3 className="text-xl font-bold">Smart Parking System</h3>
          <p>• Developed IoT-based parking system with Android + Node.js.<br />
            • Integrated GPS & sensors to reduce search time by 40%.<br />
            • Built secure REST APIs for authentication & payments.
          </p>
          <a href="https://github.com/mohammed-imad-umar/smart-parking-system"
            target="_blank" rel="noopener noreferrer"
            className="text-blue-500 underline">GitHub Link</a>
        </div>
      </section>

      <section id="contact" className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

        <div className="space-x-4">
          <a href="mailto:Imadu1525@gmail.com" className="text-blue-600">📧 Email</a>
          <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer" className="text-gray-800">🐙 GitHub</a>
          <a href="https://www.linkedin.com/in/mohammed-imad-umar" target="_blank" rel="noopener noreferrer" className="text-blue-800">🔗 LinkedIn</a>
          <a href="https://leetcode.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer" className="text-green-600">💻 LeetCode</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-700">📄 Resume</a>
        </div>
      </section>

      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2025 Mohammed Imad Umar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;