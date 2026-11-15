import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="portfolio-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img
            src="/images/IMG_8037.JPG"
            alt="Lorena Darwiche"
            className="hero-image"
          />
          <div className="hero-text">
            <h1 className="hero-name">
              Lorena <span className="hero-lastname">Darwiche</span>
            </h1>

            <div className="hero-icons">
              <a href="mailto:darwichelorena2@gmail.com" target="_blank" rel="noreferrer" className="social-icon-link">
                <img src="/images/email-icon.svg" alt="Email" className="icon" />
              </a>
              <a href="https://linkedin.com/in/lorenadarwiche" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="icon" />
              </a>
              <a href="https://github.com/lorenadarwiche" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <img src="/images/github-icon.svg" alt="GitHub" className="icon" />
              </a>
            </div>

            <p className="hero-subtitle">A software engineer passionate about <br />creating intuitive, user-centered digital experiences.</p>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about">
        <h2>About Me</h2>
        <div className="about-cards">
          <div className="about-card">
            <h3>Past</h3>
            <p>Since earning my Bachelors degree in Computer Science, I've been diving deeper into the world of web development and sharpening my skills through Leetcode and online courses.</p>
          </div>
          <div className="about-card">
            <h3>Present</h3>
            <p>I am a software developer with experience developing and enhancing financial technology applications, building strong solutions, and working with APL. I enjoy translating complex requirements into practical solutions while continuously expanding my technical skill set.</p>
          </div>
          <div className="about-card">
            <h3>Future</h3>
            <p>I am passionate about building impactful software, exploring emerging technologies, and continuously growing as a developer. I look forward to taking on new challenges, strengthening my technical expertise, and contributing to innovative projects.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
