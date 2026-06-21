import React from 'react';
import { Carousel as AntdCarousel } from 'antd';
import { Row, Col } from 'antd';
import img1 from '../../assets/images/bg-hero.jpg';
import img2 from '../../assets/images/Untitle.jpg';
import img3 from '../../assets/images/Achen-demo.jpg';
import img4 from '../../assets/images/Gather.jpg';
import img5 from '../../assets/images/Recovered.jpg';
import img6 from '../../assets/images/Reco.jpg';
import img7 from '../../assets/images/overed.jpg';
import img8 from '../../assets/images/demo2.jpg';
//import img8 from '../../assets/images/DSC_1757.jpg';


const contentStyle = {
  height: '30px',
  color: '#2f7194',
  lineHeight: '40px',
  textAlign: 'center',
  background: '#a4d2dd',
  paddingLeft: '10px',
  paddingTop: '10px'
};

const MyItems = [
  {
    key: '1',
    title: 'High Performance',
    content: 'Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.',
  },
  {
    key: '2',
    title: 'Flat Design',
    content: 'Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.',
  },
  {
    key: '3',
    title: 'Simplified Workflow',
    content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
  },
  {
    key: '4',
    title: 'Simplified Workflow',
    content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
  },
  {
    key: '5',
    title: 'Simplified Workflow',
    content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
  },
  {
    key: '6',
    title: 'Simplified Workflow',
    content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
  },
  {
    key: '7',
    title: 'Simplified Workflow',
    content: 'Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.',
  },
  {
    key: '8',
    title: 'Simplified Workflow',
    content: 'Streamline your work with our intuitive and efficient workflow solution.solutionsolution Get more done, faster and with ease.solutionsolution Get more done, faster and with ease.solutionsolution Get more done, faster and with ease.solutionsolution Get more done, faster and with ease.solutionsolution Get more done, faster and with ease.solutionsolution Get more done, faster and with ease.solutionsolution Get more done, faster and with ease.',
  },
];

const MyCarousel = () => (
  <AntdCarousel autoplay>
    {MyItems.map(item => (
      <div key={item.key}>
        <Row gutter={[14, 14]}  style={{ padding: "30px 10px", margin: "30px 10px" }}>
          <Col span={14}>
            <div className="img">
              <img alt="img" src={img1} />
            </div>
          </Col>
          <Col span={10}>
            <div className="content" >
              <h3><b>{item.title}</b></h3>
              <p>{item.content}</p>
            </div>
          </Col>
         </Row>
        </div>
        ))}

         
        {MyItems.map(item => (
        <div key={item.key}>
            <Row gutter={[18, 10]} style={{ padding: "20px 20px", margin: "40px 40px" }}>
            <Col span={14}>
                <div className="img">
                <img alt="img" src={img2} />
                </div>
            </Col>
            <Col span={10}>
                <div className="content">
                <h3><b>{item.title}</b></h3>
                <p>{item.content}</p>
                </div>
            </Col>
        </Row>
      </div>
      
    ))}


{MyItems.map(item => (
        <div key={item.key}>
            <Row gutter={[18, 10]} style={{ padding: "20px 20px", margin: "40px 40px" }}>
            <Col span={14}>
                <div className="img">
                <img alt="img" src={img3} />
                </div>
            </Col>
            <Col span={10}>
                <div className="content">
                <h3><b>{item.title}</b></h3>
                <p>{item.content}</p>
                </div>
            </Col>
        </Row>
      </div>
      
    ))}


{MyItems.map(item => (
        <div key={item.key}>
            <Row gutter={[18, 10]} style={{ padding: "20px 20px", margin: "40px 40px" }}>
            <Col span={14}>
                <div className="img">
                <img alt="img" src={img4} />
                </div>
            </Col>
            <Col span={10}>
                <div className="content">
                <h3><b>{item.title}</b></h3>
                <p>{item.content}</p>
                </div>
            </Col>
        </Row>
      </div>
      
    ))}


{MyItems.map(item => (
        <div key={item.key}>
            <Row gutter={[18, 10]}style={{ padding: "20px 20px", margin: "40px 40px" }}>
            <Col span={14}>
                <div className="img">
                <img alt="img" src={img5} />
                </div>
            </Col>
            <Col span={10}>
                <div className="content">
                <h3><b>{item.title}</b></h3>
                <p>{item.content}</p>
                </div>
            </Col>
        </Row>
      </div>
      
    ))}


{MyItems.map(item => (
        <div key={item.key}>
            <Row gutter={[18, 10]}style={{ padding: "20px 20px", margin: "40px 40px" }}>
            <Col span={14}>
                <div className="img">
                <img alt="img" src={img6} />
                </div>
            </Col>
            <Col span={10}>
                <div className="content">
                <h3><b>{item.title}</b></h3>
                <p>{item.content}</p>
                </div>
            </Col>
        </Row>
      </div>
      
    ))}


{MyItems.map(item => (
        <div key={item.key}>
            <Row gutter={[18, 10]}style={{ padding: "20px 20px", margin: "40px 40px" }}>
            <Col span={14}>
                <div className="img">
                <img alt="img" src={img7} />
                </div>
            </Col>
            <Col span={10}>
                <div className="content">
                <h3><b>{item.title}</b></h3>
                <p>{item.content}</p>
                </div>
            </Col>
        </Row>
      </div>
      
    ))}


{MyItems.map(item => (
        <div key={item.key}>
            <Row gutter={[18, 10]}style={{ padding: "20px 20px", margin: "40px 40px" }}>
            <Col span={14}>
                <div className="img">
                <img alt="img" src={img8} />
                </div>
            </Col>
            <Col span={10}>
                <div className="content">
                <h3><b>{item.title}</b></h3>
                <p>{item.content}</p>
                </div>
            </Col>
        </Row>
      </div>
      
    ))}



  </AntdCarousel>
);

export default MyCarousel;
