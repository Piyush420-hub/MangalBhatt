import React, { useState } from 'react';
import { Eye, X, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, getWhatsAppLink } from '../data/pujaData';

export default function GalleryPage({ lang = 'hi' }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = [
    { id: 'all', label: 'सभी छायाचित्र', count: GALLERY_ITEMS.length },
    { id: 'pandit_puja', label: 'पंडित जी द्वारा की गई पूजाएँ', count: GALLERY_ITEMS.filter((i) => i.isPanditPuja).length },
    { id: 'temple', label: 'उज्जैन तीर्थ व मंदिर दर्शन', count: GALLERY_ITEMS.filter((i) => !i.isPanditPuja).length }
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
            || पावन दर्शन एवं प्रत्यक्ष कर्मकांड ||
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            पूजा एवं अनुष्ठान चित्र गैलरी
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: 'var(--font-devanagari)'
          }}>
            पंडित तरुण पूरी जी द्वारा उज्जैन में संपन्न कराए गए मंगल भात, कालसर्प, रुद्राभिषेक एवं वैदिक महायज्ञों के प्रामाणिक छायाचित्र
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
                  alt={item.titleHi}
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
                    <span>पंडित जी द्वारा संपन्न</span>
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
                    <span>दर्शन करें</span>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '14px 16px',
                fontWeight: '700',
                color: '#730014',
                fontSize: '0.94rem',
                fontFamily: 'var(--font-devanagari)',
                textAlign: 'center',
                lineHeight: 1.4,
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.titleHi}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Carousel Controls & WhatsApp Enquiry */}
      {currentLightboxItem && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="modal-overlay"
          style={{ zIndex: 1000 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '850px',
              width: '94%',
              background: '#150906',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '2px solid #d4af37',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
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

            {/* Left Nav Arrow */}
            <button
              onClick={prevLightbox}
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

            {/* Right Nav Arrow */}
            <button
              onClick={nextLightbox}
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

            <img
              src={currentLightboxItem.img}
              alt={currentLightboxItem.titleHi}
              style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain', background: '#0a0403' }}
            />

            <div style={{
              padding: '16px 20px',
              color: '#fff0c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              borderTop: '1px solid #3d2319'
            }}>
              <div>
                <div style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-devanagari)'
                }}>
                  {currentLightboxItem.titleHi}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#ffd700', marginTop: '3px' }}>
                  छायाचित्र {lightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>

              <a
                href={getWhatsAppLink(`जय श्री महाकाल! प्रणाम पंडित जी, मैंने आपकी वेबसाइट गैलरी में छायाचित्र संख्या ${lightboxIndex + 1} (${currentLightboxItem.titleHi}) देखा है। मुझे भी ऐसी पूजा एवं अनुष्ठान कराने की जानकारी व मुहूर्त बताएं।`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <MessageCircle size={15} />
                <span>इस पूजा के बारे में पूछें</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover {
          transform: translateY(-5px);
          border-color: #d4af37 !important;
          box-shadow: 0 10px 25px rgba(115,0,20,0.15) !important;
        }
        .gallery-card:hover .gallery-card-img {
          transform: scale(1.08);
        }
        .gallery-card:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
