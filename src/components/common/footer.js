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
          </div>

          <div className="footer-col">
            <h4><i className="fas fa-hand-holding-heart" style={{marginRight: 8, color: '#f5a623'}}></i>Donate to Sudan Relief</h4>
            <div className="footer-bank-box">
              <div className="footer-bank-row">
                <span>Account</span>
                <strong>SDV NRW e.V.</strong>
              </div>
              <div className="footer-bank-row">
                <span>IBAN</span>
                <strong>DE61 3004 0000 0826 4400 00</strong>
              </div>
              <div className="footer-bank-row">
                <span>BIC</span>
                <strong>COBADEFFXXX</strong>
              </div>
              <div className="footer-bank-row">
                <span>Bank</span>
                <strong>Commerzbank</strong>
              </div>
              <div className="footer-bank-row">
                <span>Reg.</span>
                <strong>Nr. 10665</strong>
              </div>
            </div>
            <a
              href="https://www.paypal.com/paypalme/sdvnrw"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-paypal-btn"
            >
              <i className="fab fa-paypal"></i> Donate via PayPal
            </a>
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
