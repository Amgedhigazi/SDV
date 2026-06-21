import React from 'react';


import { Carousel as AntdCarousel, Card, Row, Col } from 'antd';

import img1 from '../../assets/images/Talab.jpg';
import img2 from '../../assets/images/Amged.jpg';
import img3 from '../../assets/images/mohammed-terwis.jpg';
import img4 from '../../assets/images/Marwa.jpg';
import img5 from '../../assets/images/DSC_1757.jpg';
import img6 from '../../assets/images/dr-magdi-algzoli (1).jpg';
import img7 from '../../assets/images/Sohaib.jpg';
import img8 from '../../assets/images/ZakiMaboren.jpg';
import img9 from '../../assets/images/SnaaHausband.jpg';
import img10 from '../../assets/images/IsslamZain.jpg';
import img11 from '../../assets/images/Khald.jpg';
import img12 from '../../assets/images/Adodo.jpg';
import img13 from '../../assets/images/sakin.jpg';
import img14 from '../../assets/images/Sadam.jpg';


const { Meta } = Card;

const items = [
  {
    key: '1',
    title: 'Talab',
    content: 'Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.',
    img: img1
  },
  {
    key: '2',
    title: 'MD. Amged Eltayeb',
    content: 'Amged Higazi is a visual artist, graphic designer and photographer. He was born in Omdurman, Sudan. The focus of his work is the exploration of artistic heritage, His works are full of references to ancient Nubian architectural designs, calligraphic motifs and African masks.',
    img: img2
  },
  {
    key: '3',
    title: 'Mohammed Terwis ',
    content: ' a Sudanese actor with excellent role playing and training skills. He holds a BA (Hons) in Arts and Economics from the University of The Arts, Utrecht - Netherlands. ',
    img: img3
  },
  {
    key: '4',
    title: 'MD. Marwa',
    content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
    img: img4
  },
  {
    key: '5',
    title: 'Dr. Ahmed Alobaid',
    content: 'Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.',
    img: img5
  },
  {
    key: '6',
    title: 'MD. Magdi Algzoli',
    content: 'Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.',
    img: img6
  },
  {
    key: '7',
    title: 'Dr. Suhaib Eljimaabi',
    content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
    img: img7
  },
  {
    key: '8',
    title: 'Zaki Al-Maboren',
    content: ' Zaki Al-Maboren received a grant from Friedrich-Ebert-Foundation for the promotion of gifted students and studied at the University of Kassel. Numerous of his works are to be found on public display in Germany and abroad. ',
    img: img8
  },
  {
    key: '9',
    title: 'MD. Khaled',
    content: 'Streamline your work with our intuitive and efficient workflow solution, Get more done, faster and with ease.',
    img: img9
  },
  {
    key: '10',
    title: 'Islam Zain',
    content: 'Islam Zian-Alabdeen has in-1991 completed his applied arts in Sudan, He dedicated his life to art he exhibited his work in homeland and Europe. he develops and gives art workshops for adults and children.',
    img: img10
  },
  {
    key: '11',
    title: 'MD. Khaled Sirig',
    content: 'Streamline your work with our intuitive and efficient workflow solution, Get more done, faster and with ease.',
    img: img11
  },
  {
    key: '12',
    title: 'MD. Adodo',
    content: 'Dr. Abdelhag El Dodo is an artist and painter in 1981 he completed a study in art in Khartoum, then a political and art sciences in 1992 at the University of Kassel. In 1996, he got his degree of arts, He organizes various intercultural art AGs at schools in cologne',
    img: img12
  },
  {
    key: '13',
    title: 'Baraka Sakin ',
    content: 'Baraka Sakin is worldwide known Novelist and writer, winner of many rewords as  novelist, his work  have been translated to many languages lives in Ostrich',
    img: img13
  },
  {
    key: '14',
    title: 'Sadam Siddig ',
    content: 'Sadam Siddig',
    img: img14
  }
];

const carouselStyle = {
  background: '#f0f2f5', // Light grey background
  padding: '3px',
  maxHight: '380px',
  marginTop: '97px'
};

const cardStyle = {
  width: 250, // Wider card width
  margin: '0 auto', // Center the card
  backgroundColor: '#a4d2dd', // White background for content
};

const contentStyle = {
  padding: '3px', 
  
  borderRadius: '10px', // Rounded corners
  
};

const MyBoardCarousel = () => (
  <>
  <div style={carouselStyle}>
   
    <AntdCarousel autoplay>
    
      {items.map(item => (
        <div key={item.key}>
          <Row gutter={[18, 10]} justify="center">
            <Col>
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
          </Row>
        </div>
      ))}
      

    </AntdCarousel>

  </div>
 
</>
);

export default MyBoardCarousel;
