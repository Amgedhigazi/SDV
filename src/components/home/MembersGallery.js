import React from 'react';
import Carousel from 'better-react-carousel';

const BASE = process.env.PUBLIC_URL;

const figures = [
  { file: '1-Pre-historich.jpg',      alt: 'Pre-historic Sudan' },
  { file: '2-Nubian-Kindoms.jpg',     alt: 'Nubian Kingdoms' },
  { file: 'Kush.jpg',                 alt: 'Kingdom of Kush' },
  { file: '3-Christian-Kingdom.jpg',  alt: 'Christian Kingdom' },
  { file: '5.jpg',                    alt: 'Sudanese History' },
  { file: '6-Mehda.jpg',              alt: 'Al-Mahdi' },
  { file: 'othman-Digna.jpg',         alt: 'Othman Digna' },
  { file: 'Dinar.jpg',                alt: 'Sultan Ali Dinar' },
  { file: 'abdelrahman-mahdi.jpg',    alt: 'Abdel Rahman Al-Mahdi' },
  { file: 'Istighlal.jpg',            alt: 'Independence' },
  { file: 'Azhari.jpg',               alt: 'Ismail Al-Azhari' },
  { file: 'Almahgoub.jpg',            alt: 'Mohammed Ahmed Mahgoub' },
  { file: 'josef-lago.jpg',           alt: 'Josef Lago' },
  { file: 'Khalda-Zaher.jpg',         alt: 'Khalda Zahir' },
  { file: 'Abdelkhaliq-mahjoub.jpg',  alt: 'Abdel Khaliq Mahjoub' },
  { file: 'abilaler.jpg',             alt: 'Abi Laler' },
  { file: 'Ahmed-Almarghani.jpg',     alt: 'Ahmed Al-Marghani' },
  { file: 'aljizoli-Dafallah-3.jpg',  alt: 'Al-Jizoli Dafallah' },
  { file: 'taha-alqurashi.jpg',       alt: 'Taha Al-Qurashi' },
  { file: 'fatma-ahmed.jpg',          alt: 'Fatma Ahmed Ibrahim' },
  { file: 'nogud.jpg',                alt: 'Mohammed Ibrahim Nugud' },
  { file: 'swar-aldahab.jpg',         alt: 'Swar Al-Dahab' },
  { file: 'lsadiq.jpg',               alt: 'Al-Sadiq Al-Mahdi' },
  { file: 'garang.jpg',               alt: 'John Garang' },
  { file: 'Ali-marghani.jpg',         alt: 'Ali Al-Marghani' },
  { file: 'altrabi.jpg',              alt: 'Hassan Al-Turabi' },
  { file: 'omar-bashir.jpg',          alt: 'Omar Al-Bashir' },
  { file: 'Rolers-of-Sudan.jpg',      alt: 'Rulers of Sudan' },
];

const MemberGallery = () => (
  <>
    <div className="content" style={{ paddingLeft: '50px', paddingRight: '50px', fontFamily: 'initial', textAlign: 'center' }}>
      <h1>Sudanese Historical Figures</h1>
      <p>
        Historical View and Exhibition showcasing the rich and sequenced history of Sudan,
        including historical figures and key milestones that highlight Sudanese culture and traditions,
        bringing a sense of home and heritage to the attendees.
      </p>
    </div>

    <Carousel autoPlay cols={6} rows={1} gap={20} loop>
      {figures.map(({ file, alt }) => (
        <Carousel.Item key={file}>
          <a
            href={`${BASE}/images/new/${file}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="100%"
              src={`${BASE}/images/new/${file}`}
              alt={alt}
              style={{ borderRadius: 6, cursor: 'pointer' }}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  </>
);

export default MemberGallery;
