import React from 'react';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';
import { translations } from '../data/translations';

export default function Hero({ lang = 'hi', onOpenBooking }) {
  const t = translations[lang].hero;

  const pillIcons = ['🪔', '🤝', '🕉️', '🧘', '📍'];

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
      {/* Decorative Golden Top Line */}
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
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              <span style={{ color: '#ffaa4d' }}>🕉️</span>
              <span>{t.cityTag}</span>
            </div>

            {/* Pandit Ji Name */}
            <h1 className="hero-title" style={{
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
              {lang === 'hi' ? PANDIT_INFO.nameHi : PANDIT_INFO.name}
            </h1>

            {/* Title / Specialization */}
            <div style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)',
              color: '#ffc83b',
              fontWeight: '700',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              marginBottom: '16px',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}>
              {t.title}
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#f0e6dc',
              marginBottom: '28px',
              maxWidth: '560px',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              {t.desc}
            </p>

            {/* 3 Main Action Buttons */}
            <div className="hero-actions" style={{
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
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', opacity: 0.9 }}>{t.callNow}</div>
                  <div style={{ fontWeight: '700', letterSpacing: '0.5px' }}>{PANDIT_INFO.phone}</div>
                </div>
              </a>

              {/* WhatsApp Button */}
              <a
                href={getWhatsAppLink(lang === 'hi' ? "प्रणाम पंडित जी, मुझे उज्जैन में पूजा और परामर्श के संबंध में बात करनी है।" : "Pranam Pandit Ji, I would like to inquire regarding Puja and astrology consultation in Ujjain.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.4)'
                }}
              >
                <MessageCircle size={20} />
                <span>{t.whatsapp}</span>
              </a>

              {/* Book Puja Button */}
              <button
                onClick={onOpenBooking}
                className="btn-gold pulse-animation"
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
                }}
              >
                <Calendar size={19} />
                <span>{t.bookPuja}</span>
              </button>
            </div>
          </div>

          {/* Right Column - Pandit Ji Portrait with Sacred Aura */}
          <div className="hero-portrait-frame" style={{
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
                className="hero-portrait"
                src="/images/pandit_tarun_puri.png?v=2"
                alt={`${lang === 'hi' ? PANDIT_INFO.nameHi : PANDIT_INFO.name} - ${t.title}`}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  objectPosition: 'center 12%',
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
                <span>{t.locationBadge}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pills Bar */}
        <div className="hero-pills" style={{
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
          {t.pills.map((pill, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem', color: '#ffc83b' }}>{pillIcons[idx]}</span>
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: '700', color: '#ffffff' }}>{pill.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#ffd269' }}>{pill.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-actions .btn-maroon,
          .hero-actions .btn-whatsapp,
          .hero-actions .btn-gold {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
