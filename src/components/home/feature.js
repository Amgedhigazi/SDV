import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';
import GalleryViewer from '../GalleryViewer';

const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Social Activities and Events</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 18 }} sm={{ span: 6 }} md={{ span: 4 }}>
            <Card hoverable cover={<img alt="Modern Design" src={image1} />}>
              <Link to="/gallery/1">
                <Meta title="In Solidarity to SR" />
                <p>View Gallery</p>
              </Link>
            </Card>
          </Col>
          <Col xs={{ span: 18 }} sm={{ span: 6 }} md={{ span: 4 }}>
            <Card hoverable cover={<img alt="Clean Design" src={image2} />}>
              <Link to="/gallery/2">
                <Meta title="Kids Open Day" />
                <p>View Gallery</p>
              </Link>
            </Card>
          </Col>
          <Col xs={{ span: 18 }} sm={{ span: 6 }} md={{ span: 4 }}>
            <Card hoverable cover={<img alt="Great Support" src={image3} />}>
              <Link to="/gallery/3">
                <Meta title="Bochum Gathering" />
                <p>View Gallery</p>
              </Link>
            </Card>
          </Col>
          <Col xs={{ span: 18 }} sm={{ span: 6 }} md={{ span: 4 }}>
            <Card hoverable cover={<img alt="Easy Customise" src={image4} />}>
              <Link to="/gallery/4">
                <Meta title="Sudanese Independent Day Celebration" />
                <p>View Gallery</p>
              </Link>
            </Card>
          </Col>
          <Col xs={{ span: 18 }} sm={{ span: 6 }} md={{ span: 4 }}>
            <Card hoverable cover={<img alt="Unlimited Features" src={image5} />}>
              <Link to="/gallery/5">
                <Meta title="Organizing Meeting" />
                <p>View Gallery</p>
              </Link>
            </Card>
          </Col>
          <Col xs={{ span: 18 }} sm={{ span: 6 }} md={{ span: 4 }}>
            <Card hoverable cover={<img alt="Advanced Option" src={image6} />}>
              <Link to="/gallery/6">
                <Meta title="Celebrating Revolution" />
                <p>View Gallery</p>
              </Link>
            </Card>
          </Col>
        </Row>

        <GalleryViewer />
      </div>
     
    </div>
  );
}

export default AppFeature;
