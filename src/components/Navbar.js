import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">LD</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">About</Link>
          <Link to="/experience" className="nav-link">Experience</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <a href="/Lorena_Darwiche_Resume.pdf" download className="resume-button">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
