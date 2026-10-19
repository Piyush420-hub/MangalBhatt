import React from 'react';
import { Phone } from 'lucide-react';
import { PANDIT_INFO } from '../data/pujaData';
import { translations } from '../data/translations';

export default function TopBar({ lang, setLang }) {
  const t = translations[lang].topBar;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #3d0207 0%, #680514 50%, #3d0207 100%)',
      color: '#f8e7b9',
      borderBottom: '1px solid #c89d28',
      fontSize: '0.84rem',
      padding: '7px 0',
      position: 'relative',
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {/* Sacred Mantra */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          <span style={{ color: '#ffd700', fontSize: '1rem' }}>🕉️</span>
          <span>{t.mantra}</span>
        </div>

        {/* Center Pillars */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          letterSpacing: '1px',
          fontWeight: '500',
          color: '#fcedcc'
        }}>
          <span>{t.dharma}</span>
          <span style={{ color: '#d4af37' }}>|</span>
          <span>{t.seva}</span>
          <span style={{ color: '#d4af37' }}>|</span>
          <span>{t.vishwas}</span>
        </div>

        {/* Right - Call & Language Switcher */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <a
            href={`tel:${PANDIT_INFO.phone}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#ffffff',
              fontWeight: '600'
            }}
          >
            <Phone size={14} color="#ffd700" />
            <span>{PANDIT_INFO.phone}</span>
          </a>

          {/* Interactive Language Toggle Button */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(0,0,0,0.35)',
            borderRadius: '20px',
            border: '1.5px solid #d4af37',
            padding: '2px 4px',
            fontSize: '0.8rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
          }}>
            <button
              onClick={() => setLang('hi')}
              style={{
                background: lang === 'hi' ? 'linear-gradient(135deg, #ffd700, #d4af37)' : 'transparent',
                color: lang === 'hi' ? '#3d0207' : '#fcedcc',
                padding: '3px 10px',
                borderRadius: '14px',
                fontWeight: lang === 'hi' ? '800' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none'
              }}
            >
              हिंदी
            </button>
            <span style={{ color: '#d4af37', padding: '0 2px' }}>|</span>
            <button
              onClick={() => setLang('en')}
              style={{
                background: lang === 'en' ? 'linear-gradient(135deg, #ffd700, #d4af37)' : 'transparent',
                color: lang === 'en' ? '#3d0207' : '#fcedcc',
                padding: '3px 10px',
                borderRadius: '14px',
                fontWeight: lang === 'en' ? '800' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none'
              }}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
