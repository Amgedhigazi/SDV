// GalleryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import LightboxGallery1 from './home/LightboxGallery1';
import LightboxGallery2 from './home/LightboxGallery2';
import LightboxGallery3 from './home/LightboxGallery3';
import LightboxGallery4 from './home/LightboxGallery4';
import LightboxGallery5 from './home/LightboxGallery5';
import LightboxGallery6 from './home/LightboxGallery6';
import './LightboxGallery.css';

const GalleryPage = () => {
  const { id } = useParams();

  switch (id) {
    case '1':
      return <LightboxGallery1 />;
    case '2':
      return <LightboxGallery2 />;
    case '3':
      return <LightboxGallery3 />;
    case '4':
      return <LightboxGallery4 />;
    case '5':
      return <LightboxGallery5 />;
    case '6':
      return <LightboxGallery6 />;
    default:
      return <div>Gallery not found</div>;
  }
};

export default GalleryPage;
