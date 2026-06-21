import React, { useEffect } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';
import '../LightboxGallery.css';

const LightboxGallery4 = () => {
  useEffect(() => {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
    });
  }, []);

  const BASE = process.env.PUBLIC_URL;
  const images = [
    { id: 1, src: `${BASE}/images/gallery4/DSC_1957.jpg` },
    { id: 2, src: `${BASE}/images/gallery4/DSC_1649.jpg` },
    { id: 3, src: `${BASE}/images/gallery4/DSC_1599.jpg` },
    { id: 4, src: `${BASE}/images/gallery4/DSC_1602.jpg` },
    { id: 5, src: `${BASE}/images/gallery4/DSC_1706.jpg` },
    { id: 6, src: `${BASE}/images/gallery4/DSC_1609.jpg` },
    { id: 7, src: `${BASE}/images/gallery4/DSC_1847.jpg` },
    { id: 8, src: `${BASE}/images/gallery4/DSC_1798.jpg` },
    { id: 9, src: `${BASE}/images/gallery4/DSC_1579.jpg` },
    { id: 10, src: `${BASE}/images/gallery4/DSC_1581.jpg` },
    { id: 11, src: `${BASE}/images/gallery4/DSC_1590.jpg` },
    { id: 12, src: `${BASE}/images/gallery4/DSC_1976.jpg` },
    { id: 13, src: `${BASE}/images/gallery4/DSC_1640.jpg` },
  ];
return (
  <div className="lightbox-gallery">
    <div className="container">
      <div className="intro">
      <h2 className="text-center" id="gallery2-title">Sudanese Independent Day Celebration January 2019</h2>
          <p className="text-center" id="gallery2-description">The 62nd Independence Day celebration in Bochum was remarkable for its well-coordinated segments, historical exhibitions, cultural performances, and meaningful speeches. It was a testament to the strength and unity of the newly formed Big NRW Sudanese Community under SDV. The event not only celebrated Sudan’s independence but also reinforced the bonds within the Sudanese diaspora in Germany, showcasing their ability to come together and create impactful, joyous occasions.</p>
        </div>
      <div className="row photos">
        {images.map((image) => (
          <div className="col-sm-6 col-md-4 col-lg-3 item" key={image.id}>
            <a href={image.src} data-lightbox="photos" target="_blank" rel="noopener noreferrer" id={`lightbox-${image.id}`}>
              <img className="img-fluid" src={image.src} alt="Gallery4" id={`image-${image.id}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>

  );
};

export default LightboxGallery4;
