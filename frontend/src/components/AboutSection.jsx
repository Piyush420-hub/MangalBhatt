import React from 'react';
import { 
  Award, Flame, ShieldCheck, Users, MapPin, 
  ArrowRight 
} from 'lucide-react';
import { translations } from '../data/translations';
import { PANDIT_INFO } from '../data/pujaData';

export default function AboutSection({ lang = 'hi', onNavigateAbout, onOpenBooking }) {
  const t = translations[lang].about;

  const statIcons = [
    <Award size={22} color="#730014" />,
    <Flame size={22} color="#730014" />,
    <ShieldCheck size={22} color="#730014" />,
    <Users size={22} color="#730014" />,
    <MapPin size={22} color="#730014" />
  ];

  return (
    <section style={{
      padding: '55px 0',
      background: '#ffffff',
      borderBottom: '1px solid #ebd9bc'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.25fr 0.85fr',
          gap: '30px',
          alignItems: 'center'
        }} className="about-grid">

          {/* Left Column: Pandit Ji Photo */}
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid #d4af37',
            boxShadow: '0 10px 30px rgba(115,0,20,0.12)'
          }}>
            <img
              src="/images/pandit_ji.png"
              alt={lang === 'hi' ? PANDIT_INFO.nameHi : PANDIT_INFO.name}
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover'
              }}
            />
            {/* Om Badge */}
            <div style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.92)',
              border: '2px solid #d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              color: '#730014',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
              ॐ
            </div>
          </div>

          {/* Center Column: Bio Text */}
          <div>
            <div style={{
              color: '#9e7d18',
              fontWeight: '700',
              fontSize: '0.95rem',
              letterSpacing: '1px',
              marginBottom: '6px',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              {t.subtitle}
            </div>

            <h2 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#730014',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.2,
              marginBottom: '6px'
            }}>
              {t.title}
            </h2>

            <div style={{
              fontSize: '1.05rem',
              fontWeight: '700',
              color: '#b8860b',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              marginBottom: '16px'
            }}>
              {t.tagline}
            </div>

            <p style={{
              fontSize: '0.96rem',
              lineHeight: 1.7,
              color: '#473630',
              marginBottom: '16px',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              {t.bio1}
            </p>

            <p style={{
              fontSize: '0.92rem',
              lineHeight: 1.65,
              color: '#63504a',
              marginBottom: '22px',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              {t.bio2}
            </p>

            {/* Read More button */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={onNavigateAbout}
                className="btn-maroon"
                style={{ padding: '10px 20px', fontSize: '0.92rem' }}
              >
                <span>{t.moreBtn}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenBooking}
                className="btn-gold"
                style={{ padding: '10px 20px', fontSize: '0.92rem' }}
              >
                <span>{t.consultBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Stats Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {t.stats.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fcf8ee',
                  border: '1px solid #ebd9bc',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'all 0.25s ease'
                }}
                className="stat-card"
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #d4af37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {statIcons[idx]}
                </div>
                <div>
                  <div style={{
                    fontSize: '1.15rem',
                    fontWeight: '800',
                    color: '#730014',
                    lineHeight: 1.15
                  }}>
                    {item.value}
                  </div>
                  <div style={{
                    fontSize: '0.82rem',
                    color: '#6e5a54',
                    fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
                  }}>
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .stat-card:hover {
          transform: translateX(4px);
          border-color: #d4af37 !important;
          background: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
