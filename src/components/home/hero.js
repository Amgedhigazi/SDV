import React from 'react';

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <div className="hero-inner">
        <div className="hero-badge">Est. 1982 &bull; Essen, NRW</div>
        <h1>Connecting Sudanese Hearts in Germany</h1>
        <p>
          SDV NRW e.V. supports Sudanese immigrants and their families in
          North Rhine-Westphalia — providing community, culture, and care.
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
