import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { POPULAR_PUJAS_SECTION } from '../data/pujaData';

export default function PopularPujas({ onOpenBooking }) {
  return (
    <section style={{
      padding: '55px 0',
      background: 'linear-gradient(180deg, #faf6ee 0%, #ffffff 100%)',
      borderBottom: '1px solid #ebd9bc'
    }}>
      <div className="container">
        {/* Sacred Heading */}
        <div className="sacred-heading">
          <div className="sacred-heading-title">
            <span className="om-symbol">ॐ</span>
            <span>लोकप्रिय पूजा एवं अनुष्ठान</span>
            <span className="om-symbol">ॐ</span>
          </div>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* Popular Cards Grid (6 cards matching screenshot) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          justifyContent: 'center'
        }} className="popular-grid">
          {POPULAR_PUJAS_SECTION.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenBooking(item.titleHi)}
              style={{
                background: '#ffffff',
                border: '1px solid #ebd9bc',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="popular-card"
            >
              {/* Photo */}
              <div style={{
                position: 'relative',
                height: '145px',
                overflow: 'hidden'
              }}>
                <img
                  src={item.image}
                  alt={item.titleHi}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="popular-card-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20,7,5,0.4) 0%, transparent 60%)'
                }} />
              </div>

              {/* Title & Subtitle */}
              <div style={{
                padding: '14px 12px 16px',
                textAlign: 'center',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '0.98rem',
                    fontWeight: '700',
                    color: '#730014',
                    fontFamily: 'var(--font-devanagari)',
                    marginBottom: '4px'
                  }}>
                    {item.titleHi}
                  </h4>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#735f58',
                    fontFamily: 'var(--font-devanagari)'
                  }}>
                    {item.subHi}
                  </div>
                </div>

                <div style={{
                  marginTop: '10px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  color: '#b8860b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}>
                  <span>{item.actionText}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .popular-card:hover {
          transform: translateY(-5px);
          border-color: #d4af37 !important;
          box-shadow: 0 10px 25px rgba(115,0,20,0.15) !important;
        }
        .popular-card:hover .popular-card-img {
          transform: scale(1.08);
        }
        .popular-card:hover h4 {
          color: #911224 !important;
        }
      `}</style>
    </section>
  );
}
