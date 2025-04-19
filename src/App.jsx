// src/App.jsx
import { Link, Element } from "react-scroll";
import { useState } from "react";
import ContactSection from "./components/ContactSection";
import "./App.css";
import profilePic from "../public/profile.jpg";

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
            <h3>I'm Kerushani and I'm a <strong style={{ color: '#a0c4ff' }}>software developer</strong>.</h3>
            <p>
  I'm a <strong style={{ color: '#a0c4ff' }}>Systems Design Engineering student</strong> at the University of Waterloo with a passion for building <strong style={{ color: '#a0c4ff' }}> systems</strong> and <strong style={{ color: '#a0c4ff' }}>impactful digital experiences</strong>. I've had the opportunity to work in <strong style={{ color: '#a0c4ff' }}>backend</strong>, <strong style={{ color: '#a0c4ff' }}>frontend</strong>, and <strong style={{ color: '#a0c4ff' }}>full-stack</strong> roles across industries like <strong style={{ color: '#a0c4ff' }}>manufacturing</strong>, <strong style={{ color: '#a0c4ff' }}>entertainment</strong>, and <strong style={{ color: '#a0c4ff' }}>AI tooling</strong>.
</p>

<p style={{ marginTop: '1rem' }}>
  <em>
    For more information on my experiences, feel free to{' '}
    <a style={{ color: '#a0c4ff' }}>
      contact me below
    </a>
    !
  </em>
</p>
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
