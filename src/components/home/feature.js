import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const { Meta } = Card;

const BASE = process.env.PUBLIC_URL;

const galleries = [
  { id: 1, title: 'In Solidarity to SR',                cover: `${BASE}/images/gallery1/DSC_3346-2.jpg` },
  { id: 2, title: 'Bochum Gathering',                   cover: `${BASE}/images/gallery2/IMG_20190414_182813.jpg` },
  { id: 3, title: 'Bochum Cultural Dinner',             cover: `${BASE}/images/gallery3/DSC_2115.JPG` },
  { id: 4, title: 'Sudanese Independence Day',          cover: `${BASE}/images/gallery4/DSC_1957.jpg` },
  { id: 5, title: 'Organizing Team Meeting',            cover: `${BASE}/images/gallery5/IMG_20191222_182028_1.jpg` },
  { id: 6, title: 'Celebrating Revolution Köln',        cover: `${BASE}/images/gallery6/The-Poster.jpg` },
];

function AppFeature() {
  const { user, openLogin } = useAuth();
  const navigate = useNavigate();

  const handleViewGallery = (id) => {
    if (user) {
      navigate(`/gallery/${id}`);
    } else {
      openLogin();
    }
  };

  return (
    <div id="feature" className="block featureBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2 style={{ color: '#fff' }}>Social Activities and Events</h2>
          {!user && (
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 8 }}>
              <i className="fas fa-lock" style={{ marginRight: 6 }}></i>
              Sign in as a member to view full galleries
            </p>
          )}
        </div>
        <Row gutter={[16, 16]}>
          {galleries.map(g => (
            <Col key={g.id} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <div className="gallery-card" onClick={() => handleViewGallery(g.id)}>
                <div className="gallery-card-img">
                  <img src={g.cover} alt={g.title} />
                  {!user && (
                    <div className="gallery-lock-overlay">
                      <i className="fas fa-lock"></i>
                      <span>Members Only</span>
                    </div>
                  )}
                </div>
                <div className="gallery-card-body">
                  <h4>{g.title}</h4>
                  <span className="gallery-card-link">
                    {user ? 'View Gallery →' : 'Sign In to View →'}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
