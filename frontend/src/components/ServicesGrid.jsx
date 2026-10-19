import React from 'react';
import { VedicIcon } from './VedicIcons';
import { translations } from '../data/translations';

export default function ServicesGrid({ lang = 'hi', onSelectService, onOpenBooking }) {
  const t = translations[lang].servicesGrid;

  return (
    <section style={{
      padding: '50px 0 45px',
      background: 'linear-gradient(180deg, #fcf9f2 0%, #f7f1e4 100%)',
      borderBottom: '1px solid #e2d2b5'
    }}>
      <div className="container">
        {/* Section Heading */}
        <div className="sacred-heading">
          <div className="sacred-heading-title">
            <span className="om-symbol">ॐ</span>
            <span>{t.title}</span>
            <span className="om-symbol">ॐ</span>
          </div>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 15 Sacred Vedic Icon Cards (8 top row, 7 bottom row on desktop) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '14px',
          justifyContent: 'center'
        }} className="services-icon-grid">
          {t.items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (onSelectService) {
                  onSelectService(item.title);
                } else if (onOpenBooking) {
                  onOpenBooking(item.title);
                }
              }}
              style={{
                background: '#ffffff',
                border: '1.5px solid #ebd9bc',
                borderRadius: '12px',
                padding: '18px 8px 14px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '135px',
                boxShadow: '0 3px 10px rgba(115, 0, 20, 0.03)',
                position: 'relative'
              }}
              className="vedic-service-card"
            >
              {/* Sacred Icon Emblem Container */}
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #fffdf8, #fdf4e4)',
                border: '1.5px solid #d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px',
                boxShadow: '0 2px 8px rgba(212, 175, 55, 0.15)',
                transition: 'all 0.25s ease'
              }} className="vedic-icon-box">
                <VedicIcon name={item.iconKey} size={36} color="#730014" accent="#d4af37" />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '0.86rem',
                fontWeight: '700',
                color: '#362823',
                fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
                lineHeight: 1.35,
                minHeight: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4px',
                transition: 'color 0.2s ease'
              }}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .vedic-service-card:hover {
          transform: translateY(-5px);
          border-color: #d4af37 !important;
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.25), 0 0 15px rgba(115, 0, 20, 0.08) !important;
          background: #fffdfa !important;
        }
        .vedic-service-card:hover .vedic-icon-box {
          background: linear-gradient(135deg, #fdf4e4, #fbf0d8) !important;
          border-color: #730014 !important;
          transform: scale(1.08);
          box-shadow: 0 4px 14px rgba(212, 175, 55, 0.35) !important;
        }
        .vedic-service-card:hover h3 {
          color: #730014 !important;
        }
      `}</style>
    </section>
  );
}
