import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PANDIT_INFO } from '../data/pujaData';

export default function TopBar({ lang, setLang }) {
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
          <span>|| ॐ नमः शिवाय ||</span>
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
          <span>धर्म</span>
          <span style={{ color: '#d4af37' }}>|</span>
          <span>सेवा</span>
          <span style={{ color: '#d4af37' }}>|</span>
          <span>विश्वास</span>
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

          {/* Language Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '20px',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            padding: '2px 4px',
            fontSize: '0.78rem'
          }}>
            <button
              onClick={() => setLang('hi')}
              style={{
                background: lang === 'hi' ? '#d4af37' : 'transparent',
                color: lang === 'hi' ? '#240407' : '#fcedcc',
                padding: '2px 8px',
                borderRadius: '12px',
                fontWeight: lang === 'hi' ? '700' : '400'
              }}
            >
              हिंदी
            </button>
            <span style={{ color: '#d4af37', padding: '0 2px' }}>|</span>
            <button
              onClick={() => setLang('en')}
              style={{
                background: lang === 'en' ? '#d4af37' : 'transparent',
                color: lang === 'en' ? '#240407' : '#fcedcc',
                padding: '2px 8px',
                borderRadius: '12px',
                fontWeight: lang === 'en' ? '700' : '400'
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
