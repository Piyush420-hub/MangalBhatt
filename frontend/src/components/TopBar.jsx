import React, { useState } from 'react';
import { Phone, Volume2, VolumeX } from 'lucide-react';
import { PANDIT_INFO } from '../data/pujaData';
import { translations } from '../data/translations';
import { toggleOmSound, getOmSoundStatus } from '../utils/omAudio';

export default function TopBar({ lang, setLang }) {
  const t = translations[lang].topBar;
  const [soundPlaying, setSoundPlaying] = useState(getOmSoundStatus());

  const handleSoundToggle = () => {
    const status = toggleOmSound();
    setSoundPlaying(status);
  };

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
        {/* Left: Sacred Mantra + Subtle Om Sound Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          <span style={{ color: '#ffd700', fontSize: '1rem' }}>🕉️</span>
          <span>{t.mantra}</span>

          {/* Gentle Cosmic Om Audio Trigger Pill */}
          <button
            onClick={handleSoundToggle}
            title={soundPlaying ? 'ध्वनि बंद करें' : 'शांत ॐ नाद सुनें'}
            style={{
              background: soundPlaying
                ? 'linear-gradient(135deg, #ffd700, #ffaa00)'
                : 'rgba(255, 255, 255, 0.12)',
              color: soundPlaying ? '#3a0206' : '#ffd700',
              border: '1px solid #ffd700',
              borderRadius: '20px',
              padding: '2px 10px',
              fontSize: '0.74rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: soundPlaying ? '0 0 10px rgba(255, 215, 0, 0.6)' : 'none'
            }}
            className="om-sound-pill"
          >
            {soundPlaying ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span>
              {soundPlaying
                ? (lang === 'hi' ? 'ॐ नाद चालू है' : 'Om Sound Playing')
                : (lang === 'hi' ? 'पवित्र ॐ नाद सुनें' : 'Play Om Ambient')}
            </span>
            {soundPlaying && (
              <span className="sound-wave-anim" style={{ display: 'inline-flex', gap: '2px' }}>
                <span style={{ width: '2px', height: '8px', background: '#3a0206', borderRadius: '1px', animation: 'waveBar 0.8s infinite alternate' }} />
                <span style={{ width: '2px', height: '12px', background: '#3a0206', borderRadius: '1px', animation: 'waveBar 0.8s infinite 0.2s alternate' }} />
                <span style={{ width: '2px', height: '6px', background: '#3a0206', borderRadius: '1px', animation: 'waveBar 0.8s infinite 0.4s alternate' }} />
              </span>
            )}
          </button>
        </div>

        {/* Center Pillars */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          letterSpacing: '1px',
          fontWeight: '500',
          color: '#fcedcc'
        }} className="topbar-pillars">
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

      <style>{`
        @keyframes waveBar {
          0% { height: 4px; }
          100% { height: 12px; }
        }
        @media (max-width: 768px) {
          .topbar-pillars {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
