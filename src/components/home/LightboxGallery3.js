import React, { useEffect } from "react";
import "lightbox2/dist/css/lightbox.min.css";
import lightbox from "lightbox2";
import "../LightboxGallery.css";

const LightboxGallery3 = () => {
  useEffect(() => {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true
    });
  }, []);

  const BASE = process.env.PUBLIC_URL;
  const images = [
    { id: 1, src: `${BASE}/images/gallery3/DSC_2115.JPG` },
    { id: 2, src: `${BASE}/images/gallery3/DSC_2118.JPG` },
    { id: 3, src: `${BASE}/images/gallery3/DSC_2120.JPG` },
    { id: 4, src: `${BASE}/images/gallery3/DSC_2124.JPG` },
    { id: 5, src: `${BASE}/images/gallery3/DSC_2127.JPG` },
    { id: 6, src: `${BASE}/images/gallery3/DSC_2128.JPG` },
    { id: 7, src: `${BASE}/images/gallery3/DSC_2129.JPG` },
    { id: 8, src: `${BASE}/images/gallery3/DSC_2155.JPG` },
    { id: 9, src: `${BASE}/images/gallery3/DSC_2145.JPG` },
    { id: 10, src: `${BASE}/images/gallery3/DSC_2153.JPG` }
  ];

  return (
    <div className="lightbox-gallery">
      <div className="container">
        <div className="intro">
          <h2 className="text-center" id="gallery2-title">
            Bochum Gathering
          </h2>
          <p className="text-center" id="gallery2-description">
            Cultural Dinner: Held in Bochum City in NRW, included traditional
            Sudanese music, and art to celebrate their heritage and draw crowds,
            using these gatherings to disseminate information about various
            subjects.{" "}
          </p>
        </div>
        <div className="row photos">
          {images.map((image) => (
            <div className="col-sm-6 col-md-4 col-lg-3 item" key={image.id}>
              <a
                href={image.src}
                data-lightbox="photos"
                target="_blank"
                rel="noopener noreferrer"
                id={`lightbox-${image.id}`}
              >
                <img
                  className="img-fluid"
                  src={image.src}
                  alt={`Gallery3 Image ${image.id}`}
                  id={`image-${image.id}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightboxGallery3;
