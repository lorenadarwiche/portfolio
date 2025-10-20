import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="portfolio-container">
      <Navbar />

      <section id="projects" className="page-section">
        <h2>Projects</h2>
        <div className="portfolio-cards">
          <div className="portfolio-card">
            <h3>Portfolio Website</h3>
            <p>Built a website using HTML/CSS and React.js to build a portfolio website, deployed with Vercel.com</p>
            <a href="https://github.com/lorenadarwiche/portfolio" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-icon.svg" alt="GitHub" className="project-icon" />
            </a>
          </div>
          <div className="portfolio-card">
            <h3>Integrated Web System</h3>
            <p>Built a full-stack web app featuring user login and shopping cart functionality with PHP/MySQL.</p>
            <a href="https://github.com/lorenadarwiche/Integrated-Web-System" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-icon.svg" alt="GitHub" className="project-icon" />
            </a>
          </div>
          <div className="portfolio-card">
            <h3>Landmarks</h3>
            <p>iOS app using SwiftUI showcasing popular landmarks in an interactive way.</p>
            <a href="https://github.com/lorenadarwiche/Landmarks-Swift" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-icon.svg" alt="GitHub" className="project-icon" />
            </a>
          </div>
          <div className="portfolio-card">
            <h3>Trip Status</h3>
            <p>Built a real-time dashboard using Java and JavaFX to update flight destination.</p>
            <a href="https://github.com/lorenadarwiche/Landmarks-Swift" target="_blank" rel="noopener noreferrer">
              <img src="/images/github-icon.svg" alt="GitHub" className="project-icon" />
            </a>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default Projects;
