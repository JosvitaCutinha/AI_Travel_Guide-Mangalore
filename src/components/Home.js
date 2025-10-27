import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="hero-text">
          <h1>Welcome to Mangalore</h1>
          <p>Discover the Pearl of Karnataka with our AI-powered travel guide</p>
          <button 
            className="explore-btn"
            onClick={() => document.getElementById('places').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Places
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;