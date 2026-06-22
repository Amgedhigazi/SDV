import React, { useState } from 'react';
import { Modal } from 'antd';

const BASE = process.env.PUBLIC_URL;

const eventPhotos = [
  { src: `${BASE}/images/gallery1/DSC_3346-2.jpg`,            label: 'In Solidarity to SR' },
  { src: `${BASE}/images/gallery2/IMG_20190414_182813.jpg`,   label: 'Bochum Gathering' },
  { src: `${BASE}/images/gallery3/DSC_2115.JPG`,              label: 'Bochum Cultural Dinner' },
  { src: `${BASE}/images/gallery4/DSC_1957.jpg`,              label: 'Sudanese Independence Day' },
  { src: `${BASE}/images/gallery5/IMG_20191222_182028_1.jpg`, label: 'Organizing Team Meeting' },
  { src: `${BASE}/images/gallery6/The-Poster.jpg`,            label: 'Celebrating Revolution Köln' },
];

function AppWorks() {
  const [videoVisible, setVideoVisible] = useState(false);

  return (
    <>
      <iframe
        title="SDV NRW News"
        width="100%"
        height="540"
        src="https://rss.app/embed/v1/carousel/JaZymya66YZQnBXU"
        frameBorder="0"
      />

      <div id="works" className="block worksBlock">
        <div className="container-fluid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="titleHolder">
            <h2>See Us in Action</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 640, margin: '12px auto 0' }}>
              During the Sudanese Revolution, SDV NRW organized and supported demonstrations,
              campaigns and events — declaring our unwavering belief in democracy.
            </p>
          </div>

          <div className="event-photo-grid">
            {eventPhotos.map((photo, i) => (
              <div key={i} className="event-photo-item">
                <img src={photo.src} alt={photo.label} />
                <div className="event-photo-overlay">
                  <span>{photo.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn-watch-videos" onClick={() => setVideoVisible(true)}>
              <i className="fas fa-play"></i> Watch Event Videos
            </button>
          </div>
        </div>

        <Modal
          open={videoVisible}
          onCancel={() => setVideoVisible(false)}
          footer={null}
          destroyOnClose
          width={900}
          centered
        >
          <div className="titleHolder" style={{ marginBottom: 20 }}>
            <h2>Event Videos</h2>
          </div>
          <div className="video-grid">
            {[
              { src: 'VID_20190216_163229.mp4', label: 'Köln Demonstration' },
              { src: 'VID_20190216_160941.mp4', label: 'Köln March' },
              { src: 'VID_20190414_192653.mp4', label: 'Community Rally' },
              { src: 'VID_20190414_192657.mp4', label: 'Solidarity Event' },
              { src: 'VID_20190427_201018.mp4', label: 'Cultural Evening' },
              { src: 'VID_20200111_173012.mp4', label: 'SDV Gathering' },
            ].map((v, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <video width="200" height="160" controls style={{ borderRadius: 8 }}>
                  <source src={`${BASE}/images/videos/${v.src}`} type="video/mp4" />
                </video>
                <p style={{ marginTop: 6, fontSize: 13, fontWeight: 600 }}>{v.label}</p>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </>
  );
}

export default AppWorks;
