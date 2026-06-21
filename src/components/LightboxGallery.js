import React, { useEffect } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';
import './LightboxGallery.css';

const LightboxGallery = ({ id }) => {
  useEffect(() => {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
    });
  }, []);

  const images = [
    { id: 1, src: './images/gallery/DSC_2951.JPG' },
    { id: 2, src: './images/gallery/DSC_2952.JPG' },
    { id: 3, src: './images/gallery/DSC_2972.JPG' },
    { id: 4, src: './images/gallery/DSC_2976.JPG' },
    { id: 5, src: './images/gallery/DSC_2986.JPG' },
    { id: 6, src: './images/gallery/DSC_3003.JPG' },
    { id: 7, src: './images/gallery/DSC_3022.JPG' },
    { id: 8, src: './images/gallery/DSC_3041.JPG' },
    { id: 9, src: './images/gallery/DSC_3047.JPG' },
    { id: 10, src: './images/gallery/DSC_3100.JPG' },
    { id: 11, src: './images/gallery/DSC_3138.JPG' },
    { id: 12, src: './images/gallery/DSC_3155.JPG' },
    { id: 13, src: './images/gallery/DSC_3188.JPG' },
    { id: 14, src: './images/gallery/DSC_3209.JPG' },
    { id: 15, src: './images/gallery/DSC_3216.JPG' },
    { id: 16, src: './images/gallery/DSC_3218.JPG' },
    { id: 17, src: './images/gallery/DSC_3223.JPG' },
    { id: 18, src: './images/gallery/DSC_3255.JPG' },
  ];

  return (
    <div className="lightbox-gallery">
      <div className="container">
        <div className="intro">
          <h2 className="text-center" id="gallery-title">
            In Solidarity to Sudan
          </h2>
          <p className="text-center" id="gallery-description">
            The Sudanese community in Germany played an active role in supporting and protesting in favor of the Sudanese Revolution in 2019. Their efforts were marked by a series of well-coordinated activities aimed at raising awareness, showing solidarity, and advocating for democratic change in Sudan.
          </p>
        </div>
        <div className="row photos">
          {images.map((image) => (
            <div className="col-sm-6 col-md-4 col-lg-3 item" key={image.id}>
              <a href={image.src} data-lightbox="photos" id={`lightbox-${image.id}`}>
                <img className="img-fluid" src={image.src} alt="Gallery" id={`image-${image.id}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightboxGallery;