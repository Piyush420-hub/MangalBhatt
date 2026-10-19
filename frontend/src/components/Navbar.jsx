import React, { useState } from 'react';
import { Calendar, Menu, X, Phone } from 'lucide-react';
import { PANDIT_INFO } from '../data/pujaData';
import { translations } from '../data/translations';

export default function Navbar({ lang = 'hi', activePage, setActivePage, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'services', label: t.services },
    { id: 'pujas', label: t.pujas },
    { id: 'jyotish', label: t.jyotish },
    { id: 'vastu', label: t.vastu },
    { id: 'gallery', label: t.gallery },
    { id: 'contact', label: t.contact }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '2px solid #e8dbb8',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 990
    }}>
      <div className="container navbar-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px'
      }}>
        {/* Brand / Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="navbar-brand"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}
        >
          {/* Sacred Kalash / Trishul Emblem */}
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fff2cc, #ffd700, #d4af37)',
            border: '2px solid #9e7d18',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(212,175,55,0.4)',
            fontSize: '1.4rem',
            color: '#730014'
          }}>
            🕉️
          </div>

          <div className="navbar-brand-copy">
            <div style={{
              fontSize: '0.74rem',
              color: '#d4af37',
              letterSpacing: '1.2px',
              fontWeight: '700',
              textTransform: 'uppercase'
            }} className="navbar-brand-kicker">
              {PANDIT_INFO.websiteName}
            </div>
            <h1 style={{
              fontSize: '1.22rem',
              lineHeight: 1.15,
              fontWeight: '800',
              color: '#730014',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.2px'
            }} className="navbar-brand-name">
              Pandit Tarun Puri Goswami
            </h1>
            <div style={{
              fontSize: '0.82rem',
              color: '#7a5a22',
              fontWeight: '600',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }} className="navbar-brand-title">
              {t.panditTitle}
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '20px'
        }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'transparent',
                  color: isActive ? '#730014' : '#423733',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '0.92rem',
                  padding: '6px 2px',
                  borderBottom: isActive ? '2px solid #730014' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#730014';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#423733';
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onOpenBooking}
            className="btn-maroon navbar-booking-button"
            style={{
              padding: '9px 18px',
              fontSize: '0.88rem'
            }}
          >
            <Calendar size={16} color="#ffd700" />
            <span style={{ fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)' }}>
              {t.bookPuja}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              padding: '8px',
              borderRadius: '6px',
              background: '#f4ede1',
              color: '#730014',
              border: '1px solid #d4af37'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid #e8dbb8',
          padding: '16px 20px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    textAlign: 'left',
                    background: isActive ? '#fef7ea' : 'transparent',
                    color: isActive ? '#730014' : '#332724',
                    fontWeight: isActive ? '700' : '500',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    borderLeft: isActive ? '4px solid #730014' : '4px solid transparent',
                    fontSize: '0.98rem'
                  }}
                >
                  {link.label}
                </button>
              );
            })}
            <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
              <a
                href={`tel:${PANDIT_INFO.phone}`}
                className="btn-maroon"
                style={{ flex: 1, justifyContent: 'center', padding: '10px' }}
              >
                <Phone size={16} />
                <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="btn-gold"
                style={{ flex: 1, justifyContent: 'center', padding: '10px' }}
              >
                <Calendar size={16} />
                <span>{t.bookPuja}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
