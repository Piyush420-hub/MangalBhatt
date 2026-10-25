import React from 'react';
import { Calendar, MessageCircle, Sparkles, Check, Flame } from 'lucide-react';
import { TOP_PUJAS, HAWAN_PUJAS_LIST, getWhatsAppLink } from '../data/pujaData';
import { SacredHawanEmblem } from '../components/SecondaryPujas';

export default function ServicesPage({ lang = 'hi', onOpenBooking, onOpenKundaliModal }) {
  return (
    <div style={{ padding: '40px 0 65px', background: 'linear-gradient(180deg, #fdfbf7 0%, #f9f4ea 100%)' }}>
      <div className="container">
        {/* Main Page Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div style={{ color: '#d4af37', fontWeight: '800', fontSize: '0.92rem', letterSpacing: '1px', marginBottom: '6px' }}>
            {lang === 'hi' ? '|| सम्पूर्ण वैदिक सेवाएं ||' : '|| Complete Vedic Spiritual Services ||'}
          </div>
          <h1 style={{
            fontSize: '2.6rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800',
            lineHeight: 1.2
          }}>
            {lang === 'hi' ? 'उज्जैन की समस्त सिद्ध पूजा एवं अनुष्ठान' : 'All Sanctified Pujas & Rituals of Ujjain'}
          </h1>
          <p style={{
            fontSize: '1.02rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '10px auto 0',
            fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
            lineHeight: 1.6
          }}>
            {lang === 'hi'
              ? 'प्रत्येक पूजा शास्त्रों के अनुसार, निर्धारित शुभ मुहूर्त में यजमान के नाम व गोत्र से विधिपूर्वक संपन्न कराई जाती है।'
              : 'Every ceremony is consecrated according to Vedic scriptures, in auspicious Muhurat with Yajman name and Gotra.'}
          </p>
          <div className="sacred-divider" style={{ marginTop: '14px' }}>
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🪔</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 1. 5 Top Pujas in Full Depth */}
        <div style={{ marginBottom: '65px' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div style={{ color: '#d4af37', fontWeight: '800', fontSize: '0.86rem', letterSpacing: '1px', marginBottom: '6px' }}>
              || महाकाल धाम उज्जैन की 5 मुख्य सिद्ध पूजाएं ||
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              color: '#730014',
              fontFamily: 'var(--font-serif)',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <span style={{ color: '#ffd700', fontSize: '1.6rem' }}>ॐ</span>
              <span>{lang === 'hi' ? 'मुख्य प्राथमिक पूजाएं (Top Services)' : 'Primary Sanctified Pujas (Top Services)'}</span>
              <span style={{ color: '#ffd700', fontSize: '1.6rem' }}>ॐ</span>
            </h2>
            <div className="sacred-divider" style={{ marginTop: '10px' }}>
              <div className="sacred-divider-line" />
              <span className="sacred-divider-icon">🔱</span>
              <div className="sacred-divider-line" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {TOP_PUJAS.map((puja) => {
              const displayName = lang === 'hi' ? puja.nameHi : puja.nameEn;
              return (
                <div
                  key={puja.id}
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #fffdf8 100%)',
                    border: '1.5px solid #d4af37',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(115,0,20,0.06)',
                    display: 'grid',
                    gridTemplateColumns: '320px 1fr',
                    transition: 'all 0.3s ease'
                  }}
                  className="service-detail-card"
                >
                  <div style={{ position: 'relative', minHeight: '260px' }}>
                    <img
                      src={puja.image}
                      alt={displayName}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'linear-gradient(135deg, #730014, #4a0309)',
                      color: '#ffd700',
                      border: '1px solid #ffd700',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}>
                      {lang === 'hi' ? puja.badge : (puja.badgeEn || puja.badge)}
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.45rem',
                        color: '#730014',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '10px',
                        fontWeight: '800'
                      }}>
                        {displayName}
                      </h3>
                      <p style={{
                        fontSize: '0.94rem',
                        color: '#473630',
                        lineHeight: 1.6,
                        marginBottom: '14px',
                        fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
                      }}>
                        {lang === 'hi' ? puja.fullDesc : (puja.fullDescEn || puja.fullDesc)}
                      </p>

                      {(puja.whyUjjain || puja.whyUjjainEn) && (
                        <div style={{
                          background: 'linear-gradient(135deg, #fffcf5, #fbf2e2)',
                          borderLeft: '4px solid #d4af37',
                          padding: '10px 14px',
                          fontSize: '0.88rem',
                          color: '#6e564f',
                          marginBottom: '14px',
                          borderRadius: '0 8px 8px 0'
                        }}>
                          <strong style={{ color: '#730014' }}>
                            {lang === 'hi' ? 'उज्जैन में ही क्यों?' : 'Why in Ujjain?'}
                          </strong>{' '}
                          {lang === 'hi' ? puja.whyUjjain : (puja.whyUjjainEn || puja.whyUjjain)}
                        </div>
                      )}

                      {puja.benefits && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', marginBottom: '16px' }}>
                          {((lang === 'hi' ? puja.benefits : (puja.benefitsEn || puja.benefits))).map((b, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#3d2e29' }}>
                              <Check size={15} color="#730014" style={{ flexShrink: 0 }} />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid #ebd9bc', paddingTop: '16px' }}>
                      <button
                        onClick={() => onOpenBooking(displayName)}
                        style={{
                          background: 'linear-gradient(135deg, #730014 0%, #54000e 100%)',
                          color: '#ffffff',
                          border: '1px solid #ffd700',
                          borderRadius: '25px',
                          padding: '10px 22px',
                          fontSize: '0.9rem',
                          fontWeight: '700',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '7px',
                          cursor: 'pointer',
                          boxShadow: '0 3px 10px rgba(115, 0, 20, 0.25)',
                          transition: 'all 0.2s ease'
                        }}
                        className="spiritual-btn-book"
                      >
                        <Calendar size={16} color="#ffd700" />
                        <span>{lang === 'hi' ? 'पूजा बुक करें' : 'Book Puja'}</span>
                      </button>

                      <a
                        href={getWhatsAppLink(
                          lang === 'hi'
                            ? `प्रणाम पंडित जी, मुझे ${displayName} के बारे में जानकारी चाहिए।`
                            : `Pranam Pandit Ji, I would like consultation and booking information regarding ${displayName}.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          background: 'linear-gradient(135deg, #25d366 0%, #1da851 100%)',
                          color: '#ffffff',
                          borderRadius: '25px',
                          padding: '10px 20px',
                          fontSize: '0.9rem',
                          fontWeight: '700',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '7px',
                          textDecoration: 'none',
                          boxShadow: '0 3px 10px rgba(37, 211, 102, 0.25)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <MessageCircle size={16} />
                        <span>{lang === 'hi' ? 'WhatsApp पर पूछें' : 'Ask on WhatsApp'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Sacred Hawan & Special Pujas Section (Authentic Vedic Aesthetics) */}
        <div>
          {/* Sacred Section Heading */}
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div style={{ color: '#d4af37', fontWeight: '800', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '6px' }}>
              || उज्जयिनी सिद्ध तंत्र एवं वैदिक महायज्ञ पीठ ||
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              color: '#730014',
              fontFamily: 'var(--font-serif)',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <span style={{ color: '#ffd700', fontSize: '1.6rem' }}>ॐ</span>
              <span>{lang === 'hi' ? 'विशिष्ट हवन एवं अनुष्ठान (Hawan & Special Pujas)' : 'Vedic Hawan & Specialized Anushthan'}</span>
              <span style={{ color: '#ffd700', fontSize: '1.6rem' }}>ॐ</span>
            </h2>
            <p style={{
              fontSize: '0.96rem',
              color: '#6e564f',
              maxWidth: '720px',
              margin: '8px auto 0',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              lineHeight: 1.5
            }}>
              {lang === 'hi'
                ? 'शत्रु बाधा, तंत्र निवारण, व्यापार वृद्धि, संतान प्राप्ति, कोर्ट केस विजय एवं अचल लक्ष्मी प्राप्ति हेतु महाकाल की धरा पर सिद्ध आहुति विधान'
                : 'Sacred ceremonies for victory over obstacles, business protection, court success, and prosperity'}
            </p>
            <div className="sacred-divider" style={{ marginTop: '12px' }}>
              <div className="sacred-divider-line" />
              <span className="sacred-divider-icon">🔥 🔱 🔥</span>
              <div className="sacred-divider-line" />
            </div>
          </div>

          {/* Sacred Assurance Quote Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #730014, #4a0309)',
            border: '2px solid #ffd700',
            borderRadius: '14px',
            padding: '22px 28px',
            textAlign: 'center',
            color: '#ffffff',
            marginBottom: '35px',
            boxShadow: '0 8px 25px rgba(115, 0, 20, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{
              fontSize: '1.35rem',
              color: '#ffd700',
              fontFamily: 'var(--font-serif)',
              marginBottom: '6px',
              fontWeight: '800'
            }}>
              "सभी प्रकार की पूजा-पाठ एवं हवन शास्त्रोक्त विधि-विधान से संपन्न कराये जाते हैं।"
            </h3>
            <p style={{
              color: '#fceded',
              fontSize: '0.92rem',
              maxWidth: '760px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              चाहे आप स्वयं उज्जैन आकर पूजा में सम्मिलित हों, या ऑनलाइन लाइव संकल्प से पूजा करवाएं—सम्पूर्ण वैदिक कर्मकांड, शुद्ध हवन सामग्री एवं आचार्य संकल्प के साथ पूजा पूर्ण कराई जाती है।
            </p>
          </div>

          {/* 12 Auspicious Hawan Cards Grid (Rich Vedic Parchment & Handcrafted Emblems) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {HAWAN_PUJAS_LIST.map((item) => {
              const displayTitle = lang === 'hi' ? item.titleHi : item.titleEn;
              const displayBadge = lang === 'hi' ? item.badgeHi : item.badgeEn;
              const displayFocus = lang === 'hi' ? item.focusHi : item.focusEn;

              return (
                <div
                  key={item.id}
                  style={{
                    background: 'linear-gradient(145deg, #fffcf7 0%, #fff9ec 50%, #fef5e4 100%)',
                    border: '1.5px solid #d4af37',
                    borderRadius: '16px',
                    padding: '22px 20px 18px',
                    boxShadow: '0 4px 16px rgba(115, 0, 20, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className="spiritual-hawan-card"
                >
                  {/* Decorative Sacred Background Watermark */}
                  <div style={{
                    position: 'absolute',
                    right: '-10px',
                    bottom: '-10px',
                    opacity: 0.04,
                    pointerEvents: 'none',
                    fontSize: '7.5rem',
                    color: '#730014',
                    fontFamily: 'var(--font-serif)',
                    lineHeight: 1
                  }}>
                    ॐ
                  </div>

                  {/* Top Row: Sacred Emblem & Badge */}
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px'
                    }}>
                      {/* Handcrafted Sacred Vedic Emblem */}
                      <div style={{
                        filter: 'drop-shadow(0 2px 6px rgba(212, 175, 55, 0.4))',
                        transition: 'transform 0.3s ease'
                      }} className="hawan-emblem-wrap">
                        <SacredHawanEmblem type={item.id} />
                      </div>

                      {/* Gold Ribbon Capsule Badge */}
                      <div style={{
                        background: 'linear-gradient(135deg, #730014, #4a0309)',
                        color: '#ffd700',
                        border: '1px solid #ffd700',
                        borderRadius: '20px',
                        padding: '4px 12px',
                        fontSize: '0.76rem',
                        fontWeight: '800',
                        letterSpacing: '0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: '0 2px 8px rgba(115, 0, 20, 0.25)'
                      }}>
                        <span style={{ fontSize: '0.7rem' }}>✦</span>
                        <span>{displayBadge}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 style={{
                      fontSize: '1.22rem',
                      fontWeight: '800',
                      color: '#730014',
                      fontFamily: lang === 'hi' ? 'var(--font-serif)' : 'var(--font-sans)',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}>
                      {displayTitle}
                    </h4>

                    {/* Focus / Divine Remedy Description */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '7px',
                      marginBottom: '18px'
                    }}>
                      <span style={{ color: '#d4af37', fontSize: '0.9rem', lineHeight: 1.4 }}>✦</span>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#4a3832',
                        lineHeight: 1.5,
                        fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
                      }}>
                        {displayFocus}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons with Divine Styling */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    paddingTop: '14px',
                    borderTop: '1px dashed #e5d1b3'
                  }}>
                    {/* Primary Booking Button */}
                    <button
                      onClick={() => onOpenBooking(displayTitle)}
                      style={{
                        background: 'linear-gradient(135deg, #730014 0%, #54000e 100%)',
                        color: '#ffffff',
                        border: '1px solid #ffd700',
                        borderRadius: '25px',
                        padding: '8px 14px',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        flex: 1.2,
                        justifyContent: 'center',
                        boxShadow: '0 3px 10px rgba(115, 0, 20, 0.2)',
                        transition: 'all 0.2s ease'
                      }}
                      className="spiritual-btn-book"
                    >
                      <Calendar size={14} color="#ffd700" />
                      <span>{lang === 'hi' ? 'संकल्प बुक करें' : 'Book Puja'}</span>
                    </button>

                    {/* WhatsApp Ask Button */}
                    <a
                      href={getWhatsAppLink(
                        lang === 'hi'
                          ? `प्रणाम पंडित जी, मुझे ${item.titleHi} (${item.focusHi}) के बारे में जानना है।`
                          : `Pranam Pandit Ji, I would like consultation regarding ${item.titleEn}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'linear-gradient(135deg, #25d366 0%, #1da851 100%)',
                        color: '#ffffff',
                        borderRadius: '25px',
                        padding: '8px 14px',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none',
                        boxShadow: '0 3px 10px rgba(37, 211, 102, 0.2)',
                        transition: 'all 0.2s ease'
                      }}
                      className="spiritual-btn-wa"
                    >
                      <MessageCircle size={14} />
                      <span>{lang === 'hi' ? 'पूछें' : 'Ask'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .service-detail-card {
            grid-template-columns: 1fr !important;
          }
        }
        .spiritual-hawan-card:hover {
          transform: translateY(-4px);
          border-color: #ffd700 !important;
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.25), 0 4px 12px rgba(115, 0, 20, 0.08) !important;
        }
        .spiritual-hawan-card:hover .hawan-emblem-wrap {
          transform: scale(1.08);
        }
        .spiritual-btn-book:hover {
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(115, 0, 20, 0.4) !important;
        }
        .spiritual-btn-wa:hover {
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4) !important;
        }
      `}</style>
    </div>
  );
}
