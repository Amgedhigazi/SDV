import React from 'react';
import { Card, Row, Col } from 'antd';
import img1 from '../../assets/images/Moibrahim.jpg';
import img2 from '../../assets/images/Amged copy.jpg';
import img3 from '../../assets/images/eltayeb.jpg';
import img4 from '../../assets/images/Monim.jpg';

const { Meta } = Card;

const items = [
  {
    key: '1',
    title: 'Dr. Mohamed Ibrahim',
    content: 'Elevate your game with high-performance . ',
    img: img1
  },
  {
    key: '2',
    title: 'MD. Amged Eltayeb',
    content: 'Simplify your aesthetic with flat design. ',
    img: img2
  },
  {
    key: '3',
    title: 'MA. Elttayeb Mussa',
    content: 'Streamline your work with our intuitive. ',
    img: img3
  },
  {
    key: '4',
    title: 'MD. AbdellMonim ElJerefawie',
    content: 'Streamline your work with our intuitive. ',
    img: img4
  }
];

const containerStyle = {
  background: '#a4d2dd', // Light grey background
  padding: '40px 0', // Padding around the container
  textAlign: 'center' // Center the content horizontally
};

const cardStyle = {
  width: 300, // Card width
  margin: '30px', // Margin around the cards
  borderRadius: '10px', // Rounded corners
  overflow: 'hidden', // Hide overflow for rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',// Subtle shadow
  transition: '0.3s', // Hover transition
  padding: '20px 20px ', // Padding around the 
  hight: '500px',


};

const contentStyle = {
  padding: '20px', 
  backgroundColor: '#fff', // White background for content
  borderRadius: '0 0 10px 10px' // Rounded bottom corners to match the card
};

const BoardMemb = () => (
  <div style={containerStyle}>
    <div className="titleHolder">
      <h2>Our Board Members</h2>
    </div>
    <Row gutter={[18, 10]} justify="center">
      {items.slice(0, 4).map(item => (
        <Col key={item.key}>
          <Card
            hoverable
            style={cardStyle}
            cover={<img alt={item.title} src={item.img} />}
          >
            <Meta title={item.title} />
            <div style={contentStyle}>
              <p>{item.content}</p>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default BoardMemb;
