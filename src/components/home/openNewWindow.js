// src/utils/openNewWindow.js

export const openGalleryInNewWindow = (galleryId) => {
    const url = `/gallery/${galleryId}`; // Adjust URL structure as per your routing setup
    window.open(url, '_blank');
  };
  