import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';
import { translations } from '../data/translations';

export default function Footer({ lang = 'hi', onNavigate, onOpenBooking }) {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  const quickLinks = [
    { id: 'home', label: navT.home },
    { id: 'about', label: navT.about },
    { id: 'services', label: navT.services },
    { id: 'pujas', label: navT.pujas },
    { id: 'jyotish', label: navT.jyotish },
    { id: 'vastu', label: navT.vastu },
    { id: 'gallery', label: navT.gallery },
    { id: 'contact', label: navT.contact },
    { id: 'booking', label: navT.bookPuja }
  ];

  const serviceLinks = lang === 'hi' ? [
    'मंगल भात पूजन',
    'काल सर्प पूजा',
    'कुण्डली विश्लेषण',
    'रुद्र अभिषेक',
    'महामृत्युंजय अनुष्ठान',
    'ज्योतिष परामर्श',
    'वास्तु परामर्श',
    'यज्ञ एवं अनुष्ठान',
    'गृह वास्तु पूजा',
    'मूर्ति प्राण प्रतिष्ठा',
    'नवचंडी अनुष्ठान',
    'शिवशक्ति अनुष्ठान',
    'और भी बहुत कुछ...'
  ] : [
    'Mangal Bhat Puja',
    'Kaal Sarp Dosh Puja',
    'Kundali Analysis',
    'Maha Rudrabhishek',
    'Mahamrityunjaya Hawan',
    'Astrology Consultation',
    'Vastu Consultation',
    'Yajna & Anushthan',
    'Griha Vastu Puja',
    'Idol Consecration',
    'Navchandi Anushthan',
    'Shivshakti Anushthan',
    'And many more...'
  ];

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #1c0805 0%, #100403 100%)',
      color: '#e4d3c5',
      borderTop: '3px solid #d4af37',
      paddingTop: '50px',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        {/* 4 Columns Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.9fr 1fr 1fr',
          gap: '35px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(212,175,55,0.2)'
        }} className="footer-grid">

          {/* Col 1: Contact Details */}
          <div>
            <h4 style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: '#ffd700',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              marginBottom: '18px',
              borderBottom: '2px solid #730014',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              {t.contactHeading}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#ff7700" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{lang === 'hi' ? PANDIT_INFO.locationHi : PANDIT_INFO.locationEn}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#ffd700" style={{ flexShrink: 0 }} />
                <a href={`tel:${PANDIT_INFO.phone}`} style={{ color: '#ffffff', fontWeight: '600' }}>
                  {PANDIT_INFO.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#ffd700" style={{ flexShrink: 0 }} />
                <a href={`mailto:${PANDIT_INFO.email}`} style={{ color: '#e0cfaf' }}>
                  {PANDIT_INFO.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageCircle size={18} color="#25d366" style={{ flexShrink: 0 }} />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#68d391', fontWeight: '600' }}
                >
                  WhatsApp Available 24x7
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid #d4af37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffd700'
                }}
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid #d4af37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffd700'
                }}
              >
                📸
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid #d4af37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffd700'
                }}
              >
                ▶
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid #25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366'
                }}
              >
                💬
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: '#ffd700',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              marginBottom: '18px',
              borderBottom: '2px solid #730014',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              {t.quickLinksHeading}
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px 16px'
            }}>
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    if (link.id === 'booking') {
                      onOpenBooking();
                    } else {
                      onNavigate(link.id);
                    }
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#d4c2b0',
                    textAlign: 'left',
                    fontSize: '0.86rem',
                    padding: '3px 0',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffd700'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d4c2b0'}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: '#ffd700',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              marginBottom: '18px',
              borderBottom: '2px solid #730014',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              {t.servicesHeading}
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px 12px',
              fontSize: '0.84rem'
            }}>
              {serviceLinks.map((srv, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenBooking(srv)}
                  style={{
                    color: '#d4c2b0',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffd700'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d4c2b0'}
                >
                  <span style={{ color: '#d4af37' }}>+</span>
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Shloka / Blessing & Trishul */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: '12px',
            padding: '24px 20px'
          }}>
            <div style={{
              fontSize: '2.4rem',
              color: '#ffd700',
              marginBottom: '8px'
            }}>
              🔱
            </div>

            <p style={{
              fontStyle: 'italic',
              fontSize: '0.98rem',
              lineHeight: 1.6,
              color: '#f5e5c9',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              marginBottom: '12px'
            }}>
              {t.quote}
            </p>

            <div style={{
              fontWeight: '700',
              color: '#d4af37',
              fontSize: '0.88rem',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              {t.author}
            </div>
            <div style={{
              fontSize: '0.78rem',
              color: '#9e8c80',
              marginTop: '4px'
            }}>
              {lang === 'hi' ? 'उज्जैन, मध्य प्रदेश' : 'Ujjain, Madhya Pradesh'}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          padding: '20px 0',
          textAlign: 'center',
          fontSize: '0.82rem',
          color: '#a38f83'
        }}>
          <div>
            © {new Date().getFullYear()} {lang === 'hi' ? PANDIT_INFO.nameHi : PANDIT_INFO.name}. {t.rights}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
