import { useState } from 'react';
import "./footer.modules.css";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-theme');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Navigation</h3>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Connect</h3>
          <a href="https://github.com/nadaboutou" target="_blank" rel="noreferrer">
            <FaGithub style={{ marginRight: '8px' }} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/nada-boutou-6290b1323/" target="_blank" rel="noreferrer">
            <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
          </a>
          <a href="mailto:boutounada@gmail.com">
            <FaEnvelope style={{ marginRight: '8px' }} /> Email
          </a>
          <a href="tel:+16136010079">+1 (613) 601-0079</a>
        </div>

        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Nada Boutou. All rights reserved.</p>
          
          <div className="theme-toggle">
            <FaSun className={darkMode ? "icon-inactive" : "icon-active"} />
            <label className="toggle-switch">
              <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
              <span className="toggle-slider">
                <div className="toggle-icons">
                  <FaMoon />
                  <FaSun />
                </div>
              </span>
            </label>
            <FaMoon className={darkMode ? "icon-active" : "icon-inactive"} />
          </div>
        </div>
      </div>
      
      <div className="footer-animation"></div>
    </footer>
  );
}