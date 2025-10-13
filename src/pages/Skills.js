import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Skills() {
  const skills = [
    ["React.js", "Built multiple React projects, including this portfolio, using a modular, component-based approach for scalability."],
    ["Python", "Used Python to create a GUI project and solve algorithmic challenges, blending development with problem-solving."],
    ["Swift", "Built a SwiftUI app that highlights geological landmarks in the Middle East through a clean, interactive UI."],
    ["MySQL", "Designed and implemented a user database systems for my Integrated Web System during my Software Engineering course."],
    ["PHP", "Built a full-stack app featuring secure login, authentication, and a custom content management system."],
    ["Java", "Built a Trip Status app tracking travel status updates."],
    ["HTML/CSS", "Built fully responsive web projects applying modern design principles."],
    ["JavaScript", "Enhanced web interactivity in React-based and PHP applications."],
    ["C/C++", "Developed Task Scheduling project using Round Robin algorithms."]
  ];

  return (
    <div className="portfolio-container">
      <Navbar />

      <section id="skills" className="page-section">
        <h2>Skills</h2>
        <div className="skill-cards">
          {skills.map(([title, description], index) => (
            <div key={index} className="skill-card">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default Skills;
