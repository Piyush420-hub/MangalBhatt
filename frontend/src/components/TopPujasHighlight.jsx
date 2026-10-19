import React, { useState } from 'react';
import { 
  Calendar, MessageCircle, Check, ArrowRight, ShieldCheck, 
  Sparkles, Clock, Users, BookOpen 
} from 'lucide-react';
import { TOP_PUJAS, getWhatsAppLink } from '../data/pujaData';

export default function TopPujasHighlight({ onOpenBooking, onOpenKundaliModal }) {
  const [selectedPuja, setSelectedPuja] = useState(TOP_PUJAS[0].id);

  return (
    <section style={{
      padding: '55px 0',
      background: '#ffffff',
      borderBottom: '1px solid #e8dbb8'
    }}>
      <div className="container">
        {/* Section Heading */}
        <div className="sacred-heading">
          <div className="sacred-heading-title">
            <span className="om-symbol">ॐ</span>
            <span>उज्जैन की 5 मुख्य सिद्ध पूजाएं</span>
            <span className="om-symbol">ॐ</span>
          </div>
          <p className="sacred-heading-sub">
            महाकाल की पावन धरा पर 100% वैदिक विधि-विधान एवं संकल्प द्वारा कष्ट निवारण
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🔱</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 5 Top Pujas Navigation Tabs / Quick Selector */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '35px'
        }}>
          {TOP_PUJAS.map((puja) => {
            const isSelected = selectedPuja === puja.id;
            return (
              <button
                key={puja.id}
                onClick={() => setSelectedPuja(puja.id)}
                style={{
                  background: isSelected 
                    ? 'linear-gradient(135deg, #730014, #4a0309)' 
                    : '#faf5ea',
                  color: isSelected ? '#ffd700' : '#473630',
                  border: isSelected ? '1px solid #ffd700' : '1px solid #e2d2b5',
                  padding: '10px 18px',
                  borderRadius: '30px',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 4px 15px rgba(115,0,20,0.35)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <span style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: isSelected ? '#ffd700' : '#e0cfaf',
                  color: isSelected ? '#730014' : '#473630',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.82rem',
                  fontWeight: '800'
                }}>
                  {puja.number}
                </span>
                <span style={{ fontFamily: 'var(--font-devanagari)' }}>{puja.nameHi}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase of Selected Puja */}
        {TOP_PUJAS.map((puja) => {
          if (puja.id !== selectedPuja) return null;

          return (
            <div
              key={puja.id}
              style={{
                background: '#fffdfa',
                border: '2px solid #d4af37',
                borderRadius: '16px',
                boxShadow: '0 12px 35px rgba(115,0,20,0.08)',
                overflow: 'hidden'
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.15fr',
                gap: '0'
              }} className="top-puja-grid">

                {/* Left Side: Puja Image & Badges */}
                <div style={{
                  position: 'relative',
                  minHeight: '380px'
                }}>
                  <img
                    src={puja.image}
                    alt={puja.nameHi}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Overlay Badges */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(115, 0, 20, 0.92)',
                    color: '#ffd700',
                    border: '1px solid #ffd700',
                    borderRadius: '20px',
                    padding: '5px 14px',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {puja.highlightTag}
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(21, 9, 6, 0.9)',
                    color: '#ffffff',
                    border: '1px solid #d4af37',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    fontSize: '0.82rem',
                    fontWeight: '600'
                  }}>
                    📍 {puja.badge}
                  </div>
                </div>

                {/* Right Side: Sacred Details, Benefits & Actions */}
                <div style={{
                  padding: '30px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    {/* Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: '#d4af37',
                      fontWeight: '700',
                      fontSize: '0.86rem',
                      marginBottom: '6px'
                    }}>
                      <Sparkles size={16} />
                      <span>प्रामाणिक वैदिक संकल्प सेवा</span>
                    </div>

                    <h3 style={{
                      fontSize: '1.7rem',
                      fontWeight: '800',
                      color: '#730014',
                      fontFamily: 'var(--font-serif)',
                      marginBottom: '12px'
                    }}>
                      {puja.nameHi}
                    </h3>

                    <p style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      color: '#473630',
                      marginBottom: '18px',
                      fontFamily: 'var(--font-devanagari)'
                    }}>
                      {puja.fullDesc}
                    </p>

                    {/* Special 7 Aspects for Kundali */}
                    {puja.aspects && (
                      <div style={{ marginBottom: '22px' }}>
                        <div style={{
                          fontSize: '0.92rem',
                          fontWeight: '700',
                          color: '#730014',
                          marginBottom: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <span>7 प्रमुख स्तंभों का गहन विश्लेषण:</span>
                          <span style={{ fontSize: '0.8rem', color: '#886214' }}>(क्लिक करके परामर्श लें)</span>
                        </div>

                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                          gap: '8px'
                        }}>
                          {puja.aspects.map((asp) => (
                            <div
                              key={asp.id}
                              onClick={() => onOpenKundaliModal(asp.titleHi)}
                              style={{
                                background: '#fdf8ee',
                                border: '1px solid #e5d3b3',
                                borderRadius: '8px',
                                padding: '8px 10px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                              className="aspect-card"
                            >
                              <span style={{ fontSize: '1.2rem' }}>{asp.icon}</span>
                              <div>
                                <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#473630' }}>
                                  {asp.titleHi}
                                </div>
                                <div style={{ fontSize: '0.72rem', color: '#7a6660' }}>
                                  {asp.titleEn}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Benefits List */}
                    {puja.benefits && (
                      <div style={{ marginBottom: '24px' }}>
                        <div style={{
                          fontSize: '0.92rem',
                          fontWeight: '700',
                          color: '#730014',
                          marginBottom: '8px'
                        }}>
                          मुख्य लाभ एवं फलश्रुति:
                        </div>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                          gap: '8px'
                        }}>
                          {puja.benefits.map((benefit, idx) => (
                            <div key={idx} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontSize: '0.88rem',
                              color: '#3d2e29'
                            }}>
                              <div style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                background: '#730014',
                                color: '#ffd700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '2px'
                              }}>
                                <Check size={12} />
                              </div>
                              <span style={{ fontFamily: 'var(--font-devanagari)' }}>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Meta info pills (Duration & Samagri) */}
                    {puja.duration && (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '24px',
                        fontSize: '0.82rem',
                        color: '#6e564f',
                        background: '#faf3e6',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #ebd9bc'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Clock size={15} color="#730014" />
                          <span><strong>अवधि:</strong> {puja.duration}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Users size={15} color="#730014" />
                          <span><strong>आचार्य:</strong> {puja.panditCount}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid #ebd9bc'
                  }}>
                    <button
                      onClick={() => onOpenBooking(puja.nameHi)}
                      className="btn-maroon"
                      style={{ padding: '11px 22px' }}
                    >
                      <Calendar size={18} color="#ffd700" />
                      <span style={{ fontFamily: 'var(--font-devanagari)' }}>यह पूजा बुक करें</span>
                    </button>

                    <a
                      href={getWhatsAppLink(`प्रणाम पंडित जी, मुझे ${puja.nameHi} के मुहूर्त व दक्षिणा की जानकारी चाहिए।`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      style={{ padding: '11px 22px' }}
                    >
                      <MessageCircle size={18} />
                      <span style={{ fontFamily: 'var(--font-devanagari)' }}>WhatsApp पर पूछें</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .top-puja-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .aspect-card:hover {
          background: #730014 !important;
          border-color: #ffd700 !important;
          transform: translateY(-2px);
        }
        .aspect-card:hover div div:first-child {
          color: #ffd700 !important;
        }
        .aspect-card:hover div div:last-child {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
