import React from 'react';
import { Calendar, MessageCircle, ArrowRight, Sparkles, Check } from 'lucide-react';
import { TOP_PUJAS, SECONDARY_PUJAS, GRID_SERVICES, getWhatsAppLink } from '../data/pujaData';

export default function ServicesPage({ onOpenBooking, onOpenKundaliModal }) {
  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            || सम्पूर्ण वैदिक सेवाएं ||
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            उज्जैन की समस्त सिद्ध पूजा एवं अनुष्ठान
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '650px',
            margin: '8px auto 0',
            fontFamily: 'var(--font-devanagari)'
          }}>
            प्रत्येक पूजा शास्त्रों के अनुसार, निर्धारित शुभ मुहूर्त में यजमान के नाम व गोत्र से विधिपूर्वक संपन्न कराई जाती है।
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 5 Top Pujas in Full Depth */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '1.6rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            marginBottom: '20px',
            borderLeft: '4px solid #730014',
            paddingLeft: '12px'
          }}>
            मुख्य प्राथमिक पूजाएं (Top Services)
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {TOP_PUJAS.map((puja) => (
              <div
                key={puja.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #ebd9bc',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                  display: 'grid',
                  gridTemplateColumns: '320px 1fr'
                }}
                className="service-detail-card"
              >
                <div style={{ position: 'relative', minHeight: '260px' }}>
                  <img
                    src={puja.image}
                    alt={puja.nameHi}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: '#730014',
                    color: '#ffd700',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}>
                    {puja.badge}
                  </div>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: '#730014', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                      {puja.nameHi}
                    </h3>
                    <p style={{ fontSize: '0.94rem', color: '#473630', lineHeight: 1.6, marginBottom: '14px' }}>
                      {puja.fullDesc}
                    </p>

                    {puja.whyUjjain && (
                      <div style={{
                        background: '#fcf8ee',
                        borderLeft: '3px solid #d4af37',
                        padding: '10px 14px',
                        fontSize: '0.86rem',
                        color: '#6e564f',
                        marginBottom: '14px'
                      }}>
                        <strong>उज्जैन में ही क्यों?</strong> {puja.whyUjjain}
                      </div>
                    )}

                    {puja.benefits && (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '16px' }}>
                        {puja.benefits.map((b, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#3d2e29' }}>
                            <Check size={14} color="#730014" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid #ebd9bc', paddingTop: '14px' }}>
                    <button
                      onClick={() => onOpenBooking(puja.nameHi)}
                      className="btn-maroon"
                      style={{ padding: '9px 18px', fontSize: '0.88rem' }}
                    >
                      <Calendar size={16} />
                      <span>पूजा बुक करें</span>
                    </button>
                    <a
                      href={getWhatsAppLink(`प्रणाम पंडित जी, मुझे ${puja.nameHi} के बारे में जानकारी चाहिए।`)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                      style={{ padding: '9px 18px', fontSize: '0.88rem' }}
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp पर पूछें</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Pujas & Hawan Section */}
        <div>
          <h2 style={{
            fontSize: '1.6rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            marginBottom: '20px',
            borderLeft: '4px solid #730014',
            paddingLeft: '12px'
          }}>
            विशिष्ट हवन एवं अनुष्ठान (Hawan & Special Pujas)
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {SECONDARY_PUJAS.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e0cfaf',
                  borderRadius: '10px',
                  padding: '18px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ fontSize: '0.74rem', color: '#9e7d18', fontWeight: '700', textTransform: 'uppercase' }}>
                  {item.category}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#730014', marginTop: '4px', marginBottom: '8px' }}>
                  {item.titleHi}
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#55423c', marginBottom: '14px' }}>
                  {item.focusHi}
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => onOpenBooking(item.titleHi)}
                    className="btn-maroon"
                    style={{ flex: 1, justifyContent: 'center', padding: '6px 10px', fontSize: '0.8rem' }}
                  >
                    बुक करें
                  </button>
                  <a
                    href={getWhatsAppLink(`प्रणाम पंडित जी, मुझे ${item.titleHi} के बारे में जानना है।`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                  >
                    पूछें
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .service-detail-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
