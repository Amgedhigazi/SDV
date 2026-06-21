import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myCarousel.css"; // Create and import a CSS file for additional styling

const TheCarousel = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleImageClick = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <>
      <div className={`carousel-container ${isMaximized ? "maximized" : ""}`}>
        <div className="theIntro text-center">
          <h1>Visit Sudan</h1>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <h5>Do not miss to Visit These locations in Sudan..</h5>
          </a>
          <p>
            Sudan is a land of sweeping sand dunes and vast desert; bustling
            souks and camel markets; where the two Niles meet and become one in
            the nation’s capital. Venture north to the ancient desert cities
            that line the unified Nile and unearth a wealth of hidden treasures
            – pyramids, tombs and ancient ruins provide a fascinating glimpse
            into the mighty kingdoms that ruled before. Experience Sudan’s
            legendary hospitality, where just a smile and a few words of Arabic
            can open doors into teahouses and homes, and see firsthand how the
            warmth of the Sudanese people is matched only by their arid
            surrounds.
          </p>
        </div>
        <hr/>
        <Carousel>
          <Carousel.Item>
            <div className="box1">
              <div className="cities d-flex flex-wrap">
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/Western_Deffufa_-_Kerma (1).jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/ThePyramids.jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
              </div>
              <div className="content-text">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <h5>Kareima</h5>
                </a>
                <p>
                  Karima is a town in northern Sudan that offers a rich blend of
                  history, culture, and nature. It is home to Jebel Barkal, a
                  UNESCO World Heritage Site that was once the sacred mountain
                  of the ancient Nubian kings. Here you can explore the
                  impressive temples, pyramids, and rock art that testify to the
                  power and glory of the Kushite civilization. You can also
                  visit the nearby royal cemeteries of El-Kurru and Nuri, where
                  you can marvel at the ancient tombs and funerary monuments.
                  Karima is also a place to enjoy the scenic beauty of the Nile,
                  the lush date palm groves, and the fossilized forest. Karima
                  is a hidden gem that will enchant you with its charm and
                  heritage.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="box1">
              <div className="cities d-flex flex-wrap">
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/Khartoum-downtown-1200x627.jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/Khartoum.jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
              </div>
              <div className="content-text">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <h5>Khartoum</h5>
                </a>
                <p>
                  Khartoum was founded in 1821, north of the ancient city of
                  Soba. In 1882 the British Empire took control of the Egyptian
                  government, leaving the administration of Sudan in the hands
                  of the Egyptians. At the outbreak of the Mahdist War, the
                  British attempted to evacuate Anglo-Egyptian garrisons from
                  Sudan but the Siege of Khartoum in 1884 resulted in the
                  capture of the city by Mahdist forces and a massacre of the
                  defending Anglo-Egyptian garrison. In 1898 it was reoccupied
                  by British forces and was the seat of Anglo-Egyptian Sudan's
                  government until 1956
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="box1">
              <div className="cities d-flex flex-wrap">
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/Portsudan2.jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/Port-Sudan.jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
              </div>
              <div className="content-text">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <h5>Port Sudan</h5>
                </a>
                <p>
                  Port Sudan is a city and port on the Red Sea in eastern Sudan,
                  and the capital of Red Sea State. Port Sudan is Sudan's main
                  seaport and the source of 90% of the country's international
                  trade. The population of Port Sudan was estimated in the 2008
                  Census of Sudan to be 394,561 people. Sudan has historically
                  been a center for commercial activity, particularly in the
                  shipping industry. During the 2023 Sudan war, the military
                  government has largely relocated to Port Sudan as a result of
                  intense fighting in the capital city Khartoum, leading to it
                  being described as a de facto capital of the country. Port
                  Sudan also has emerged as a refuge for internally displaced
                  persons in Sudan.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="box1">
              <div className="cities d-flex flex-wrap">
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/OIP (2).jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/SanganaibIsland.jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
              </div>
              <div className="content-text">
                <a
                  href="https://storymaps.arcgis.com/stories/82a562c8d73d40a5b8cb8a453937ccb9"
                  onClick={(e) => e.preventDefault()}
                >
                  <h5>Sanganeb Marine National Park</h5>
                </a>
                <p>
                  Sanganeb island Reserve is a marine reserve in Sudan located
                  13 nautical miles (about 24.07 km) from the port of Port Sudan
                  within the Sudanese territorial waters in the Red Sea and is
                  abundant with marine biological diversity represented by
                  endemic fish of various types and sizes and other visiting
                  among them whales and includes large settlements of Various
                  coral reefs and other rare marine creatures around which are
                  the remains of shipwrecks and marine structures of
                  archaeological value. It was included by the World Heritage
                  Committee of the United Nations Educational, Scientific and
                  Cultural Organization within the World Heritage.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="box1">
              <div className="cities d-flex flex-wrap">
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/Arkawitresort.jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
                <img
                  className={`box1-image ${isMaximized ? "maximized" : ""}`}
                  src={`${process.env.PUBLIC_URL}/images/cities/Arkaweet2.jpg`}
                  alt="Pre-historic"
                  onClick={handleImageClick}
                />
              </div>
              <div className="content-text">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <h5>Arkaweet</h5>
                </a>
                <p>
                  Arkawit is an amazing resort area in Eastern Sudan. Here you
                  can enjoy the fresh air, beautiful views of the mountains and
                  valleys, and relax in the cool climate. Arkawit was founded by
                  the British as a hill station in the 19th century. Today, it
                  is a popular destination for locals and tourists who want to
                  escape the heat and noise of the cities.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <hr/>
      </div>
    </>
  );
};

export default TheCarousel;
