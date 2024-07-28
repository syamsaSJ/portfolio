import React, { useState, useEffect } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import gambar from "./WhatsApp_Image_2024-05-28_at_16.36.17_f8a5fee8-removebg-preview.png";
import "./App.css";
import "./index.css"

const Hero = () => {
  const [index, setIndex] = useState(0);
  const phrases = ["Web Developer.", "UI/UX Designer."];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center text-white">
      <div className="flex items-center max-w-screen-lg mx-auto">
        <div className="w-full text-left">
          <h2 className="text-3xl font-semibold mb-4">Hello,</h2>
          <h1 className="text-6xl font-bold mb-4">I am Syamsa Shahira Julyinda,</h1>
          <p className="text-2xl font-semibold mb-4">
            I am a passionate <strong>{phrases[index]}</strong>
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="#about" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
              Learn More
            </a>
          </div>
          <div className="flex space-x-4 text-2xl mt-6">
            <a href="https://instagram.com/syamsha__" className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/syamsa-shahira-julyinda-200965219/" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/syamsaSJ" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64 rounded-full bg-gray-300 overflow-visible mx-auto">
          <img src={gambar} alt="Syamsa Shahira Julyinda" className="absolute -top-8 left-0 right-0 mx-auto w-72 h-72 rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => (
  <div id="about" className="section p-8 text-white bg-gray-900">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="leading-relaxed">
          I am a 7th semester Information Systems student at Telkom Institute of Technology Purwokerto with a strong interest in software development and UI design. I have skills in HTML, CSS, JavaScript, and experience in developing web
          applications using Laravel. Additionally, I am familiar with RAD methodology, SDLC, and IT project management. I have participated in several academic projects and internships that have provided me practical experience in database
          management, application development, and user requirement analysis. I am always eager to learn new things and ready to face challenges in the workplace with enthusiasm and dedication.
        </p>
      </div>
    </div>
  </div>
);

const TechnicalSkills = () => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
    <ul className="list-disc pl-6">
      <li>Web Development: HTML5, CSS, JavaScript</li>
      <li>Framework: Laravel</li>
      <li>Databases: MySQL, Firebase</li>
      <li>Tools: VSCode, Figma, Git, Xampp</li>
      <li>Methodologies: System Development Life Cycle, Rapid Application Development, User Centered Design</li>
    </ul>
  </section>
);

const Education = () => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-2">Education</h3>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="leading-relaxed">
        Information System College Student - Telkom Institute of Technology | 2021 - present
        <br />
        GPA present: 3.9/4.0
        <br />
        This department prepares graduates for profiles such as IS Developer, IT Consultant, and Database Administrator
      </p>
    </div>
  </section>
);

const WorkExperience = () => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="leading-relaxed">
        <strong>MBKM - Kampus Mengajar Batch 6</strong> | Aug 2023 - Dec 2023
        <br />
        Designing Instagram feeds | @km6_smksbinabudiluhur
        <br />
        Teaching
        <br />
        Handling communication media
        <br />
        IT Duties as operator
        <br />
        <br />
        <strong>Internship UI/UX Designer - CV. Satria Tech</strong> | May 2024 - Jun 2024
        <br />
        Designing the website satriatech.com using WordPress with User-Centered Design methodology
      </p>
    </div>
  </section>
);

const Resume = () => (
  <div id="resume" className="section p-8 text-white bg-gray-800">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <TechnicalSkills />
      <Education />
      <WorkExperience />
    </div>
  </div>
);

const Projects = () => (
  <div id="projects" className="section p-8 text-white bg-gray-700">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <strong>Cafe Explorer on Purwokerto Website</strong> |{" "}
        <a href="https://cafeexploreronpwt.netlify.app/" className="text-blue-500 hover:underline">
          Live Demo
        </a>
        <p>Development using HTML5, CSS, and JavaScript</p>
        <p>Database using Firebase</p>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div id="contact" className="section p-8 text-white bg-gray-600">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="leading-relaxed">
          <FaMapMarkerAlt className="inline-block mr-2" /> Address: Griya Bukit Jaya BLOK R3 NO 20, Gunung Putri, Bogor
          <br />
          <FaPhone className="inline-block mr-2" /> Phone: 0878-0328-0418
          <br />
          <FaEnvelope className="inline-block mr-2" /> Email: julyindasyamsa@gmail.com
        </p>
      </div>
    </div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleDownload = () => {
    const cvUrl = process.env.PUBLIC_URL + "/CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <nav className="bg-gray-900 px-4 py-4 w-full flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <span className="text-white text-xl font-bold ml-2">My Portfolio</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className={`text-white hover:text-blue-400 transition ${activeSection === "about" ? "text-blue-400" : ""}`}>
            About Me
          </a>
          <a href="#resume" className={`text-white hover:text-blue-400 transition ${activeSection === "resume" ? "text-blue-400" : ""}`}>
            Resume
          </a>
          <a href="#projects" className={`text-white hover:text-blue-400 transition ${activeSection === "projects" ? "text-blue-400" : ""}`}>
            Projects
          </a>
          <a href="#contact" className={`text-white hover:text-blue-400 transition ${activeSection === "contact" ? "text-blue-400" : ""}`}>
            Contact
          </a>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition duration-300" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </nav>
      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-4 text-center shadow-inner">
        <p className="mt-8 mb-8">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p>Create with React </p>
      </footer>
    </div>
  );
}

export default App;
