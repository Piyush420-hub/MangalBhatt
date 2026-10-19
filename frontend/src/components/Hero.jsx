import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, MapPin, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';

export default function Hero({ onOpenBooking }) {
  return (
    <section style={{
      position: 'relative',
      backgroundImage: `linear-gradient(to right, rgba(17, 7, 5, 0.94) 0%, rgba(26, 10, 7, 0.82) 48%, rgba(20, 7, 5, 0.88) 100%), url('/images/mahakal_bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      color: '#ffffff',
      paddingTop: '55px',
      paddingBottom: '35px',
      borderBottom: '4px solid #d4af37',
      overflow: 'hidden'
    }}>
      {/* Decorative Golden Ambient Sparks */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #d4af37, #ffd700, #ff7700, #d4af37)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column - Divine Text & Action Buttons */}
          <div>
            {/* Sacred Tagline */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ffd269',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '1px',
              marginBottom: '10px',
              fontFamily: 'var(--font-devanagari)'
            }}>
              <span style={{ color: '#ffaa4d' }}>🕉️</span>
              <span>|| महाकाल की नगरी उज्जैन से ||</span>
            </div>

            {/* Pandit Ji Name */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
              lineHeight: 1.1,
              fontWeight: '800',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.5px',
              marginBottom: '10px',
              background: 'linear-gradient(135deg, #ffffff 0%, #fff0cc 60%, #ffd770 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 15px rgba(0,0,0,0.4)'
            }}>
              Pandit<br />
              Tarun Puri Goswami
            </h1>

            {/* Title / Specialization */}
            <div style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)',
              color: '#ffc83b',
              fontWeight: '700',
              fontFamily: 'var(--font-devanagari)',
              marginBottom: '16px',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}>
              ज्योतिष एवं वास्तु विशेषज्ञ
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#f0e6dc',
              marginBottom: '28px',
              maxWidth: '560px',
              fontFamily: 'var(--font-devanagari)'
            }}>
              {PANDIT_INFO.taglineHi}
            </p>

            {/* 3 Main Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '35px'
            }}>
              {/* Call Now */}
              <a
                href={`tel:${PANDIT_INFO.phone}`}
                className="btn-maroon"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.96rem',
                  boxShadow: '0 6px 20px rgba(115,0,20,0.5)'
                }}
              >
                <div style={{
                  background: 'rgba(255,255,255,0.15)',
                  padding: '5px',
                  borderRadius: '50%',
                  display: 'flex'
                }}>
                  <Phone size={17} color="#ffd700" />
                </div>
                <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', opacity: 0.9 }}>Call Now</div>
                  <div style={{ fontWeight: '700', letterSpacing: '0.5px' }}>{PANDIT_INFO.phone}</div>
                </div>
              </a>

              {/* WhatsApp Button */}
              <a
                href={getWhatsAppLink("प्रणाम पंडित जी, मुझे उज्जैन में पूजा और परामर्श के संबंध में बात करनी है।")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-devanagari)',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.4)'
                }}
              >
                <MessageCircle size={20} />
                <span>WhatsApp करें</span>
              </a>

              {/* Book Puja Button */}
              <button
                onClick={onOpenBooking}
                className="btn-gold pulse-animation"
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-devanagari)'
                }}
              >
                <Calendar size={19} />
                <span>पूजा बुक करें</span>
              </button>
            </div>
          </div>

          {/* Right Column - Pandit Ji Portrait with Sacred Aura */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Glowing Golden Circle Background */}
            <div style={{
              position: 'absolute',
              width: '340px',
              height: '340px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 183, 3, 0.4) 0%, rgba(212, 175, 55, 0.15) 50%, transparent 70%)',
              zIndex: 1
            }} />

            {/* Pandit Ji Image Container */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              borderRadius: '24px',
              padding: '8px',
              background: 'linear-gradient(135deg, rgba(255,215,0,0.7), rgba(115,0,20,0.5), rgba(255,183,3,0.7))',
              boxShadow: '0 15px 45px rgba(0,0,0,0.6), 0 0 35px rgba(212,175,55,0.3)',
              maxWidth: '380px'
            }}>
              <img
                src="/images/pandit_ji.png"
                alt="Pandit Tarun Puri Goswami - Spiritual Jyotish & Vastu Specialist, Ujjain"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  borderRadius: '18px',
                  border: '2px solid rgba(255, 230, 150, 0.6)'
                }}
              />

              {/* Location Badge on Image */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: 'rgba(21, 9, 6, 0.92)',
                border: '1px solid #d4af37',
                borderRadius: '30px',
                padding: '6px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#ffe599',
                fontSize: '0.82rem',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(6px)'
              }}>
                <MapPin size={14} color="#ff7700" />
                <span>उज्जैन, मध्य प्रदेश</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pills Bar (Directly beneath hero content as in screenshot) */}
        <div style={{
          marginTop: '35px',
          background: 'rgba(15, 6, 4, 0.72)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '50px',
          padding: '12px 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          alignItems: 'center'
        }}>
          {/* Pill 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem', color: '#ffc83b' }}>🪔</span>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: '700', color: '#ffffff' }}>आध्यात्मिक सेवा</div>
              <div style={{ fontSize: '0.72rem', color: '#ffd269' }}>पवित्र वैदिक परंपरा</div>
            </div>
          </div>

          {/* Pill 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem', color: '#ffc83b' }}>🤝</span>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: '700', color: '#ffffff' }}>अनुभव एवं विश्वास</div>
              <div style={{ fontSize: '0.72rem', color: '#ffd269' }}>15+ वर्षों की निरंतर सेवा</div>
            </div>
          </div>

          {/* Pill 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem', color: '#ffc83b' }}>🕉️</span>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: '700', color: '#ffffff' }}>विधि-विधान से पूजा</div>
              <div style={{ fontSize: '0.72rem', color: '#ffd269' }}>100% शास्त्रोक्त अनुष्ठान</div>
            </div>
          </div>

          {/* Pill 4 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem', color: '#ffc83b' }}>🧘</span>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: '700', color: '#ffffff' }}>व्यक्तिगत मार्गदर्शन</div>
              <div style={{ fontSize: '0.72rem', color: '#ffd269' }}>कुंडली व दोष निवारण</div>
            </div>
          </div>

          {/* Pill 5 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem', color: '#ff7700' }}>📍</span>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: '700', color: '#ffffff' }}>उज्जैन धाम</div>
              <div style={{ fontSize: '0.72rem', color: '#ffd269' }}>महाकाल की पावन नगरी</div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-templateColumns: 1fr !important;
            text-align: center;
          }
          .hero-grid div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid .btn-maroon,
          .hero-grid .btn-whatsapp,
          .hero-grid .btn-gold {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
