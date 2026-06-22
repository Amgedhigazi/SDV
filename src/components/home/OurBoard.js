import React from 'react';
import MyBoardCarousel from './boardMembers';
import { List, Card } from 'antd';
import MyCarousel from './carousel';
import BoardMemb from './boardCards';
import { useAuth } from '../../context/AuthContext';

const plans = [
  {
    key: 'student',
    title: 'Student',
    price: '€15.99',
    period: '/year',
    features: [
      '1 Adult',
      'Events, Workshops & Seminars',
      'Counseling & Support',
      'SMS Updates',
      'Invited to All Events',
    ],
    highlight: false,
  },
  {
    key: 'basic',
    title: 'Basic',
    price: '€25.99',
    period: '/year',
    features: [
      '2 Adults',
      'Events, Workshops & Seminars',
      'Counseling & Support',
      'Email & SMS Updates',
      'Invited to All Events',
    ],
    highlight: true,
  },
  {
    key: 'family',
    title: 'Family',
    price: '€79.99',
    period: '/year',
    features: [
      '2 Adults + 3 Kids (under 16)',
      'All Events & Activities',
      'Private Counseling & Support',
      'Email & SMS Updates',
      'Priority Event Access',
    ],
    highlight: false,
  },
];

function AppOurBoard() {
  const { openRegister } = useAuth();

  return (
    <>
      <div>
        <MyCarousel />
      </div>

      <div id="OurBoard" className="block OurBoardBlock bgGray">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Choose a Plan to Fit Your Needs</h2>
            <p style={{ color: '#666', marginTop: 8 }}>
              Join SDV NRW e.V. and become part of our growing community
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map(plan => (
              <div key={plan.key} className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}>
                {plan.highlight && <div className="pricing-badge">Most Popular</div>}
                <h3 className="pricing-title">{plan.title} Membership</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">{plan.price}</span>
                  <span className="pricing-period">{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((f, i) => (
                    <li key={i}><i className="fas fa-check"></i> {f}</li>
                  ))}
                </ul>
                <button
                  className={`pricing-btn ${plan.highlight ? 'pricing-btn--primary' : 'pricing-btn--outline'}`}
                  onClick={() => openRegister(plan.key)}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <BoardMemb />
        </div>
      </div>

      <div className="container" style={{ width: '100%', backgroundColor: '#f0f2f5', display: 'block', height: '100%' }}>
        <div style={{ width: '100%', backgroundColor: '#f0f2f5', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: 5 }}>
          <div style={{ width: '50%', height: '100%', paddingBottom: 30 }}>
            <MyBoardCarousel />
          </div>
          <div style={{ width: '37%', marginTop: 80 }}>
            <div className="titleHolder" style={{ backgroundColor: '#f0f2f5', display: 'block', paddingTop: 10, height: '50%', textAlign: 'left' }}>
              <h3>Our Honorable Friends</h3>
              <p style={{ textAlign: 'left' }}>
                In various events, we have gained true friends and supporters who participated in many events.
                We would like to thank you very much for your support and for being there.
                <br /><br />
                We also thank all the volunteers, without whom the events would not have been possible,
                and all the artists and performers who helped us tell the story of a revolution.
                We hope to welcome you again at our next events.
                <br /><br />
                <em>Your Sudanese-German Verein NRW e.V.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppOurBoard;
