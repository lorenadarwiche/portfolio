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
            <p>I discovered my passion for programming at 14 years old during high school. It sparked a growing love for Computer Science over time.</p>
          </div>
          <div className="about-card">
            <h3>Present</h3>
            <p>I build web apps and interactive pages to sharpen my skills as a web developer. Since earning my Bachelors degree in Computer Science, I have been diving deeper into the world of web development.</p>
          </div>
          <div className="about-card">
            <h3>Future</h3>
            <p>I'm excited about the future of programming and eager to contribute meaningfully to the tech industry with my skills and passion.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
