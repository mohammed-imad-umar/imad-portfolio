import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <header className="p-4 flex justify-between items-center bg-gray-800 shadow">
        <h1 className="text-xl font-bold text-indigo-400">Mohammed Imad Umar</h1>
        <nav className="flex gap-4 text-sm">
          <a href="#about" className="hover:text-indigo-300">About</a>
          <a href="#education" className="hover:text-indigo-300">Education</a>
          <a href="#skills" className="hover:text-indigo-300">Skills</a>
          <a href="#projects" className="hover:text-indigo-300">Projects</a>
          <a href="#contact" className="hover:text-indigo-300">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center p-10">
        <img src="/images/profile-photo.jpeg" alt="Profile"
          className="mx-auto rounded-full shadow-lg border-4 border-indigo-500 max-w-[180px] h-auto mb-4"/>
        <h2 className="text-3xl font-bold text-indigo-400">Hi, I'm Mohammed Imad Umar!</h2>
        <p className="mt-2 text-gray-300">CSE (AI & ML) Student passionate about coding & building innovative solutions.</p>
        <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 transition">
          📄 View Resume
        </a>
      </section>

      {/* About */}
      <section id="about" className="p-8 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-indigo-400 mb-3">About Me</h3>
        <p className="text-gray-300">
          I'm a Computer Science and Engineering (AI & ML) student with a strong foundation in Java, Python, HTML, CSS, and JavaScript.
          I enjoy building practical applications, focusing on clean code and user-friendly design.
          Always eager to learn, collaborate, and create meaningful solutions in tech.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="p-8 bg-gray-800 rounded-lg max-w-4xl mx-auto mt-8">
        <h3 className="text-2xl font-bold text-indigo-400 mb-6 text-center">Education</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <img src="/images/st-martins-logo.jpeg" alt="St. Martins"
              className="mx-auto max-w-[120px] h-auto mb-2 rounded"/>
            <p className="font-bold">BTech CSE (AI&ML)</p>
            <p className="text-gray-400 text-sm">St. Martins Eng. College</p>
            <p className="text-gray-500 text-xs">2022-2026 | CGPA: 8.38</p>
          </div>
          <div>
            <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya"
              className="mx-auto max-w-[120px] h-auto mb-2 rounded"/>
            <p className="font-bold">Intermediate</p>
            <p className="text-gray-400 text-sm">Sri Chaitanya Jr. College</p>
            <p className="text-gray-500 text-xs">2020-2022 | 94.4%</p>
          </div>
          <div>
            <img src="/images/st-francis-logo.jpeg" alt="St. Francis"
              className="mx-auto max-w-[120px] h-auto mb-2 rounded"/>
            <p className="font-bold">High School</p>
            <p className="text-gray-400 text-sm">St. Francis De Sales</p>
            <p className="text-gray-500 text-xs">2020 | Grade: 10.0</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-8 max-w-4xl mx-auto mt-8">
        <h3 className="text-2xl font-bold text-indigo-400 mb-6 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {["Java","Python","HTML","CSS","JavaScript","MySQL","C","AI & ML","Communication","Attention to Detail"].map((skill)=>(
            <button key={skill}
              className="px-4 py-2 bg-gray-700 hover:bg-indigo-600 rounded-full shadow text-sm transition">
              {skill}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 bg-gray-800 rounded-lg max-w-5xl mx-auto mt-8">
        <h3 className="text-2xl font-bold text-indigo-400 mb-6 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <img src="/images/twitter-bots-project.png" alt="Twitter Bots"
              className="mx-auto max-w-[200px] h-auto mb-3 rounded"/>
            <h4 className="font-bold">Detecting Twitter Bots</h4>
            <ul className="text-sm text-gray-400 list-disc list-inside mt-2">
              <li>ML model with 74% accuracy using logistic regression.</li>
              <li>Feature engineering with NLP, tweet frequency & URLs.</li>
              <li>GUI with Tkinter for live analysis & bot prediction.</li>
            </ul>
            <a href="https://github.com/mohammed-imad-umar/twitter-bots" target="_blank"
              className="text-indigo-400 text-sm mt-2 inline-block hover:underline">GitHub Link</a>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <img src="/images/smart-parking-project.png" alt="Smart Parking"
              className="mx-auto max-w-[200px] h-auto mb-3 rounded"/>
            <h4 className="font-bold">Smart Parking System</h4>
            <ul className="text-sm text-gray-400 list-disc list-inside mt-2">
              <li>IoT-based parking with Android + Node.js backend.</li>
              <li>Real-time GPS & sensor integration to reduce search time.</li>
              <li>Secure REST APIs for auth & payments.</li>
            </ul>
            <a href="https://github.com/mohammed-imad-umar/smart-parking" target="_blank"
              className="text-indigo-400 text-sm mt-2 inline-block hover:underline">GitHub Link</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 max-w-3xl mx-auto text-center mt-8">
        <h3 className="text-2xl font-bold text-indigo-400 mb-3">Get in Touch</h3>
        <p className="text-gray-400">Open to collaborations and opportunities!</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a href="mailto:imadu1525@gmail.com" className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">Email</a>
          <a href="https://linkedin.com/in/mohammed-imad-umar" target="_blank" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">LinkedIn</a>
          <a href="https://leetcode.com/mohammed_imad_umar" target="_blank" className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition">LeetCode</a>
          <a href="https://github.com/mohammed-imad-umar" target="_blank" className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">GitHub</a>
          <a href="https://instagram.com/iam_imad_umar" target="_blank" className="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-500 transition">Instagram</a>
          <a href="/images/resume.pdf" target="_blank" className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500 transition">Resume</a>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-xs py-4 mt-8 border-t border-gray-700">
        © 2025 Mohammed Imad Umar. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
