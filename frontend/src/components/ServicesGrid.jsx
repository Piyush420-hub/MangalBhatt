import React from 'react';
import { 
  FileText, Compass, Home, Flame, Landmark, Sparkles, 
  ShieldAlert, Sun, Infinity, Star, Globe, Heart, 
  Gem, Flower2, CircleDot
} from 'lucide-react';
import { GRID_SERVICES } from '../data/pujaData';

// Map icon types to Lucide Icons or sacred emblems
const getServiceIcon = (id) => {
  switch (id) {
    case 'g1': return <FileText size={28} color="#9e7d18" />;
    case 'g2': return <Compass size={28} color="#9e7d18" />;
    case 'g3': return <Home size={28} color="#9e7d18" />;
    case 'g4': return <Flame size={28} color="#9e7d18" />;
    case 'g5': return <Landmark size={28} color="#9e7d18" />;
    case 'g6': return <Sparkles size={28} color="#9e7d18" />;
    case 'g7': return <ShieldAlert size={28} color="#9e7d18" />;
    case 'g8': return <CircleDot size={28} color="#9e7d18" />;
    case 'g9': return <Sun size={28} color="#9e7d18" />;
    case 'g10': return <Infinity size={28} color="#9e7d18" />;
    case 'g11': return <Star size={28} color="#9e7d18" />;
    case 'g12': return <Globe size={28} color="#9e7d18" />;
    case 'g13': return <Heart size={28} color="#9e7d18" />;
    case 'g14': return <Gem size={28} color="#9e7d18" />;
    case 'g15': return <Flower2 size={28} color="#9e7d18" />;
    default: return <Sparkles size={28} color="#9e7d18" />;
  }
};

export default function ServicesGrid({ onSelectService, onOpenBooking }) {
  return (
    <section style={{
      padding: '50px 0 40px',
      background: 'linear-gradient(180deg, #faf7f0 0%, #f4eee2 100%)',
      borderBottom: '1px solid #e2d2b5'
    }}>
      <div className="container">
        {/* Section Title */}
        <div className="sacred-heading">
          <div className="sacred-heading-title">
            <span className="om-symbol">ॐ</span>
            <span>हमारी प्रमुख सेवाएं</span>
            <span className="om-symbol">ॐ</span>
          </div>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 15 Services Grid (8 top row, 7 bottom row on desktop) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '14px',
          justifyContent: 'center'
        }} className="services-icon-grid">
          {GRID_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (onSelectService) {
                  onSelectService(item.titleHi);
                } else if (onOpenBooking) {
                  onOpenBooking(item.titleHi);
                }
              }}
              style={{
                background: '#ffffff',
                border: '1px solid #e0cfaf',
                borderRadius: '10px',
                padding: '20px 10px 16px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.28s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '125px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                position: 'relative'
              }}
              className="service-icon-card"
            >
              {/* Icon Container with subtle golden circle border */}
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '8px',
                background: '#fcf8ee',
                border: '1px solid #d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px',
                transition: 'transform 0.25s ease'
              }} className="icon-box">
                {getServiceIcon(item.id)}
              </div>

              {/* Title in Hindi */}
              <h3 style={{
                fontSize: '0.86rem',
                fontWeight: '700',
                color: '#382b26',
                fontFamily: 'var(--font-devanagari)',
                lineHeight: 1.3,
                minHeight: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.titleHi}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effects */}
      <style>{`
        .service-icon-card:hover {
          transform: translateY(-4px);
          border-color: #d4af37 !important;
          box-shadow: 0 8px 20px rgba(184, 134, 11, 0.18) !important;
          background: #fffdf9 !important;
        }
        .service-icon-card:hover .icon-box {
          background: #730014 !important;
          border-color: #ffd700 !important;
          transform: scale(1.08);
        }
        .service-icon-card:hover .icon-box svg {
          color: #ffd700 !important;
          stroke: #ffd700 !important;
        }
        .service-icon-card:hover h3 {
          color: #730014 !important;
        }
      `}</style>
    </section>
  );
}
