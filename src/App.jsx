// src/App.jsx
import { Link, Element } from "react-scroll";
import { useState } from "react";
import ContactSection from "./components/ContactSection";
import "./App.css";
import profilePic from "./assets/profile.jpg";

const skills = [
  "Python", "Java", "C", "C++", "Elixir", "TypeScript",
  "JavaScript", "SQL", "HTML", "CSS"
];

function App() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <div>
      <header>
        <nav className="container">
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
      <Element name="home" className="hero">
  <div className="hero-content-with-image container">
    <img src={profilePic} alt="Kerushani Sivaneswaran" className="profile-image" />
    <div className="hero-text">
      <p>Hello I'm</p>
      <h1>Kerushani</h1>
      <h2>Software Developer</h2>
      <a href="mailto:ksivanes@uwaterloo.ca" className="resume-btn">
        Resume
      </a>
      <div className="social-icons">
        <a href="https://github.com/Kerushani" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kerushani/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</Element>
        <Element name="about">
          <div className="container section">
            <h2>About Me</h2>
            <p>I'm Kerushani and I'm a software engineer.</p>
            <p>I am a Systems Design Engineering student at the University of Waterloo.</p>
          </div>
        </Element>

        <Element name="skills" className="section container">
          <h2>Skills</h2>
          <div className="skills-tabs">
            {skills.map((skill) => (
              <button
                key={skill}
                className={`skill-tab ${selectedSkill === skill ? "active" : ""}`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </Element>

        <Element name="contact" className="section container">
          <ContactSection />
        </Element>
      </main>

      <footer>
        <p>&copy; 2025 Kerushani Sivaneswaran</p>
        <div className="social-icons">
          <a href="https://github.com/Kerushani" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kerushani/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
