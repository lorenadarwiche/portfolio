import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Experience() {
  return (
    <div className="portfolio-container">
      <Navbar />

      <section id="experience" className="page-section">
        <h2>Experience</h2>
        <div className="experience-cards">
          <div className="experience-card">
            <h3>Software Development Intern</h3>
            <p className="company">Amazon Web Services</p>
            <p className="date">May 2023 - August 2023</p>
            <ul>
              <li>Built and deployed a highly available web application using EC2, S3, ELB, and VPC.</li>
              <li>Resolved technical issues across 50+ AWS labs with Cloud Support Engineers.</li>
              <li>Completed AWS Cloud Practitioner certification mastering cloud fundamentals.</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Teaching Assistant</h3>
            <p className="company">Microsoft TEALS</p>
            <p className="date">July 2022 - February 2023</p>
            <ul>
              <li>Led tailored lessons in HTML and CSS for 90 students.</li>
              <li>Evaluated assignments and provided feedback to reinforce programming concepts.</li>
              <li>Adapted curriculum materials to drive student engagement.</li>
            </ul>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default Experience;
