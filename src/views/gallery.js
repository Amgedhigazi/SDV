// src/views/gallery.js

import React from 'react';
import { Row, Col, Image } from 'antd';
import img1 from '../../assets/images/gallery1/IMG_20190414_175737.jpg';
import img2 from '../../assets/images/gallery1/IMG_20190414_182813.jpg';
import img3 from '../../assets/images/gallery1/IMG_20190414_182822.jpg';
import img4 from '../../assets/images/gallery1/IMG_20190414_182909.jpg';
import img5 from '../../assets/images/gallery1/IMG_20190414_182912.jpg';
import img6 from '../../assets/images/gallery1/IMG_20190414_182912.jpg';
import img7 from '../../assets/images/gallery1/IMG_20190414_182943.jpg';
import img8 from '../../assets/images/gallery1/IMG_20190414_183011.jpg';
import img9 from '../../assets/images/gallery1/IMG_20190414_183032.jpg';
import img10 from '../../assets/images/gallery1/IMG_20190414_183033.jpg';
import img11 from '../../assets/images/gallery1/IMG_20190414_183145.jpg';
import img12 from '../../assets/images/gallery1/IMG_20190414_183242.jpg';
import img13 from '../../assets/images/gallery1/IMG_20190414_190106.jpg';
import img14 from '../../assets/images/gallery1/IMG_20190414_190350_2.jpg';
import img15 from '../../assets/images/gallery1/IMG_20190414_192308.jpg';
import img16 from '../../assets/images/gallery1/IMG_20190414_192309.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15, img16
];

function Gallery() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Row gutter={[16, 16]}>
        {images.map((image, index) => (
          <Col key={index} span={6}>
            <Image src={image} alt={`Gallery Image ${index + 1}`} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Gallery;
