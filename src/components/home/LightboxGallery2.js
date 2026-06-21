import React, { useEffect } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';
import '../LightboxGallery.css';

const LightboxGallery2 = () => {
  useEffect(() => {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
    });
  }, []);

  const BASE = process.env.PUBLIC_URL;
  const images = [
    { id: 1, src: `${BASE}/images/gallery2/IMG_20190414_182813.jpg` },
    { id: 2, src: `${BASE}/images/gallery2/IMG_20190414_182822.jpg` },
    { id: 3, src: `${BASE}/images/gallery2/IMG_20190414_182813.jpg` },
    { id: 4, src: `${BASE}/images/gallery2/IMG_20190414_182909.jpg` },
    { id: 5, src: `${BASE}/images/gallery2/IMG_20190414_182912.jpg` },
    { id: 6, src: `${BASE}/images/gallery2/IMG_20190414_182922.jpg` },
    { id: 7, src: `${BASE}/images/gallery2/IMG_20190414_182943.jpg` },
    { id: 8, src: `${BASE}/images/gallery2/IMG_20190414_183011.jpg` },
    { id: 9, src: `${BASE}/images/gallery2/IMG_20190414_183032.jpg` },
    { id: 10, src: `${BASE}/images/gallery2/IMG_20190414_183033.jpg` },
    { id: 11, src: `${BASE}/images/gallery2/IMG_20190414_183145.jpg` },
    { id: 12, src: `${BASE}/images/gallery2/IMG_20190414_183242.jpg` },
    { id: 13, src: `${BASE}/images/gallery2/IMG_20190414_190106.jpg` },
    { id: 14, src: `${BASE}/images/gallery2/IMG_20190414_190350_2.jpg` },
    { id: 15, src: `${BASE}/images/gallery2/IMG_20190414_192308.jpg` },
    { id: 16, src: `${BASE}/images/gallery2/IMG_20190414_192309.jpg` },
    { id: 17, src: `${BASE}/images/gallery2/IMG_20190414_175737.jpg` },
  ];
  return (
    <div className="lightbox-gallery">
      <div className="container">
        <div className="intro">
          <h2 className="text-center" id="gallery2-title">Bochum Gathering</h2>
          <p className="text-center" id="gallery2-description">Cultural Dinner: Held in Bochum City in NRW, included traditional Sudanese music, and art to celebrate their heritage and draw crowds, using these gatherings to disseminate information about various subjects. </p>
        </div>
        <div className="row photos">
          {images.map((image) => (
            <div className="col-sm-6 col-md-4 col-lg-3 item" key={image.id}>
                 <a href={image.src} data-lightbox="photos" target="_blank" rel="noopener noreferrer" id={`lightbox-${image.id}`}>
                 <img className="img-fluid" src={image.src} alt={`Gallery2 Image ${image.id}`} id={`image-${image.id}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightboxGallery2;
