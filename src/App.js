import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import PasswordGate from './components/PasswordGate';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Analytics />
      <PasswordGate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </PasswordGate>
    </Router>
  );
}

export default App;
