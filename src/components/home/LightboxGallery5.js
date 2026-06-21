import React, { useEffect } from 'react';
  import 'lightbox2/dist/css/lightbox.min.css';
  import lightbox from 'lightbox2';
  import '../LightboxGallery.css';
  
  const LightboxGallery5 = () => {
    useEffect(() => {
      lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
      });
    }, []);
    const BASE = process.env.PUBLIC_URL;
    const images = [
      { id: 1, src: `${BASE}/images/gallery5/IMG_20191222_182028_1.jpg` },
      { id: 2, src: `${BASE}/images/gallery5/IMG_20191222_182041.jpg` },
      { id: 3, src: `${BASE}/images/gallery5/IMG_20191222_182036.jpg` },
      { id: 4, src: `${BASE}/images/gallery5/IMG_20191222_182041.jpg` },
      { id: 5, src: `${BASE}/images/gallery5/IMG_20191222_182056.jpg` },
    ];
  
    return (
      <div className="lightbox-gallery">
        <div className="container">
          <div className="intro">
          <h2 className="text-center" id="gallery1-title">Preparing Event`s Team Meeting</h2>
        <p className="text-center" id="gallery1-description">The meeting held In Caritas Hall in Dusseldorf City to discuss the event of Sudan National Day 64</p>
      </div>
          <div className="row photos">
            {images.map((image) => (
              <div className="col-sm-6 col-md-4 col-lg-3 item" key={image.id}>
                  <a href={image.src} data-lightbox="photos" target="_blank" rel="noopener noreferrer" id={`lightbox-${image.id}`}>
                  <img className="img-fluid" src={image.src} alt={`Gallery5 Image ${image.id}`} id={`image-${image.id}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default LightboxGallery5;