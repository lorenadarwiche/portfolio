import React, { useState, useEffect } from 'react';
import './PasswordGate.css';

const PasswordGate = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already authenticated in this session
    const authenticated = sessionStorage.getItem('portfolio_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = process.env.REACT_APP_PORTFOLIO_PASSWORD || 'portfolio2024';
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('portfolio_authenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="password-gate">
      <div className="password-container">
        <div className="password-card">
          <h1>🔒 Protected Portfolio</h1>
          <p>Please enter the password to view this portfolio</p>
          
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="password-input"
              autoFocus
            />
            
            {error && <p className="error-message">{error}</p>}
            
            <button type="submit" className="submit-button">
              Unlock
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
