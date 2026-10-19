import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/pujaData';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filters = [
    { id: 'all', label: 'सभी चित्र' },
    { id: 'mangal', label: 'मंगल भात पूजन' },
    { id: 'kalsarp', label: 'काल सर्प पूजा' },
    { id: 'shiv', label: 'रुद्राभिषेक व शिव' },
    { id: 'hawan', label: 'हवन एवं अनुष्ठान' }
  ];

  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            || पावन दर्शन एवं कर्मकांड ||
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
            maxWidth: '650px',
            margin: '8px auto 0',
            fontFamily: 'var(--font-devanagari)'
          }}>
            उज्जैन में संपन्न कराए गए मंगल भात, कालसर्प, रुद्राभिषेक एवं वैदिक महायज्ञों के प्रामाणिक छायाचित्र
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #ebd9bc',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="gallery-card"
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.titleHi}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gallery-card-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.2)',
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
                    gap: '6px'
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
                lineHeight: 1.4
              }}>
                {item.titleHi}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="modal-overlay"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '850px',
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
              alt={lightboxImage.titleHi}
              style={{ width: '100%', maxHeight: '72vh', objectFit: 'contain' }}
            />

            <div style={{
              padding: '16px 20px',
              color: '#fff0c7',
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '700',
              fontFamily: 'var(--font-devanagari)'
            }}>
              {lightboxImage.titleHi}
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
