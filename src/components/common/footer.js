import React from 'react';
import { BackTop } from 'antd';
import logo1 from '../../assets/images/Logo3.png';

function AppFooter() {
  return (
    <div className="footer footer-modern">
      <div className="container-fluid">
        <div className="footer-grid">

          <div className="footer-col footer-logo">
            <img alt="SDV NRW" src={logo1} />
            <p className="footer-tagline">
              Sudanesisch-Deutsches Verein NRW e.V. — building bridges between
              Sudanese and German communities since 1982.
            </p>
            <ul className="socials">
              <li><a href="https://www.facebook.com/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.twitter.com/" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.instagram.com/sdvnrw/" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#feature">Events Gallery</a></li>
              <li><a href="#OurBoard">Membership</a></li>
              <li><a href="#faq">Calendar</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p><i className="fas fa-map-marker-alt" style={{marginRight: 8, color: '#f5a623'}}></i>Marienstr. 92, 45307 Essen</p>
            <p><i className="fas fa-phone" style={{marginRight: 8, color: '#f5a623'}}></i>+49 176 61048483</p>
            <p><i className="fas fa-envelope" style={{marginRight: 8, color: '#f5a623'}}></i>de.sd.verein@gmail.com</p>
            <p><i className="fas fa-globe" style={{marginRight: 8, color: '#f5a623'}}></i>www.sudandeutschverein.de</p>
            <p style={{marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,0.4)'}}>
              IBAN: DE61300400000826440000<br />
              Commerzbank &bull; Reg. Nr. 10665
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; 2024 Sudanesisch-Dt. Verein e.V. All rights reserved.</p>
          <BackTop>
            <div className="goTop">
              <i className="fas fa-arrow-circle-up" style={{color: '#f5a623', fontSize: 24}}></i>
            </div>
          </BackTop>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
