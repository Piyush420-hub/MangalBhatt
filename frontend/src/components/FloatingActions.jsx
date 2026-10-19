import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Volume2, VolumeX, ArrowUp } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';

export default function FloatingActions({ onOpenBooking }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle Devotional Chime / Ambient Sound Synthesizer (Pure Web Audio API, 100% reliable without external audio files)
  const toggleSound = () => {
    if (!isPlayingSound) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        // Play gentle Tibetan bell / Tanpura harmonic meditation tone
        const playBell = () => {
          if (ctx.state === 'suspended') {
            ctx.resume();
          }
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gainNode = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(136.1, ctx.currentTime); // 136.1 Hz is the sacred cosmic 'OM' frequency

          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(272.2, ctx.currentTime); // Octave harmonic

          gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.5);
          gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);

          osc1.connect(gainNode);
          osc2.connect(gainNode);
          gainNode.connect(ctx.destination);

          osc1.start(ctx.currentTime);
          osc2.start(ctx.currentTime);
          osc1.stop(ctx.currentTime + 4.6);
          osc2.stop(ctx.currentTime + 4.6);
        };

        playBell();
        const interval = setInterval(playBell, 5000);

        setAudioCtx({ ctx, interval });
        setIsPlayingSound(true);
      } catch (e) {
        console.error(e);
      }
    } else {
      if (audioCtx) {
        clearInterval(audioCtx.interval);
        audioCtx.ctx.close();
      }
      setIsPlayingSound(false);
      setAudioCtx(null);
    }
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

        {/* Devotional Sound Toggle */}
        <button
          onClick={toggleSound}
          title={isPlayingSound ? 'ध्वनि बंद करें' : 'पवित्र ॐ नाद सुनें'}
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: isPlayingSound ? '#730014' : '#ffffff',
            border: '2px solid #d4af37',
            color: isPlayingSound ? '#ffd700' : '#730014',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          {isPlayingSound ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title="ऊपर जाएं"
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
          title="पंडित जी को कॉल करें"
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
          href={getWhatsAppLink("प्रणाम पंडित जी, मुझे Mangalbhatpujaujjain.in के माध्यम से पूजा करवानी है।")}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp पर चैट करें"
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
          <span>कॉल करें</span>
        </a>

        <a
          href={getWhatsAppLink()}
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
          <span>पूजा बुक करें</span>
        </button>
      </div>
    </>
  );
}
