import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';

export default function CtaBanner() {
  return (
    <section style={{
      position: 'relative',
      backgroundImage: `linear-gradient(to right, rgba(20, 7, 5, 0.94) 0%, rgba(30, 10, 7, 0.88) 50%, rgba(18, 6, 4, 0.95) 100%), url('/images/mahakal_bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#ffffff',
      padding: '38px 0',
      borderTop: '2px solid #d4af37',
      borderBottom: '2px solid #d4af37'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {/* Left: Heading and Tagline */}
          <div>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              fontWeight: '800',
              fontFamily: 'var(--font-serif)',
              color: '#ffffff',
              marginBottom: '6px',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)'
            }}>
              अपनी समस्या का समाधान पाएं
            </h3>
            <p style={{
              fontSize: '1.02rem',
              color: '#ffe599',
              fontFamily: 'var(--font-devanagari)',
              letterSpacing: '0.3px'
            }}>
              आज ही संपर्क करें और जीवन में सकारात्मक परिवर्तन लाएं।
            </p>
          </div>

          {/* Center: Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px'
          }}>
            {/* Call Button */}
            <a
              href={`tel:${PANDIT_INFO.phone}`}
              style={{
                background: 'linear-gradient(135deg, #8b0000, #5c0000)',
                color: '#ffffff',
                border: '1px solid #ffd700',
                borderRadius: '8px',
                padding: '9px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                textDecoration: 'none'
              }}
              className="cta-call-btn"
            >
              <Phone size={18} color="#ffd700" />
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <div style={{ fontWeight: '700', fontSize: '0.96rem' }}>{PANDIT_INFO.phone}</div>
                <div style={{ fontSize: '0.74rem', color: '#ffd700', fontFamily: 'var(--font-devanagari)' }}>कॉल करें</div>
              </div>
            </a>

            {/* WhatsApp Button */}
            <a
              href={getWhatsAppLink("प्रणाम पंडित जी, मुझे अपनी समस्या के समाधान हेतु ज्योतिषीय मार्गदर्शन एवं पूजा करवानी है।")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #25d366, #128c7e)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '8px',
                padding: '9px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                textDecoration: 'none'
              }}
              className="cta-wa-btn"
            >
              <MessageCircle size={18} />
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <div style={{ fontWeight: '700', fontSize: '0.96rem' }}>{PANDIT_INFO.phone}</div>
                <div style={{ fontSize: '0.74rem', color: '#e8fdec', fontFamily: 'var(--font-devanagari)' }}>WhatsApp करें</div>
              </div>
            </a>
          </div>

          {/* Right: Trishul Emblem */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#ffd700',
            fontSize: '1rem',
            fontFamily: 'var(--font-devanagari)',
            fontWeight: '600',
            borderLeft: '1px solid rgba(212,175,55,0.4)',
            paddingLeft: '20px'
          }}>
            <span style={{ fontSize: '1.8rem' }}>🔱</span>
            <span>धर्म • सेवा • विश्वास</span>
          </div>
        </div>
      </div>

      <style>{`
        .cta-call-btn:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
        }
        .cta-wa-btn:hover {
          filter: brightness(1.12);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
