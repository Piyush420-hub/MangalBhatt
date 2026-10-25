import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Eye, X, MessageCircle, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, getWhatsAppLink } from '../data/pujaData';
import { translations } from '../data/translations';

export default function GallerySection({ lang = 'hi', onNavigateGallery }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'pandit' | 'temple'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
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

  // Filter items
  const filteredItems = activeFilter === 'pandit'
    ? GALLERY_ITEMS.filter((i) => i.isPanditPuja)
    : activeFilter === 'temple'
      ? GALLERY_ITEMS.filter((i) => !i.isPanditPuja)
      : GALLERY_ITEMS;

  const handleFilterChange = (filterKey) => {
    setActiveFilter(filterKey);
    setCurrentIndex(0);
    setLightboxIndex(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, filteredItems.length - 4) : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= filteredItems.length - 4 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const visibleItems = filteredItems.slice(currentIndex, currentIndex + 4);
  if (visibleItems.length < 4 && filteredItems.length >= 4) {
    visibleItems.push(...filteredItems.slice(0, 4 - visibleItems.length));
  }

  const currentLightbox = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const currentLightboxTitle = currentLightbox
    ? (lang === 'hi' ? currentLightbox.titleHi : (currentLightbox.titleEn || englishGalleryTitles[currentLightbox.id] || "Vedic Puja by Pandit Ji"))
    : '';

  const panditCount = GALLERY_ITEMS.filter((i) => i.isPanditPuja).length;
  const templeCount = GALLERY_ITEMS.filter((i) => !i.isPanditPuja).length;

  return (
    <section style={{
      padding: '55px 0 65px',
      background: 'linear-gradient(180deg, #ffffff 0%, #fffcf7 100%)',
      borderBottom: '1px solid #ebd9bc',
      position: 'relative'
    }}>
      <div className="container">
        {/* Sacred Heading */}
        <div className="sacred-heading" style={{ marginBottom: '18px' }}>
          <div className="sacred-heading-title">
            <span className="om-symbol">ॐ</span>
            <span>{t.heading}</span>
            <span className="om-symbol">ॐ</span>
          </div>
          {t.subheading && (
            <p style={{
              fontSize: '0.96rem',
              color: '#6e564f',
              maxWidth: '680px',
              margin: '6px auto 0',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              textAlign: 'center'
            }}>
              {t.subheading}
            </p>
          )}
          <div className="sacred-divider" style={{ marginTop: '12px' }}>
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '28px'
        }}>
          <button
            onClick={() => handleFilterChange('all')}
            style={{
              padding: '8px 18px',
              borderRadius: '25px',
              border: activeFilter === 'all' ? '2px solid #730014' : '1px solid #ebd9bc',
              background: activeFilter === 'all' ? 'linear-gradient(135deg, #730014, #4a0309)' : '#ffffff',
              color: activeFilter === 'all' ? '#ffd700' : '#55423c',
              fontSize: '0.86rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: activeFilter === 'all' ? '0 4px 12px rgba(115,0,20,0.2)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            {t.filterAll || 'सभी चित्र'} ({GALLERY_ITEMS.length})
          </button>

          <button
            onClick={() => handleFilterChange('pandit')}
            style={{
              padding: '8px 18px',
              borderRadius: '25px',
              border: activeFilter === 'pandit' ? '2px solid #730014' : '1px solid #ebd9bc',
              background: activeFilter === 'pandit' ? 'linear-gradient(135deg, #730014, #4a0309)' : '#ffffff',
              color: activeFilter === 'pandit' ? '#ffd700' : '#55423c',
              fontSize: '0.86rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: activeFilter === 'pandit' ? '0 4px 12px rgba(115,0,20,0.2)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <Sparkles size={14} color="#ffd700" />
            <span>{t.filterPandit || 'पंडित जी द्वारा संपन्न पूजाएं'} ({panditCount})</span>
          </button>

          <button
            onClick={() => handleFilterChange('temple')}
            style={{
              padding: '8px 18px',
              borderRadius: '25px',
              border: activeFilter === 'temple' ? '2px solid #730014' : '1px solid #ebd9bc',
              background: activeFilter === 'temple' ? 'linear-gradient(135deg, #730014, #4a0309)' : '#ffffff',
              color: activeFilter === 'temple' ? '#ffd700' : '#55423c',
              fontSize: '0.86rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: activeFilter === 'temple' ? '0 4px 12px rgba(115,0,20,0.2)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            {t.filterTemples || 'उज्जैन तीर्थ दर्शन'} ({templeCount})
          </button>
        </div>

        {/* Carousel Container */}
        <div className="gallery-carousel" style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '32px'
        }}>
          <button
            onClick={prevSlide}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #d4af37',
              color: '#730014',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              flexShrink: 0,
              zIndex: 10
            }}
            className="gallery-nav-btn"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            width: '100%'
          }} className="gallery-carousel-grid">
            {visibleItems.map((item, idx) => {
              const displayTitle = lang === 'hi' ? item.titleHi : (item.titleEn || englishGalleryTitles[item.id] || "Vedic Puja by Pandit Ji");
              const actualFilteredIndex = filteredItems.findIndex((fi) => fi.id === item.id);
              return (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => setLightboxIndex(actualFilteredIndex >= 0 ? actualFilteredIndex : 0)}
                  style={{
                    position: 'relative',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid #ebd9bc',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    height: '220px',
                    transition: 'all 0.3s ease',
                    background: '#150906'
                  }}
                  className="gallery-item-card"
                >
                  {/* Pandit Ji Badge */}
                  {item.isPanditPuja && (
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: 'linear-gradient(135deg, rgba(115,0,20,0.92), rgba(74,3,9,0.95))',
                      color: '#ffd700',
                      border: '1px solid #d4af37',
                      borderRadius: '20px',
                      padding: '3px 8px',
                      fontSize: '0.66rem',
                      fontWeight: '700',
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.4)'
                    }}>
                      <span>🪔</span>
                      <span>{lang === 'hi' ? 'पंडित जी द्वारा संपन्न' : 'By Pandit Ji'}</span>
                    </div>
                  )}

                  <img
                    src={item.img}
                    alt={displayTitle}
                    loading="lazy"
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
                    background: 'linear-gradient(to top, rgba(16,7,5,0.92) 0%, rgba(16,7,5,0.3) 55%, transparent 100%)',
                    padding: '16px 12px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    color: '#ffffff',
                    zIndex: 2
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
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #d4af37',
              color: '#730014',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              flexShrink: 0,
              zIndex: 10
            }}
            className="gallery-nav-btn"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* View Full Gallery Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onNavigateGallery}
            className="btn-maroon"
            style={{
              padding: '12px 28px',
              fontSize: '0.98rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span>{t.viewFullBtn}</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {currentLightbox && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.88)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '850px',
              width: '100%',
              background: '#150906',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '2px solid #d4af37',
              position: 'relative',
              boxShadow: '0 12px 40px rgba(0,0,0,0.8)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0,0,0,0.75)',
                color: '#ffffff',
                border: '1px solid #d4af37',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 25
              }}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Prev Lightbox Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
              }}
              style={{
                position: 'absolute',
                left: '12px',
                top: '45%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.7)',
                color: '#ffd700',
                border: '1px solid #d4af37',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 20
              }}
              aria-label="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Lightbox Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
              }}
              style={{
                position: 'absolute',
                right: '12px',
                top: '45%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.7)',
                color: '#ffd700',
                border: '1px solid #d4af37',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 20
              }}
              aria-label="Next Photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Image */}
            <div style={{
              background: '#0d0503',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '340px',
              maxHeight: '68vh'
            }}>
              <img
                src={currentLightbox.img}
                alt={currentLightboxTitle}
                style={{
                  maxWidth: '100%',
                  maxHeight: '68vh',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </div>

            {/* Lightbox Footer Bar */}
            <div style={{
              padding: '16px 20px',
              background: '#150906',
              borderTop: '1px solid #4a2810',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{
                  color: '#fff0c7',
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
                  flex: '1 1 auto'
                }}>
                  {currentLightboxTitle}
                </div>
                <div style={{
                  color: '#d4af37',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  {lang === 'hi'
                    ? `छायाचित्र ${lightboxIndex + 1} / ${filteredItems.length}`
                    : `Photo ${lightboxIndex + 1} of ${filteredItems.length}`}
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '6px'
              }}>
                {currentLightbox.isPanditPuja ? (
                  <span style={{
                    color: '#ffd700',
                    fontSize: '0.82rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span>🪔</span>
                    <span>{lang === 'hi' ? 'पण्डित तरुण पुरी जी द्वारा उज्जैन धाम में संपन्न' : 'Conducted by Pandit Tarun Puri Ji in Ujjain'}</span>
                  </span>
                ) : <span />}

                <a
                  href={getWhatsAppLink(
                    lang === 'hi'
                      ? `जय श्री महाकाल! प्रणाम पंडित जी, मैंने आपकी वेबसाइट गैलरी में छायाचित्र संख्या ${lightboxIndex + 1} (${currentLightbox.titleHi}) देखा है। मुझे भी ऐसी पूजा एवं अनुष्ठान कराने की जानकारी व मुहूर्त बताएं।`
                      : `Jai Shree Mahakal! Pranam Pandit Ji, I viewed photo #${lightboxIndex + 1} (${currentLightboxTitle}) in your website gallery. Please guide me regarding Muhurat and arrangements for this sacred puja.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 18px',
                    borderRadius: '25px',
                    fontSize: '0.86rem',
                    textDecoration: 'none',
                    fontWeight: '700'
                  }}
                >
                  <MessageCircle size={16} />
                  <span>{lang === 'hi' ? 'WhatsApp पर इस पूजा के बारे में पूछें' : 'Inquire on WhatsApp'}</span>
                </a>
              </div>
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
