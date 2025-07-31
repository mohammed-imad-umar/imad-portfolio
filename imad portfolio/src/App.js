import React from "react";
import "./App.css";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* ===== HEADER ===== */}
      <header className="bg-indigo-600 text-white py-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Mohammed Imad Umar</h1>
        <nav className="mt-3 space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* ===== HOME ===== */}
      <section id="home" className="text-center py-16 bg-indigo-100">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Mohammed Imad Umar!</h2>
        <p className="text-lg max-w-xl mx-auto">
          A passionate Computer Science and Engineering (AI & ML) student dedicated to building amazing web experiences.
        </p>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <img
          src="/images/profile-photo.jpeg"
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl border-4 border-indigo-200 mb-6"
        />
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Hello! I'm Mohammed Imad Umar, a Computer Science and Engineering (AI & ML) student with a solid foundation in
          programming and web development. I am proficient in Java, Python, HTML, CSS, and JavaScript.
          <br /><br />
          I have a passion for building practical, user-friendly applications and am eager to contribute to innovative
          projects while continuously expanding my technical expertise.
        </p>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="py-16 bg-indigo-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <img src="/images/st-martins-logo.jpeg" alt="St. Martins Engineering College" className="mx-auto h-24 mb-4"/>
            <h3 className="font-bold">BTech in Computer Science Engineering (AI&ML)</h3>
            <p>St. Martins Engineering College<br />2022-2026, Hyderabad<br />CGPA: 8.38</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <img src="/images/chaitanya-logo.jpeg" alt="Sri Chaitanya Jr. College" className="mx-auto h-24 mb-4"/>
            <h3 className="font-bold">Intermediate</h3>
            <p>Sri Chaitanya Jr. College<br />2020-2022, Hyderabad<br />Percentage: 94.4%</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <img src="/images/st-francis-logo.jpeg" alt="St. Francis De Sales High School" className="mx-auto h-24 mb-4"/>
            <h3 className="font-bold">High School</h3>
            <p>St. Francis De Sales High School<br />2020, Korutla<br />Grade: 10.0</p>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-indigo-100 rounded-lg">Java</div>
          <div className="p-4 bg-indigo-100 rounded-lg">Python</div>
          <div className="p-4 bg-indigo-100 rounded-lg">HTML</div>
          <div className="p-4 bg-indigo-100 rounded-lg">CSS</div>
          <div className="p-4 bg-indigo-100 rounded-lg">JavaScript</div>
          <div className="p-4 bg-indigo-100 rounded-lg">MySQL</div>
          <div className="p-4 bg-indigo-100 rounded-lg">C</div>
          <div className="p-4 bg-indigo-100 rounded-lg">AI & ML</div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-16 bg-indigo-50 text-center">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <img src="/images/twitter-bots-project.png" alt="Detecting Twitter Bots Project" className="mx-auto h-40 mb-4"/>
            <h3 className="font-bold text-xl">Detecting Malicious Twitter Bots</h3>
            <p className="text-sm mt-2">
              • Built ML model with logistic regression to classify bots with 74% accuracy.<br/>
              • Engineered features using NLP and tweet frequency for better detection.<br/>
              • Developed Tkinter GUI for real-time tweet analysis.
            </p>
            <a href="https://github.com/mohammed-imad-umar/twitter-bots" className="text-indigo-600 font-semibold block mt-3">GitHub Link</a>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <img src="/images/smart-parking-project.png" alt="Smart Parking System Project" className="mx-auto h-40 mb-4"/>
            <h3 className="font-bold text-xl">Smart Parking System</h3>
            <p className="text-sm mt-2">
              • Developed IoT-based parking system with Android + Node.js.<br/>
              • Integrated GPS & sensors to reduce search time by 40%.<br/>
              • Built secure REST APIs for authentication & payments.
            </p>
            <a href="https://github.com/mohammed-imad-umar/smart-parking" className="text-indigo-600 font-semibold block mt-3">GitHub Link</a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p>Email: <a href="mailto:Imadu1525@gmail.com" className="text-indigo-600">Imadu1525@gmail.com</a></p>
        <p>Phone: <span className="font-semibold">+91 8919023402</span></p>
      </section>

      <footer className="bg-indigo-600 text-white text-center py-4">
        © 2025 Mohammed Imad Umar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
