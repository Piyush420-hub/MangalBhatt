import React, { useState, useEffect } from 'react';
import { X, FileText, Check, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink, PANDIT_INFO } from '../data/pujaData';
import { translations } from '../data/translations';

export default function KundaliModal({ isOpen, onClose, initialAspect = '', lang = 'hi' }) {
  const t = translations[lang]?.kundaliModal || translations.hi.kundaliModal;
  const isHi = lang === 'hi';

  const aspectsList = [
    { id: 'dhan', icon: '💰', titleHi: 'धन (Wealth)', titleEn: 'Wealth & Prosperity', descHi: 'आर्थिक स्थिरता व ऋण मुक्ति', descEn: 'Financial stability & debt relief' },
    { id: 'prem', icon: '❤️', titleHi: 'प्रेम (Love)', titleEn: 'Love & Harmony', descHi: 'प्रेम संबंध व अनुकूलता', descEn: 'Relationships & compatibility' },
    { id: 'vyavsay', icon: '📈', titleHi: 'व्यवसाय (Business)', titleEn: 'Business & Trade', descHi: 'व्यापार वृद्धि व लाभ', descEn: 'Commercial growth & profits' },
    { id: 'swasthya', icon: '🏥', titleHi: 'स्वास्थ्य (Health)', titleEn: 'Health & Wellness', descHi: 'रोग शांति व दीर्घायु', descEn: 'Vitality & disease recovery' },
    { id: 'parivar', icon: '👨‍👩‍👧‍👦', titleHi: 'परिवार (Family)', titleEn: 'Family & Progeny', descHi: 'पारिवारिक सौहार्द्र व संतान', descEn: 'Domestic peace & children' },
    { id: 'career', icon: '💼', titleHi: 'करियर (Career)', titleEn: 'Career & Employment', descHi: 'नौकरी व प्रमोशन योग', descEn: 'Job security & promotions' },
    { id: 'vivah', icon: '💍', titleHi: 'विवाह (Marriage)', titleEn: 'Marriage & Matchmaking', descHi: 'मांगलिक विचार व गुण मिलान', descEn: 'Auspicious timing & matching' }
  ];

  const defaultAspects = initialAspect
    ? [initialAspect]
    : [isHi ? 'धन (Wealth)' : 'Wealth & Prosperity', isHi ? 'विवाह (Marriage)' : 'Marriage & Matchmaking'];

  const [selectedAspects, setSelectedAspects] = useState(defaultAspects);

  useEffect(() => {
    if (initialAspect) {
      setSelectedAspects([initialAspect]);
    }
  }, [initialAspect]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    tob: '',
    pob: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const toggleAspect = (title) => {
    if (selectedAspects.includes(title)) {
      setSelectedAspects(selectedAspects.filter((a) => a !== title));
    } else {
      setSelectedAspects([...selectedAspects, title]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg(t.errorRequired);
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const aspectsStr = selectedAspects.length > 0 ? selectedAspects.join(', ') : (isHi ? 'समस्त जीवन पक्ष' : 'General Life Consultation');
    const notesStr = formData.notes ? `\n- ${isHi ? 'मुख्य समस्या / प्रश्न' : 'Key Questions'}: ${formData.notes}` : '';

    const text = isHi
      ? `जय श्री महाकाल!\nप्रणाम पंडित जी, मुझे अपनी जन्म पत्रिका का विश्लेषण करवाना है:\n\n- जातक का नाम: ${formData.name}\n- मोबाइल नंबर: ${formData.phone}\n- जन्म तिथि: ${formData.dob || 'ज्ञात नहीं'}\n- जन्म समय: ${formData.tob || 'ज्ञात नहीं'}\n- जन्म स्थान: ${formData.pob || 'ज्ञात नहीं'}\n- चयनित मुख्य विषय: ${aspectsStr}${notesStr}\n\nकृपया पत्रिका अध्ययन कर मार्गदर्शन प्रदान करें।`
      : `Namaste Pandit Ji!\nI would like to consult with you for Birth Chart (Kundali) Analysis via mangalbhatujjain.com:\n\n- Name: ${formData.name}\n- Mobile / WhatsApp: ${formData.phone}\n- Date of Birth: ${formData.dob || 'Not known'}\n- Time of Birth: ${formData.tob || 'Not known'}\n- Place of Birth: ${formData.pob || 'Not known'}\n- Focus Areas: ${aspectsStr}${notesStr}\n\nKindly examine my horoscope and provide guidance and Vedic remedies.`;

    const waUrl = getWhatsAppLink(text);
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    const inqId = Math.floor(2000 + Math.random() * 8000);
    setSuccessData({
      inquiry_id: inqId,
      message: t.successMsg,
      whatsapp_url: waUrl
    });
    setLoading(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content kundali-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #3d0207, #730014)',
          color: '#ffffff',
          padding: '20px 24px',
          borderBottom: '2px solid #ffd700',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '16px',
              top: '16px',
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div style={{
            fontSize: '0.82rem',
            color: '#ffd700',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={14} />
            <span>{isHi ? 'वैदिक पराशर ज्योतिष परामर्श' : 'Authentic Vedic Parashar Astrology'}</span>
          </div>

          <h3 style={{
            fontSize: '1.45rem',
            fontWeight: '800',
            fontFamily: isHi ? 'var(--font-serif)' : 'var(--font-sans)',
            color: '#fff0c7',
            marginTop: '4px'
          }}>
            {t.title}
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#f3e4d0', marginTop: '2px' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {successData ? (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#e8fdec',
                border: '2px solid #25d366',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#25d366',
                marginBottom: '16px'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h4 style={{
                fontSize: '1.35rem',
                color: '#730014',
                fontFamily: isHi ? 'var(--font-serif)' : 'var(--font-sans)',
                marginBottom: '8px'
              }}>
                {t.successTitle}
              </h4>

              <div style={{
                background: '#faf4ea',
                border: '1px dashed #d4af37',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '16px',
                fontSize: '0.92rem'
              }}>
                <strong>{isHi ? 'परामर्श संदर्भ आईडी:' : 'Consultation Ref ID:'}</strong> #{successData.inquiry_id}
              </div>

              <p style={{
                fontSize: '0.9rem',
                color: '#473630',
                marginBottom: '22px',
                fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
              }}>
                {successData.message}
              </p>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={successData.whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '12px 24px', fontSize: '0.96rem' }}
                >
                  <MessageCircle size={18} />
                  <span>{isHi ? 'WhatsApp सीधे खोलें' : 'Open WhatsApp Directly'}</span>
                </a>
                <button
                  onClick={onClose}
                  className="btn-gold"
                  style={{ padding: '12px 20px', fontSize: '0.96rem' }}
                >
                  {isHi ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMsg && (
                <div style={{
                  background: '#ffe8e8',
                  color: '#a00',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  marginBottom: '14px',
                  fontSize: '0.85rem'
                }}>
                  {errorMsg}
                </div>
              )}

              {/* 7 Aspects Multi-Selector */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '8px' }}>
                  {t.aspectsTitle}
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '8px'
                }}>
                  {aspectsList.map((asp) => {
                    const title = isHi ? asp.titleHi : asp.titleEn;
                    const desc = isHi ? asp.descHi : asp.descEn;
                    const isSelected = selectedAspects.includes(title);
                    return (
                      <div
                        key={asp.id}
                        onClick={() => toggleAspect(title)}
                        style={{
                          border: isSelected ? '2px solid #730014' : '1px solid #ebd9bc',
                          background: isSelected ? '#fff9ec' : '#ffffff',
                          borderRadius: '8px',
                          padding: '8px 10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span style={{ fontSize: '1.2rem' }}>{asp.icon}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '0.82rem', fontWeight: '700', color: isSelected ? '#730014' : '#332724' }}>
                            {title}
                          </div>
                          <div style={{ fontSize: '0.68rem', color: '#7a6660', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {desc}
                          </div>
                        </div>
                        {isSelected && <Check size={14} color="#730014" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="kundali-form-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '14px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Birth Details: Date, Time, Place */}
              <div className="kundali-birth-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '12px',
                marginBottom: '14px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    {t.dobLabel}
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 10px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    {t.tobLabel}
                  </label>
                  <input
                    type="time"
                    value={formData.tob}
                    onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 10px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    {t.pobLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.pobPlaceholder}
                    value={formData.pob}
                    onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 10px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Notes / Questions */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                  {t.notesLabel}
                </label>
                <textarea
                  rows={2}
                  placeholder={t.notesPlaceholder}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #ebd9bc',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Buttons */}
              <div className="kundali-form-actions" style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-whatsapp"
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    padding: '12px',
                    fontSize: '1rem',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  <MessageCircle size={18} />
                  <span>{loading ? t.submitting : t.submitBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    background: '#f4ede1',
                    color: '#55423c',
                    padding: '12px 18px',
                    borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {isHi ? 'रद्द करें' : 'Cancel'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
