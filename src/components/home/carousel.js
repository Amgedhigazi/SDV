import React from "react";
import { Carousel as AntdCarousel } from "antd";
import { Row, Col } from "antd";
import img1 from "../../assets/images/bg-hero.jpg";
import img2 from "../../assets/images/Untitle.jpg";
import img3 from "../../assets/images/Achen-demo.jpg";
import img4 from "../../assets/images/Gather.jpg";
import img5 from "../../assets/images/Recovered.jpg";
import img6 from "../../assets/images/Reco.jpg";
import img7 from "../../assets/images/overed.jpg";
import img8 from "../../assets/images/demo2.jpg";

const slides = [
  {
    key: "1",
    img: img1,
    title: "SDV NRW e.V. — Since 1982",
    content: "Home of the Sudanese community in North Rhine-Westphalia for over four decades.",
    sub: "Supporting integration, preserving culture, and standing together in times of need."
  },
  {
    key: "2",
    img: img2,
    title: "A Community That Cares",
    content: "Our members come from all corners of Sudan, united by shared values and love for their homeland.",
    sub: "Regular meetings, cultural events, and social support keep our community strong."
  },
  {
    key: "3",
    img: img3,
    title: "Aachen — Marching for Sudan",
    content: "SDV NRW members took to the streets of Aachen in solidarity with the Sudanese revolution.",
    sub: "Raising our voices for freedom, peace, and justice for all Sudanese people."
  },
  {
    key: "4",
    img: img4,
    title: "Community Gatherings",
    content: "From Essen to Düsseldorf, Köln to Dortmund — we bring Sudanese families together across NRW.",
    sub: "Celebrating, connecting, and supporting one another every step of the way."
  },
  {
    key: "5",
    img: img5,
    title: "Strength in Unity",
    content: "Marking Sudanese Independence Day, the December Revolution, and Eid celebrations together.",
    sub: "SDV NRW keeps our cultural identity alive and vibrant for every generation."
  },
  {
    key: "6",
    img: img6,
    title: "Cultural Heritage",
    content: "We celebrate Sudanese heritage — music, food, art, and tradition — through cultural evenings.",
    sub: "Bringing joy and a sense of belonging to our community in Germany."
  },
  {
    key: "7",
    img: img7,
    title: "Solidarity Across Borders",
    content: "When Sudan faces crisis, SDV NRW organises fundraising campaigns and humanitarian aid.",
    sub: "Collective action to support our families and communities back home."
  },
  {
    key: "8",
    img: img8,
    title: "March for Democracy",
    content: "Powerful street demonstrations in solidarity with the Sudanese people's demand for freedom.",
    sub: "Standing for democracy, dignity, and an end to oppression — together."
  },
];

const MyCarousel = () => (
  <AntdCarousel autoplay dots={{ className: 'carousel-dots' }}>
    {slides.map((slide) => (
      <div key={slide.key}>
        <Row gutter={[32, 0]} align="middle" style={{ padding: "24px 32px", minHeight: 400 }}>
          <Col xs={24} md={12}>
            <div className="carousel-img-wrap">
              <img alt={slide.title} src={slide.img} />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="carousel-text">
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
              <p>{slide.sub}</p>
            </div>
          </Col>
        </Row>
      </div>
    ))}
  </AntdCarousel>
);

export default MyCarousel;
