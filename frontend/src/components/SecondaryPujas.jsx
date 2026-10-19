import React from 'react';
import { Flame, MessageCircle, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { SECONDARY_PUJAS, getWhatsAppLink } from '../data/pujaData';

export default function SecondaryPujas({ onOpenBooking }) {
  return (
    <section style={{
      padding: '50px 0',
      background: 'linear-gradient(180deg, #fbf7ee 0%, #f4ede1 100%)',
      borderBottom: '1px solid #dfcfb2'
    }}>
      <div className="container">
        {/* Sacred Heading */}
        <div className="sacred-heading">
          <div className="sacred-heading-title">
            <span className="om-symbol">ॐ</span>
            <span>वैदिक पूजा-पाठ एवं विशिष्ट हवन अनुष्ठान</span>
            <span className="om-symbol">ॐ</span>
          </div>
          <p className="sacred-heading-sub">
            शत्रु बाधा, व्यापार वृद्धि, कोर्ट केस विजय, तंत्र निवारण एवं लक्ष्मी प्राप्ति हेतु सिद्ध अनुष्ठान
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🔥</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 12 Specific Hawan & Puja Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '16px',
          marginBottom: '35px'
        }}>
          {SECONDARY_PUJAS.map((item) => (
            <div
              key={item.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e2d2b5',
                borderLeft: '4px solid #730014',
                borderRadius: '8px',
                padding: '18px 20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
              className="secondary-puja-card"
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    color: '#9e7d18',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    background: '#fcf6e8',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    border: '1px solid #ebd9bc'
                  }}>
                    {item.category}
                  </span>
                  <Flame size={16} color="#ff7700" />
                </div>

                <h4 style={{
                  fontSize: '1.08rem',
                  fontWeight: '700',
                  color: '#730014',
                  fontFamily: 'var(--font-devanagari)',
                  marginBottom: '6px'
                }}>
                  {item.titleHi}
                </h4>

                <p style={{
                  fontSize: '0.86rem',
                  color: '#52433e',
                  lineHeight: 1.45,
                  marginBottom: '14px',
                  fontFamily: 'var(--font-devanagari)'
                }}>
                  {item.focusHi}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingTop: '10px',
                borderTop: '1px dashed #ebd9bc'
              }}>
                <button
                  onClick={() => onOpenBooking(item.titleHi)}
                  style={{
                    background: '#730014',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    flex: 1,
                    justifyContent: 'center'
                  }}
                  className="quick-book-btn"
                >
                  <Calendar size={13} color="#ffd700" />
                  <span>बुक करें</span>
                </button>

                <a
                  href={getWhatsAppLink(`प्रणाम पंडित जी, मुझे ${item.titleHi} (${item.focusHi}) के बारे में जानना है।`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25d366',
                    color: '#ffffff',
                    borderRadius: '20px',
                    padding: '6px 10px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none'
                  }}
                >
                  <MessageCircle size={13} />
                  <span>पूछें</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sacred Assurance Banner (as instructed in prompt) */}
        <div style={{
          background: 'linear-gradient(135deg, #730014 0%, #4a0309 100%)',
          border: '2px solid #ffd700',
          borderRadius: '12px',
          padding: '20px 24px',
          textAlign: 'center',
          boxShadow: '0 8px 25px rgba(115,0,20,0.25)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '1.6rem', color: '#ffd700' }}>🕉️</span>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
              fontWeight: '700',
              color: '#fff0c7',
              fontFamily: 'var(--font-devanagari)',
              letterSpacing: '0.3px'
            }}>
              "सभी प्रकार की पूजा-पाठ विधि-विधान से संपन्न कराये जाते हैं।"
            </h3>
            <span style={{ fontSize: '1.6rem', color: '#ffd700' }}>🕉️</span>
          </div>
          <p style={{
            fontSize: '0.88rem',
            color: '#f0e3ce',
            marginTop: '6px',
            fontFamily: 'var(--font-devanagari)'
          }}>
            चाहे आप स्वयं उज्जैन आकर पूजा में सम्मिलित हों, या ऑनलाइन लाइव संकल्प से पूजा करवाएं—सम्पूर्ण वैदिक कर्मकांड का पालन किया जाता है।
          </p>
        </div>
      </div>

      <style>{`
        .secondary-puja-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 22px rgba(115,0,20,0.12) !important;
          border-color: #d4af37 !important;
        }
        .quick-book-btn:hover {
          background: #911224 !important;
        }
      `}</style>
    </section>
  );
}
