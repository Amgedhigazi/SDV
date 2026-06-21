import React, { useEffect } from 'react';
  import 'lightbox2/dist/css/lightbox.min.css';
  import lightbox from 'lightbox2';
  import '../LightboxGallery.css';
  
  const LightboxGallery6 = () => {
    useEffect(() => {
      lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
      });
    }, []);
  
    const BASE = process.env.PUBLIC_URL;
    const images = [
      { id: 1, src: `${BASE}/images/gallery6/Invitaion Deutsch new.jpg` },
      { id: 2, src: `${BASE}/images/gallery6/Invitaion Deutsch newArabi.jpg` },
      { id: 3, src: `${BASE}/images/gallery6/brochreoutside.jpg` },
      { id: 4, src: `${BASE}/images/gallery6/Arabic.jpg` },
    ];
  
    return (
      <div className="lightbox-gallery">
        <div className="container">
          <div className="intro">
            <h2 className="text-center" id="celebrating-revolution">Celebrating Revolution </h2>
            <p className="text-center" id="description"> The combined celebration of the December Revolution and Sudan’s 63rd Independence Day in Köln City was a day to remember. With seminars, an art show by seven artists, a revolution panoramic exhibition, a theater monologue show, a cultural and traditional coffee corner, folklore performances, musical segments, and speeches from honored guests, the event was a resounding success. It not only celebrated Sudan's history and cultural heritage but also reinforced the strength and unity of the Sudanese community in Germany.</p>
          </div>
          <div className="row photos">
            {images.map((image) => (
              <div className="col-sm-6 col-md-4 col-lg-3 item" key={image.id}>
                  <a href={image.src} data-lightbox="photos" target="_blank" rel="noopener noreferrer" id={`lightbox-${image.id}`}>
                  <img className="img-fluid" src={image.src} alt={`Gallery6 Image ${image.id}`} id={`image-${image.id}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default LightboxGallery6;