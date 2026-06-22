import React from 'react';

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <div className="hero-inner">
        <div className="hero-badge">Est. 1982 &bull; Essen, NRW</div>
        <h1>We Are Going to Build the Sudan We Dream Of</h1>
        <p>
          SDV NRW e.V. stands with the Sudanese people — in Germany and at home.
          Together we support our community, preserve our culture, and raise funds
          for urgent humanitarian relief in Sudan.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn-hero-primary">Discover More</a>
          <a href="#contact" className="btn-hero-outline">Contact Us</a>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </div>
  );
}

export default AppHero;
