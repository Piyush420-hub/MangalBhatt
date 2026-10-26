import React, { useState } from 'react';
import { Eye, X, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';

export default function GalleryPage({ lang = 'hi' }) {
  const isHi = lang === 'hi';
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = isHi ? [
    { id: 'all', label: 'सभी छायाचित्र', count: GALLERY_ITEMS.length },
    { id: 'pandit_puja', label: 'पंडित जी द्वारा की गई पूजाएँ', count: GALLERY_ITEMS.filter((i) => i.isPanditPuja).length },
    { id: 'temple', label: 'उज्जैन तीर्थ व मंदिर दर्शन', count: GALLERY_ITEMS.filter((i) => !i.isPanditPuja).length }
  ] : [
    { id: 'all', label: 'All Photographs', count: GALLERY_ITEMS.length },
    { id: 'pandit_puja', label: 'Rituals by Pandit Ji', count: GALLERY_ITEMS.filter((i) => i.isPanditPuja).length },
    { id: 'temple', label: 'Ujjain Shrines & Temples', count: GALLERY_ITEMS.filter((i) => !i.isPanditPuja).length }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : activeFilter === 'pandit_puja'
      ? GALLERY_ITEMS.filter((item) => item.isPanditPuja)
      : GALLERY_ITEMS.filter((item) => !item.isPanditPuja);

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            {isHi ? '|| पावन दर्शन एवं प्रत्यक्ष कर्मकांड ||' : '|| Holy Darshan & Authentic Vedic Ceremonies ||'}
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            {isHi ? 'पूजा एवं अनुष्ठान चित्र गैलरी' : 'Sacred Rituals Photo Gallery'}
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
          }}>
            {isHi
              ? `${PANDIT_INFO.nameHi} जी द्वारा उज्जैन में संपन्न कराए गए मंगल भात, कालसर्प, रुद्राभिषेक एवं वैदिक महायज्ञों के प्रामाणिक छायाचित्र`
              : `Authentic glimpses of Mangal Bhat Puja, Kaal Sarp Dosh, Rudrabhishek, and Vedic Yajna consecrated by ${PANDIT_INFO.name} in Ujjain`}
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '35px'
        }}>
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFilter(f.id);
                  setLightboxIndex(null);
                }}
                style={{
                  padding: '10px 18px',
                  borderRadius: '30px',
                  border: isActive ? '2px solid #730014' : '1px solid #ebd9bc',
                  background: isActive ? 'linear-gradient(135deg, #730014, #4a0309)' : '#ffffff',
                  color: isActive ? '#ffd700' : '#55423c',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: isActive ? '0 4px 14px rgba(115,0,20,0.2)' : '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>{f.label}</span>
                <span style={{
                  background: isActive ? 'rgba(255,215,0,0.2)' : '#f4ede1',
                  color: isActive ? '#ffd700' : '#730014',
                  borderRadius: '12px',
                  padding: '2px 8px',
                  fontSize: '0.75rem',
                  fontWeight: '800'
                }}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #ebd9bc',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              className="gallery-card"
            >
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={isHi ? item.titleHi : (item.titleEn || 'Puja Performed by Pandit Ji')}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gallery-card-img"
                />

                {/* Badge for Pandit Ji's live pujas */}
                {item.isPanditPuja && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(115, 0, 20, 0.92)',
                    color: '#ffd700',
                    border: '1px solid #ffd700',
                    padding: '4px 9px',
                    borderRadius: '14px',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                    zIndex: 2
                  }}>
                    <Sparkles size={11} color="#ffd700" />
                    <span>{isHi ? 'पंडित जी द्वारा संपन्न' : 'Conducted by Pandit Ji'}</span>
                  </div>
                )}

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} className="hover-overlay">
                  <div style={{
                    background: '#730014',
                    color: '#ffd700',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}>
                    <Eye size={15} />
                    <span>{isHi ? 'दर्शन करें' : 'View Photo'}</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '14px 16px', background: '#ffffff', flex: 1, display: 'flex', alignItems: 'center' }}>
                <h4 style={{
                  fontSize: '0.94rem',
                  fontWeight: '700',
                  color: '#42322c',
                  fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)',
                  lineHeight: 1.4,
                  margin: 0
                }}>
                  {isHi ? item.titleHi : (item.titleEn || 'Puja Performed by Pandit Ji')}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 4, 3, 0.94)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(8px)'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#730014',
              border: '1px solid #ffd700',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={24} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevLightbox}
            style={{
              position: 'absolute',
              left: '20px',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid #ffd700',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              maxHeight: '90vh',
              background: '#1a0b08',
              borderRadius: '16px',
              border: '2px solid #d4af37',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
            }}
          >
            <div style={{ position: 'relative', maxHeight: '72vh', overflow: 'hidden', background: '#000000', display: 'flex', justifyContent: 'center' }}>
              <img
                src={currentLightboxItem.img}
                alt={isHi ? currentLightboxItem.titleHi : (currentLightboxItem.titleEn || 'Puja Performed by Pandit Ji')}
                style={{
                  maxWidth: '100%',
                  maxHeight: '72vh',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div style={{
              padding: '16px 24px',
              background: '#230f0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              borderTop: '1px solid #d4af37'
            }}>
              <div>
                <h3 style={{
                  color: '#ffd700',
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  marginBottom: '4px',
                  fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
                }}>
                  {isHi ? currentLightboxItem.titleHi : (currentLightboxItem.titleEn || 'Puja Performed by Pandit Ji')}
                </h3>
                <div style={{ color: '#d4af37', fontSize: '0.8rem' }}>
                  {isHi ? 'छायाचित्र' : 'Photo'} {lightboxIndex + 1} {isHi ? 'में से' : 'of'} {filteredItems.length}
                </div>
              </div>

              <a
                href={getWhatsAppLink(
                  isHi
                    ? `प्रणाम पंडित जी, मुझे ${currentLightboxItem.titleHi} के बारे में जानकारी चाहिए।`
                    : `Pranam Pandit Ji, I would like information regarding ${currentLightboxItem.titleEn || 'Puja Performed by Pandit Ji'}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <MessageCircle size={16} />
                <span>{isHi ? 'इस पूजा के बारे में पूछें' : 'Inquire on WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextLightbox}
            style={{
              position: 'absolute',
              right: '20px',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid #ffd700',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      <style>{`
        .gallery-card:hover {
          transform: translateY(-4px);
          border-color: #d4af37 !important;
          box-shadow: 0 8px 24px rgba(115,0,20,0.12) !important;
        }
        .gallery-card:hover .hover-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover .gallery-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}