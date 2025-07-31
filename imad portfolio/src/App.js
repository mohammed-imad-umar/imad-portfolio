import React from 'react';

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Mohammed Imad Umar</h1>
        <p className="text-lg">CSE (AI & ML) Student | Web & ML Enthusiast</p>
      </header>

      {/* About */}
      <section className="p-8 text-center">
        <img 
          src="/images/profile-photo.jpeg" 
          alt="Profile" 
          className="rounded-full w-48 h-48 object-cover mx-auto shadow-xl border-4 border-indigo-200" 
        />
        <h2 className="text-2xl font-bold mt-4">About Me</h2>
        <p className="mt-2 max-w-2xl mx-auto">
          Hello! I'm Mohammed Imad Umar, a Computer Science and Engineering (AI & ML) student with a solid foundation 
          in programming and web development. Proficient in Java, Python, HTML, CSS, and JavaScript. Passionate about 
          building practical, user-friendly applications and eager to contribute to innovative projects.
        </p>
      </section>

      {/* Education */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <img 
              src="/images/st-martins-logo.jpeg" 
              alt="St. Martins" 
              className="mx-auto rounded-lg object-contain max-w-[160px] max-h-[160px]" 
            />
            <h3 className="font-bold mt-2">B.Tech CSE (AI & ML)</h3>
            <p>St. Martins Engineering College (2022–2026)</p>
            <p className="font-semibold">CGPA: 8.38</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <img 
              src="/images/chaitanya-logo.jpeg" 
              alt="Sri Chaitanya" 
              className="mx-auto rounded-lg object-contain max-w-[160px] max-h-[160px]" 
            />
            <h3 className="font-bold mt-2">Intermediate</h3>
            <p>Sri Chaitanya Jr. College (2020–2022)</p>
            <p className="font-semibold">Percentage: 94.4%</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <img 
              src="/images/st-francis-logo.jpeg" 
              alt="St. Francis" 
              className="mx-auto rounded-lg object-contain max-w-[160px] max-h-[160px]" 
            />
            <h3 className="font-bold mt-2">High School</h3>
            <p>St. Francis De Sales High School (2020)</p>
            <p className="font-semibold">Grade: 10.0</p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gray-100 p-4 rounded-lg shadow text-center">
            <img 
              src="/images/twitter-bots-project.png" 
              alt="Twitter Bots" 
              className="mx-auto rounded-lg object-cover max-w-full h-56" 
            />
            <h3 className="font-bold mt-3">Detecting Malicious Twitter Bots</h3>
            <ul className="mt-2 text-sm text-left list-disc list-inside">
              <li>Built ML model with logistic regression (74% accuracy)</li>
              <li>Engineered features using NLP & tweet frequency</li>
              <li>Developed Tkinter GUI for real-time tweet analysis</li>
            </ul>
            <a 
              href="https://github.com/mohammed-imad-umar/twitter-bots" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 font-semibold"
            >
              GitHub Link
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow text-center">
            <img 
              src="/images/smart-parking-project.png" 
              alt="Smart Parking" 
              className="mx-auto rounded-lg object-cover max-w-full h-56" 
            />
            <h3 className="font-bold mt-3">Smart Parking System</h3>
            <ul className="mt-2 text-sm text-left list-disc list-inside">
              <li>Developed IoT-based parking system with Android + Node.js</li>
              <li>Integrated GPS & sensors to reduce search time by 40%</li>
              <li>Built secure REST APIs for authentication & payments</li>
            </ul>
            <a 
              href="https://github.com/mohammed-imad-umar/smart-parking" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 font-semibold"
            >
              GitHub Link
            </a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="p-8 bg-white text-center">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          <a href="https://linkedin.com/in/your-link" className="bg-blue-600 text-white px-4 py-2 rounded-lg">LinkedIn</a>
          <a href="https://leetcode.com/your-profile" className="bg-yellow-500 text-black px-4 py-2 rounded-lg">LeetCode</a>
          <a href="mailto:Imadu1525@gmail.com" className="bg-green-600 text-white px-4 py-2 rounded-lg">Email</a>
          <a href="https://github.com/mohammed-imad-umar" className="bg-gray-800 text-white px-4 py-2 rounded-lg">GitHub</a>
          <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white px-4 py-2 rounded-lg">Resume</a>
        </div>
      </section>

      <footer className="p-4 text-center bg-gray-200 mt-6">
        © 2025 Mohammed Imad Umar. All rights reserved.
      </footer>
    </div>
  );
}
