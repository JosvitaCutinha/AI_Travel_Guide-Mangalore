import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Mangalore Guide</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('places')}
            >
              Places
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('chat')}
            >
              Chat
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;