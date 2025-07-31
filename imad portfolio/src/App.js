import React, { useState, useEffect } from 'react';

// Main App component for the portfolio
const App = () => {
  // State for navigation to handle active section highlighting (optional)
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Update active section for navigation
    }
  };

  // Effect to update active section based on scroll position (optional)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      let currentActive = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter antialiased">
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Font for the entire application */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-indigo-50 transition-colors duration-300">Mohammed Imad Umar</a>
          <ul className="flex space-x-6">
            {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-lg font-medium capitalize py-2 px-4 rounded-md transition-all duration-300 ${
                    activeSection === section ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20"> {/* Padding top to account for fixed nav */}

        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-b-xl shadow-xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-fade-in-down">
              Hi, I'm <span className="text-yellow-300">Mohammed Imad Umar</span>!
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto animate-fade-in-up">
              A passionate <span className="font-semibold text-yellow-200">Computer Science and Engineering (AI & ML) student</span> dedicated to building amazing web experiences.
            </p>
            <div className="flex justify-center space-x-4 pt-4 animate-fade-in-up">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white p-6 rounded-xl shadow-lg mx-auto my-10 max-w-6xl">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-10">
              <div className="md:w-1/3 mb-6 md:mb-0">
                {/* Profile Photo - URL updated */}
                <img
                  src="https://raw.githubusercontent.com/mohammed-imad-umar/imad-portfolio/main/images/profile-photo.jpeg"
                  alt="Your Photo"
                  className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl border-4 border-indigo-200"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/6366F1/FFFFFF?text=Placeholder"; }}
                />
              </div>
              <div className="md:w-2/3 text-lg text-gray-700 text-left leading-relaxed">
                <p className="mb-4">
                  Hello! I'm <span className="font-semibold text-indigo-600">Mohammed Imad Umar</span>, a Computer Science and Engineering (AI & ML) student with a solid foundation in programming and web development. I am proficient in Java, Python, HTML, CSS, and JavaScript.
                </p>
                <p className="mb-4">
                  I have a passion for building practical, user-friendly applications and am eager to contribute to innovative projects while continuously expanding my technical expertise.
                </p>
                <p>
                  Outside of my studies, I enjoy [Your hobbies/interests, e.g., hiking, reading, playing guitar]. I'm always open to new challenges and collaborations!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-100 p-6 rounded-xl shadow-lg mx-auto my-10 max-w-6xl">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* BTech Education Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 text-left">
                {/* St. Martins Logo - URL updated */}
                <img
                  src="https://raw.githubusercontent.com/mohammed-imad-umar/imad-portfolio/main/images/st-martins-logo.jpeg"
                  alt="St. Martins Engineering College Logo"
                  className="w-24 h-24 object-contain mx-auto mb-4 rounded-md"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/E0E7FF/4F46E5?text=College+Logo"; }}
                />
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">BTech in Computer Science Engineering (AI&ML)</h3>
                <p className="text-gray-700 text-lg mb-2">St. Martins Engineering College</p>
                <p className="text-gray-600 text-base mb-2">2022-2026, Hyderabad</p>
                <p className="text-gray-600 text-base">CGPA: 8.38</p>
              </div>

              {/* Intermediate Education Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 text-left">
                {/* Sri Chaitanya Logo - URL updated */}
                <img
                  src="https://raw.githubusercontent.com/mohammed-imad-umar/imad-portfolio/main/images/chaitanya-logo.jpeg"
                  alt="Sri Chaitanya Jr. College Logo"
                  className="w-24 h-24 object-contain mx-auto mb-4 rounded-md"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/E0E7FF/4F46E5?text=College+Logo"; }}
                />
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Intermediate</h3>
                <p className="text-gray-700 text-lg mb-2">Sri Chaitanya Jr. College</p>
                <p className="text-gray-600 text-base mb-2">2020-2022, Hyderabad</p>
                <p className="text-gray-600 text-base">Percentage: 94.4%</p>
              </div>

              {/* High School Education Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 text-left">
                {/* St. Francis Logo - URL updated */}
                <img
                  src="https://raw.githubusercontent.com/mohammed-imad-umar/imad-portfolio/main/images/st-francis-logo.jpeg"
                  alt="St. Francis De Sales High School Logo"
                  className="w-24 h-24 object-contain mx-auto mb-4 rounded-md"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/E0E7FF/4F46E5?text=School+Logo"; }}
                />
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">High School</h3>
                <p className="text-gray-700 text-lg mb-2">St. Francis De Sales High School</p>
                <p className="text-gray-600 text-base mb-2">2020, Korutla</p>
                <p className="text-gray-600 text-base">Grade: 10.0</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white p-6 rounded-xl shadow-lg mx-auto my-10 max-w-6xl">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Java</h3>
                <p className="text-gray-600 text-sm">Programming Language</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Python</h3>
                <p className="text-gray-600 text-sm">Programming Language</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">HTML</h3>
                <p className="text-gray-600 text-sm">Web Development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">CSS</h3>
                <p className="text-gray-600 text-sm">Web Styling</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">JavaScript</h3>
                <p className="text-gray-600 text-sm">Web Development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">MySQL</h3>
                <p className="text-gray-600 text-sm">Database Management</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">C</h3>
                <p className="text-gray-600 text-sm">Programming Language</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">AI & ML</h3>
                <p className="text-gray-600 text-sm">Artificial Intelligence & Machine Learning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Self-Motivation</h3>
                <p className="text-gray-600 text-sm">Soft Skill</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Attention To Detail</h3>
                <p className="text-gray-600 text-sm">Soft Skill</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Communication</h3>
                <p className="text-gray-600 text-sm">Soft Skill</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white p-6 rounded-xl shadow-lg mx-auto my-10 max-w-6xl">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1: Detecting Malicious Twitter Bots */}
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                {/* Twitter Bots Project Image - URL updated */}
                <img
                  src="https://raw.githubusercontent.com/mohammed-imad-umar/imad-portfolio/main/images/twitter-bots-project.png"
                  alt="Detecting Malicious Twitter Bots"
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/E0E7FF/4F46E5?text=Placeholder"; }}
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Detecting Malicious Twitter Bots</h3>
                  <ul className="list-disc list-inside text-gray-700 text-base mb-4 space-y-1">
                    <li>Designed and implemented a machine learning model using logistic regression, achieving 74% accuracy in classifying Twitter bots vs genuine users.</li>
                    <li>Engineered features like tweet frequency, URL usage, and follower ratio with NLP techniques to enhance detection performance.</li>
                    <li>Developed a GUI using Tkinter to allow real-time tweet analysis and bot prediction from uploaded datasets.</li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 font-medium">
                      GitHub Link
                    </a>
                    {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 font-medium">
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </div>

              {/* Project Card 2: Smart Parking System */}
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                {/* Smart Parking Project Image - URL updated */}
                <img
                  src="https://raw.githubusercontent.com/mohammed-imad-umar/imad-portfolio/main/images/smart-parking-project.png"
                  alt="Smart Parking System"
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/E0E7FF/4F46E5?text=Placeholder"; }}
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Smart Parking System</h3>
                  <ul className="list-disc list-inside text-gray-700 text-base mb-4 space-y-1">
                    <li>Built and deployed a full-stack IoT-integrated smart parking system using Android (Java), Node.js, and MongoDB.</li>
                    <li>Integrated GPS and real-time sensor data for dynamic parking slot tracking, reducing search time by 40%.</li>
                    <li>Developed secure backend REST APIs for user authentication and payment gateway integration.</li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 font-medium">
                      GitHub Link
                    </a>
                    {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 font-medium">
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100 p-6 rounded-xl shadow-lg mx-auto my-10 max-w-6xl">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
            </p>
            <div className="flex flex-col items-center space-y-6">
              <a
                href="mailto:Imadu1525@gmail.com"
                className="bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
                target="_blank" rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18" />
                </svg>
                <span>Imadu1525@gmail.com</span>
              </a>
              <p className="text-lg text-gray-700">
                Phone: +91 8919023402
              </p>
              <div className="flex space-x-6">
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/mohammed-imad-umar" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* GitHub Icon */}
                <a href="https://github.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.091 8.197-11.387c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                {/* LeetCode Icon */}
                <a href="https://leetcode.com/mohammed-imad-umar" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M13.483 0a1.23 1.23 0 0 0-.963.637L7.152 12.13l-4.24-4.24a1.23 1.23 0 0 0-1.739 0L.637 8.411a1.23 1.23 0 0 0 0 1.739l6.364 6.364a1.23 1.23 0 0 0 1.739 0l6.364-6.364a1.23 1.23 0 0 0 0-1.739L15.222.637A1.23 1.23 0 0 0 14.259 0zm-1.739 1.739l4.24 4.24L12.13 12.13l-4.24-4.24z"/>
                    <path d="M12 12c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
                  </svg>
                </a>
                {/* CV Link */}
                <a
                  href="https://raw.githubusercontent.com/mohammed-imad-umar/imad-portfolio/main/images/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                    <path d="M14 2h-4c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-12l-6-6zm-2 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-2v-3.586l3.586 3.586h-3.586z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 text-center rounded-t-xl shadow-inner">
          <p>&copy; {new Date().getFullYear()} Mohammed Imad Umar. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
