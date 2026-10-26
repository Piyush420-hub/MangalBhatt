import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Volume2, VolumeX, ArrowUp } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';
import { toggleOmSound, subscribeOmSound } from '../utils/omAudio';
import { translations } from '../data/translations';

export default function FloatingActions({ lang = 'hi', onOpenBooking }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const t = translations[lang]?.floating || translations.hi.floating;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);

    // Sync with audio engine
    const unsubscribe = subscribeOmSound((status) => {
      setIsPlayingSound(status);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleToggleSound = () => {
    toggleOmSound();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons on Desktop & Tablet (Right side) */}
      <div style={{
        position: 'fixed',
        right: '20px',
        bottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 998
      }} className="desktop-floating-actions">

        {/* Gentle Devotional Cosmic Om Sound Toggle */}
        <button
          onClick={handleToggleSound}
          title={isPlayingSound ? t.omOn : t.omOff}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: isPlayingSound
              ? 'linear-gradient(135deg, #ffd700, #ff9900)'
              : '#ffffff',
            border: '2px solid #d4af37',
            color: isPlayingSound ? '#3d0207' : '#730014',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isPlayingSound
              ? '0 0 20px rgba(255, 215, 0, 0.7), 0 4px 15px rgba(0,0,0,0.2)'
              : '0 4px 15px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          className={isPlayingSound ? 'pulse-animation' : ''}
        >
          {isPlayingSound ? <Volume2 size={22} /> : <VolumeX size={22} />}
          <span style={{
            fontSize: '9px',
            fontWeight: '800',
            lineHeight: 1,
            marginTop: '2px'
          }}>
            {isPlayingSound ? 'ॐ ON' : 'ॐ'}
          </span>
        </button>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title={t.backToTop}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '2px solid #d4af37',
              color: '#730014',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              cursor: 'pointer'
            }}
          >
            <ArrowUp size={20} />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${PANDIT_INFO.phone}`}
          title={t.callPandit}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #730014, #4a0309)',
            border: '2px solid #ffd700',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(115,0,20,0.4)',
            textDecoration: 'none'
          }}
        >
          <Phone size={22} color="#ffd700" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={getWhatsAppLink(t.defaultWaMsg)}
          target="_blank"
          rel="noopener noreferrer"
          title={t.chatWhatsApp}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#25d366',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(37,211,102,0.5)',
            textDecoration: 'none',
            position: 'relative'
          }}
          className="pulse-animation"
        >
          <MessageCircle size={30} />
          {/* Notification Badge */}
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            background: '#ff0000',
            color: '#ffffff',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            fontSize: '11px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            border: '2px solid #ffffff'
          }}>
            1
          </span>
        </a>
      </div>

      {/* Sticky Bottom Bar for Mobile View */}
      <div className="mobile-sticky-bar">
        {/* Mobile Om Sound Button */}
        <button
          onClick={handleToggleSound}
          style={{
            background: isPlayingSound ? '#ffd700' : 'rgba(255,255,255,0.1)',
            border: '1px solid #ffd700',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            color: isPlayingSound ? '#730014' : '#ffd700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title={isPlayingSound ? t.omOn : t.omOff}
        >
          {isPlayingSound ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>

        <a
          href={`tel:${PANDIT_INFO.phone}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#ffd700',
            fontSize: '0.74rem',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          <Phone size={18} />
          <span>{t.callBtn}</span>
        </a>

        <a
          href={getWhatsAppLink(t.defaultWaMsg)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: '#25d366',
            color: '#ffffff',
            borderRadius: '25px',
            padding: '8px 18px',
            fontSize: '0.84rem',
            fontWeight: '700',
            textDecoration: 'none'
          }}
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: '#730014',
            color: '#ffd700',
            border: '1px solid #ffd700',
            borderRadius: '25px',
            padding: '8px 18px',
            fontSize: '0.84rem',
            fontWeight: '700'
          }}
        >
          <Calendar size={16} />
          <span>{t.bookPujaBtn}</span>
        </button>
      </div>
    </>
  );
}
