import React, { useState } from 'react';
import { X, FileText, Check, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/pujaData';
import { API_BASE } from '../utils/api';

export default function KundaliModal({ isOpen, onClose, initialAspect = '' }) {
  const aspectsList = [
    { id: 'dhan', icon: '💰', titleHi: 'धन (Wealth)', desc: 'आर्थिक स्थिरता व ऋण मुक्ति' },
    { id: 'prem', icon: '❤️', titleHi: 'प्रेम (Love)', desc: 'प्रेम संबंध व अनुकूलता' },
    { id: 'vyavsay', icon: '📈', titleHi: 'व्यवसाय (Business)', desc: 'व्यापार वृद्धि व लाभ' },
    { id: 'swasthya', icon: '🏥', titleHi: 'स्वास्थ्य (Health)', desc: 'रोग शांति व दीर्घायु' },
    { id: 'parivar', icon: '👨‍👩‍👧‍👦', titleHi: 'परिवार (Family)', desc: 'पारिवारिक सौहार्द्र व संतान' },
    { id: 'career', icon: '💼', titleHi: 'करियर (Career)', desc: 'नौकरी व प्रमोशन योग' },
    { id: 'vivah', icon: '💍', titleHi: 'विवाह (Marriage)', desc: 'मांगलिक विचार व गुण मिलान' }
  ];

  const [selectedAspects, setSelectedAspects] = useState(
    initialAspect ? [initialAspect] : ['धन (Wealth)', 'विवाह (Marriage)']
  );

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
    setLoading(true);

    const aspectsStr = selectedAspects.length > 0 ? selectedAspects.join(', ') : 'समस्त जीवन पक्ष';
    const notesStr = formData.notes ? `\n- मुख्य समस्या / प्रश्न: ${formData.notes}` : '';

    const text = `जय श्री महाकाल!\nप्रणाम पंडित जी, मुझे अपनी जन्म पत्रिका का विश्लेषण करवाना है:\n\n- जातक का नाम: ${formData.name}\n- मोबाइल नंबर: ${formData.phone}\n- जन्म तिथि: ${formData.dob || 'ज्ञात नहीं'}\n- जन्म समय: ${formData.tob || 'ज्ञात नहीं'}\n- जन्म स्थान: ${formData.pob || 'ज्ञात नहीं'}\n- चयनित मुख्य विषय: ${aspectsStr}${notesStr}\n\nकृपया पत्रिका अध्ययन कर मार्गदर्शन प्रदान करें।`;

    const waUrl = getWhatsAppLink(text);

    // Direct redirect to WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    const inqId = Math.floor(2000 + Math.random() * 8000);
    setSuccessData({
      inquiry_id: inqId,
      message: 'कुण्डली परामर्श अनुरोध WhatsApp पर भेज दिया गया है।',
      whatsapp_url: waUrl
    });
    setLoading(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #730014, #4a0309)',
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
            <span>सटीक वैदिक पराशर ज्योतिष</span>
          </div>

          <h3 style={{
            fontSize: '1.45rem',
            fontWeight: '800',
            fontFamily: 'var(--font-serif)',
            color: '#fff0c7',
            marginTop: '4px'
          }}>
            जन्म कुण्डली संपूर्ण विश्लेषण
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#f3e4d0', marginTop: '2px' }}>
            {PANDIT_INFO.nameHi} (15+ वर्षों का ज्योतिष अनुभव)
          </p>
        </div>

        {/* Form Body */}
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
                fontFamily: 'var(--font-serif)',
                marginBottom: '8px'
              }}>
                कुण्डली परामर्श अनुरोध दर्ज हुआ!
              </h4>

              <div style={{
                background: '#faf4ea',
                border: '1px dashed #d4af37',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '16px',
                fontSize: '0.92rem'
              }}>
                <strong>अनुरोध आईडी:</strong> #{successData.inquiry_id}
                <div style={{ fontSize: '0.82rem', color: '#66534d', marginTop: '4px' }}>
                  चयनित विषय: {selectedAspects.join(', ')}
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#473630', marginBottom: '22px' }}>
                पंडित जी आपकी जन्म पत्रिका का गहराई से अध्ययन कर शीघ्र मार्गदर्शन देंगे। तुरंत बातचीत हेतु WhatsApp पर संदेश भेजें।
              </p>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <a
                  href={successData.whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '12px 24px' }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp पर तुरंत चर्चा करें</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Select 7 Pillars */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#473630', marginBottom: '8px' }}>
                  किन विषयों पर विशेष मार्गदर्शन चाहिए? (चयन करें)
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '8px'
                }}>
                  {aspectsList.map((asp) => {
                    const isSelected = selectedAspects.includes(asp.titleHi);
                    return (
                      <div
                        key={asp.id}
                        onClick={() => toggleAspect(asp.titleHi)}
                        style={{
                          background: isSelected ? '#730014' : '#fdf8ee',
                          color: isSelected ? '#ffffff' : '#3d2e29',
                          border: isSelected ? '1px solid #ffd700' : '1px solid #e5d3b3',
                          borderRadius: '8px',
                          padding: '8px 10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span style={{ fontSize: '1.2rem' }}>{asp.icon}</span>
                        <div style={{ fontSize: '0.82rem', fontWeight: '700', lineHeight: 1.2 }}>
                          {asp.titleHi}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="kundali-form-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                    जातक का नाम *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. राहुल शर्मा"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                    फोन नंबर *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="उदा. 98XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Birth Details: DOB, TOB, POB */}
              <div className="kundali-form-row kundali-birth-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '10px',
                marginBottom: '14px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                    जन्म तिथि
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 8px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                    जन्म समय
                  </label>
                  <input
                    type="time"
                    value={formData.tob}
                    onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 8px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                    जन्म स्थान
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. उज्जैन / इंदौर"
                    value={formData.pob}
                    onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 10px',
                      borderRadius: '8px',
                      border: '1px solid #ebd9bc',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                  कोई विशिष्ट प्रश्न या समस्या?
                </label>
                <textarea
                  rows={2}
                  placeholder="उदा. विवाह में देरी क्यों हो रही है? या व्यापार कब तक स्थिर होगा?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #ebd9bc',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-whatsapp"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '12px',
                  fontSize: '1rem',
                  opacity: loading ? 0.7 : 1
                }}
              >
                <MessageCircle size={18} />
                <span>{loading ? 'WhatsApp खुल रहा है...' : 'WhatsApp पर कुण्डली भेजें'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
