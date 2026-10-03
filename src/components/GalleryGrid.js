'use client';

import { useState } from 'react';

export default function GalleryGrid({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="gallery-grid">
        {images.map((imgStr, index) => {
          const src = typeof imgStr === 'string' ? `/${imgStr}` : (imgStr.image ? `/${imgStr.image}` : '');
          if (!src) return null;
          
          return (
            <div key={index} className="gallery-item" onClick={() => openLightbox(src)}>
              <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>🔍</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? 'open' : ''}`} onClick={closeLightbox}>
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
          &times;
        </button>
        {currentImage && (
          <img src={currentImage} alt="Fullscreen View" onClick={(e) => e.stopPropagation()} />
        )}
      </div>
    </>
  );
}
