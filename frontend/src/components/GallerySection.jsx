import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Eye, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/pujaData';
import { translations } from '../data/translations';

export default function GallerySection({ lang = 'hi', onNavigateGallery }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const t = translations[lang].gallery;

  const englishGalleryTitles = {
    1: "Mangal Bhat Puja Ritual at Mangalnath Temple, Ujjain",
    2: "Authentic Kaal Sarp Dosh Nivaran Altar",
    3: "Divine Maha Rudrabhishek of Lord Mahakaleshwar",
    4: "Maha Mrityunjaya Vedic Yajna & Ahutis",
    5: "Maa Baglamukhi Pitambari Victory Hawan",
    6: "Navagraha Shanti & Vastu Kalash Consecration",
    7: "Kundali Janampatri Analysis & Consultation",
    8: "Sacred Shipra River Ghat Evening Maha Aarti, Ujjain"
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 4 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= GALLERY_ITEMS.length - 4 ? 0 : prev + 1));
  };

  const visibleItems = GALLERY_ITEMS.slice(currentIndex, currentIndex + 4);
  if (visibleItems.length < 4) {
    visibleItems.push(...GALLERY_ITEMS.slice(0, 4 - visibleItems.length));
  }

  return (
    <section style={{
      padding: '55px 0',
      background: '#ffffff',
      borderBottom: '1px solid #ebd9bc'
    }}>
      <div className="container">
        {/* Sacred Heading */}
        <div className="sacred-heading">
          <div className="sacred-heading-title">
            <span className="om-symbol">ॐ</span>
            <span>{t.heading}</span>
            <span className="om-symbol">ॐ</span>
          </div>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="gallery-carousel" style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '30px'
        }}>
          <button
            onClick={prevSlide}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #d4af37',
              color: '#730014',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              flexShrink: 0,
              zIndex: 10
            }}
            className="gallery-nav-btn"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            width: '100%'
          }} className="gallery-carousel-grid">
            {visibleItems.map((item, idx) => {
              const displayTitle = lang === 'hi' ? item.titleHi : englishGalleryTitles[item.id];
              return (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => setLightboxImage({ ...item, displayTitle })}
                  style={{
                    position: 'relative',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid #ebd9bc',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    height: '210px',
                    transition: 'all 0.3s ease'
                  }}
                  className="gallery-item-card"
                >
                  <img
                    src={item.img}
                    alt={displayTitle}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="gallery-img"
                  />

                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(16,7,5,0.85) 0%, rgba(16,7,5,0.2) 60%, transparent 100%)',
                    padding: '16px 12px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    color: '#ffffff'
                  }}>
                    <div style={{
                      fontSize: '0.84rem',
                      fontWeight: '700',
                      color: '#fff0c7',
                      fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
                      lineHeight: 1.3
                    }}>
                      {displayTitle}
                    </div>
                    <div style={{
                      fontSize: '0.72rem',
                      color: '#ffd700',
                      marginTop: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Eye size={12} />
                      <span>{t.viewLarge}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #d4af37',
              color: '#730014',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              flexShrink: 0,
              zIndex: 10
            }}
            className="gallery-nav-btn"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onNavigateGallery}
            className="btn-maroon"
            style={{ padding: '11px 26px' }}
          >
            <span>{t.viewFullBtn}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {lightboxImage && (
        <div onClick={() => setLightboxImage(null)} className="modal-overlay">
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '800px',
              width: '100%',
              background: '#150906',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid #d4af37',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0,0,0,0.7)',
                color: '#ffffff',
                border: '1px solid #d4af37',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 20
              }}
            >
              <X size={20} />
            </button>

            <img
              src={lightboxImage.img}
              alt={lightboxImage.displayTitle}
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain' }}
            />

            <div style={{
              padding: '16px 20px',
              color: '#fff0c7',
              textAlign: 'center',
              fontSize: '1.05rem',
              fontWeight: '700',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              {lightboxImage.displayTitle}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .gallery-carousel-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .gallery-carousel-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .gallery-item-card:hover {
          transform: translateY(-4px);
          border-color: #d4af37 !important;
          box-shadow: 0 10px 25px rgba(212,175,55,0.25) !important;
        }
        .gallery-item-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-nav-btn:hover {
          background: #730014 !important;
          color: #ffd700 !important;
          border-color: #ffd700 !important;
        }
      `}</style>
    </section>
  );
}
