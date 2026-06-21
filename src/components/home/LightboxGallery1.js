import React, { useEffect } from 'react';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';
import '../LightboxGallery.css';

const LightboxGallery1 = () => {
  useEffect(() => {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
    });
  }, []);

  const BASE = process.env.PUBLIC_URL;
  const images = [
    { id: 1, src: `${BASE}/images/gallery1/DSC_3346-2.jpg` },
    { id: 2, src: `${BASE}/images/gallery1/DSC_3356-2.jpg` },
    { id: 3, src: `${BASE}/images/gallery1/DSC_3451-2.jpg` },
    { id: 4, src: `${BASE}/images/gallery1/DSC_3454-2.jpg` },
    { id: 5, src: `${BASE}/images/gallery1/DSC_3487-2.jpg` },
    { id: 6, src: `${BASE}/images/gallery1/DSC_3490-2.jpg` },
    { id: 7, src: `${BASE}/images/gallery1/DSC_3492-2.jpg` },
    { id: 8, src: `${BASE}/images/gallery1/DSC_3493-2.jpg` },
    { id: 9, src: `${BASE}/images/gallery1/DSC_3515-2.jpg` },
    { id: 10, src: `${BASE}/images/gallery1/DSC_3535-2.jpg` },
    { id: 11, src: `${BASE}/images/gallery1/DSC_3548-2.jpg` },
    { id: 12, src: `${BASE}/images/gallery1/DSC_3563-2.jpg` },
    { id: 13, src: `${BASE}/images/gallery1/DSC_3575-2.jpg` },
    { id: 15, src: `${BASE}/images/gallery1/DSC_3595-2.jpg` },
    { id: 16, src: `${BASE}/images/gallery1/DSC_3598-2.jpg` },
    { id: 17, src: `${BASE}/images/gallery1/DSC_3607-2.jpg` },
  ];

 
  return (
    <div className="lightbox-gallery">
      <div className="container">
        <div className="intro">
          <h2 className="text-center" id="gallery1-title">Düsseldorf Public Demonstrations</h2>
          <p className="text-center" id="gallery1-description">
          The Sudanese community in Germany played an active role in supporting and protesting in favor of the Sudanese Revolution in 2019. Their efforts were marked by a series of well-coordinated activities aimed at raising awareness, showing solidarity, and advocating for democratic change in Sudan. Sudanese expatriates in major German cities like Berlin, Frankfurt, and Hamburg organized public demonstrations. These protests were held in front of significant landmarks and government buildings to draw attention to the situation in Sudan. we have organized many in Düsseldorf City in NRW region   </p>
        </div>
        <div className="row photos">
          {images.map((image) => (
            <div className="col-sm-6 col-md-4 col-lg-2 item" key={image.id}>
               <a href={image.src} data-lightbox="photos" target="_blank" rel="noopener noreferrer" id={`lightbox-${image.id}`}>
                <img className="img-fluid" src={image.src} alt={`Gallery1 Image ${image.id}`} id={`image-${image.id}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightboxGallery1;
