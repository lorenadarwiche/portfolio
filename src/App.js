import React from "react";
import './App.css';

function Portfolio() {
  return (
    <main>
      <div className="portfolio-container">

        {/* Navbar */}
        <div className="navbar">
          <div className="navbar-content">
            <div className="navbar-logo">LD</div>
            <div className="navbar-links">
              {['about', 'experience', 'skill', 'portfolio', 'contact'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item}`}
                  className="nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <a href="/Lorena_Darwiche_Resume.pdf" download className="resume-button">
                Resume
              </a>
            </div>
          </div>
        </div>

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
                <a href="mailto:darwichelorena2@gmail.com" target="_blank" rel="noreferrer">
                  <img src="/images/email-icon.png" alt="Email" className="icon" />
                </a>
                <a href="https://linkedin.com/in/lorenadarwiche" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin-icon.png" alt="LinkedIn" className="icon" />
                </a>
                <a href="https://github.com/lorenadarwiche" target="_blank" rel="noopener noreferrer">
                  <img src="/images/github-icon.png" alt="GitHub" className="icon" />
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

        {/* Experience */}
        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-cards">
            <div className="experience-card">
              <h3>Software Development Intern</h3>
              <p>Amazon Web Services</p>
              <p>May 2023 - August 2023</p>
              <ul>
                <li>Built and deployed a highly available web application using EC2, S3, ELB, and VPC.</li>
                <li>Resolved technical issues across 50+ AWS labs with Cloud Support Engineers.</li>
                <li>Completed AWS Cloud Practitioner certification mastering cloud fundamentals.</li>
              </ul>
            </div>
            <div className="experience-card">
              <h3>Teaching Assistant</h3>
              <p>Microsoft TEALS</p>
              <p>July 2022 - February 2023</p>
              <ul>
                <li>Led tailored lessons in HTML and CSS for 90 students.</li>
                <li>Evaluated assignments and provided feedback to reinforce programming concepts.</li>
                <li>Adapted curriculum materials to drive student engagement.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skill">
          <h2>Skills</h2>
          <div className="skill-cards">
            {[
              ["React.js", "Built multiple React projects, including this portfolio, using a modular, component-based approach for scalability."],
              ["Python", "Used Python to create a GUI project and solve algorithmic challenges, blending development with problem-solving."],
              ["Swift", "Built a SwiftUI app that highlights geological landmarks in the Middle East through a clean, interactive UI."],
              ["MySQL", "Designed and implemented a user database systems for my Integrated Web System during my Software Engineering course."],
              ["PHP", "Built a full-stack app featuring secure login, authentication, and a custom content management system."],
              ["Java", "Built a Trip Status app tracking travel status updates."],
              ["HTML/CSS", "Built fully responsive web projects applying modern design principles."],
              ["JavaScript", "Enhanced web interactivity in React-based and PHP applications."],
              ["C/C++", "Developed Task Scheduling project using Round Robin algorithms."]
            ].map(([title, description], index) => (
              <div key={index} className="skill-card">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <h2>Projects</h2>
          <div className="portfolio-cards">
            <div className="portfolio-card">
              <h3>Portfolio Website</h3>
              <p>Built a website using HTML/CSS and React.js to build a porforlio website, deployed with Vercel.com</p>
              <a href="https://github.com/lorenadarwiche/portfolio" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-icon.png" alt="GitHub" className="project-icon" />
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Integrated Web System</h3>
              <p>Built a full-stack web app featuring user login and shopping cart functionality with PHP/MySQL.</p>
              <a href="https://github.com/lorenadarwiche/IntegratedWebSystem" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-icon.png" alt="GitHub" className="project-icon" />
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Landmarks</h3>
              <p>iOS app using SwiftUI showcasing popular landmarks in an interactive way.</p>
              <a href="https://github.com/lorenadarwiche/Landmarks-Swift" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-icon.png" alt="GitHub" className="project-icon" />
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Trip Status</h3>
              <p>Built a real-time dashboard using Java and JavaFX to update flight destination.</p>
              <a href="https://github.com/lorenadarwiche/Landmarks-Swift" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-icon.png" alt="GitHub" className="project-icon" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-buttons">
            <a href="mailto:darwichelorena2@gmail.com" className="contact-button" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://linkedin.com/in/lorenadarwiche" className="contact-button" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/lorenadarwiche" className="contact-button" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>

        {/* Footer */}
        <footer>
          Lorena <span style={{ color: '#FFD3AC' }}>Darwiche</span> - 2025 ©
        </footer>
      </div>

      {/* Smooth Scroll */}
      <style>{`html { scroll-behavior: smooth; }`}</style>
    </main>
  );
}

export default Portfolio;
