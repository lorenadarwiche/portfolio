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
            <h3>Software Engineer</h3>
            <p className="company">InvestCloud</p>
            <p className="date">October 2025 - Present </p>
            <ul>
    <li>Develop, maintain, and enhance financial technology applications supporting alternative investments and investment management workflows.</li>
<li>Independently develop new application functionality and modify existing APL code to support evolving platform capabilities and client requirements.</li>
<li>Develop pending delivery functionality within Unified Managed Accounts (UMAs), enabling users to designate and reserve funds from account sleeves for future stock trading activities.</li>
<li>Consolidated two existing reporting functions into a unified solution, combining client-specific and general functionality to provide comprehensive advisor access reporting.</li>
<li>Refined SQL queries and application component logic to retrieve, organize, and display accurate user and advisor information, improving reporting consistency and code readability.</li>
<li>Independently designed and developed four additional reporting functions across four web applications, providing client administrators with visibility into user IDs, last login activity, account lock status, service permissions, and application-specific user groupings.</li>
<li>Implemented application-specific reporting logic to accommodate different user roles, access permissions, and grouping structures across multiple platforms.</li>
<li>Performed manual, unit, integration, and regression testing, along with debugging, to validate application functionality and ensure reliable integration with existing systems.</li>
<li>Dedicated approximately six weeks to testing, refining, and integrating the consolidated reporting solution to ensure functionality, accuracy, and maintainability.</li>
    </ul>
          </div>
          <div className="experience-card">
            <h3>Software Development Intern</h3>
            <p className="company">Amazon Web Services</p>
            <p className="date">May 2023 - August 2023</p>
            <ul>
              <li>Designed and deployed a cloud-native web application on AWS (EC2, S3, ELB, VPC), ensuring scalability, fault tolerance, and production-grade reliability.</li>
              <li>Completed 50+ labs in security, networking, and cloud automation, achieving 85%+ performance and gaining hands-on expertise in infrastructure-as-code, monitoring, and backend integrations.</li>
              <li>Earned AWS Cloud Practitioner Certification and implemented secure cloud stacks with IAM, VPC, and EC2, strengthening system security and compliance.</li>
              <li>Enhanced backend application security by configuring IAM roles and refining VPC/security group policies, reducing attack surface by 25% and improving modularity.</li>
              <li>Collaborated in architecture reviews to analyze UI, server-side logic, and deployment workflows, helping resolve critical gaps and boosting overall platform security by 30%.</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Teaching Assistant</h3>
            <p className="company">Microsoft TEALS</p>
            <p className="date">July 2022 - February 2023</p>
            <ul>
              <li>Guided students through full-stack development concepts, bridging front-end and back-end integrations and improving class-wide project completion rates.</li>
              <li>Delivered hands-on lessons in HTML, CSS, and server-side programming, boosting student confidence in building end-to-end web applications by 40%.</li>
              <li>Conducted code reviews and led debugging sessions on 90+ assignments weekly, improving code quality by 30% and fostering best practices in problem-solving and maintainability.</li>
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
