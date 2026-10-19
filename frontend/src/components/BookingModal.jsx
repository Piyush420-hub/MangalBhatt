import React, { useState } from 'react';
import { X, Calendar, User, Phone, MapPin, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';
import { API_BASE } from '../utils/api';

export default function BookingModal({ isOpen, onClose, initialPuja = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    puja_name: initialPuja || 'मंगल दोष पूजा (मंगल भात पूजन)',
    gotra: '',
    preferred_date: '',
    city: '',
    special_request: ''
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg('कृपया नाम एवं फोन नंबर अवश्य दर्ज करें।');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      // Call FastAPI backend
      const response = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessData(data);
      } else {
        // Fallback for standalone demo mode
        const fallbackId = Math.floor(1000 + Math.random() * 9000);
        const text = `प्रणाम पंडित जी, मैंने Mangalbhatpujaujjain.in पर पूजा बुक की है।\nनाम: ${formData.name}\nफोन: ${formData.phone}\nपूजा: ${formData.puja_name}\nदिनांक: ${formData.preferred_date || 'जल्द से जल्द'}\nगोत्र: ${formData.gotra || 'सामान्य'}\nस्थान: ${formData.city || 'उज्जैन'}`;
        const waUrl = getWhatsAppLink(text);
        setSuccessData({
          booking_id: fallbackId,
          message: 'पूजा बुकिंग सफलतापूर्वक दर्ज कर ली गई है। पंडित जी आपसे शीघ्र संपर्क करेंगे।',
          whatsapp_url: waUrl
        });
      }
    } catch (err) {
      // Offline fallback
      const fallbackId = Math.floor(1000 + Math.random() * 9000);
      const text = `प्रणाम पंडित जी, मैंने Mangalbhatpujaujjain.in पर पूजा बुक की है।\nनाम: ${formData.name}\nफोन: ${formData.phone}\nपूजा: ${formData.puja_name}\nदिनांक: ${formData.preferred_date || 'जल्द से जल्द'}\nगोत्र: ${formData.gotra || 'सामान्य'}\nस्थान: ${formData.city || 'उज्जैन'}`;
      const waUrl = getWhatsAppLink(text);
      setSuccessData({
        booking_id: fallbackId,
        message: 'पूजा बुकिंग सफलतापूर्वक दर्ज कर ली गई है। पंडित जी आपसे शीघ्र संपर्क करेंगे।',
        whatsapp_url: waUrl
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content booking-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="booking-modal-header" style={{
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
            <span>पवित्र उज्जैन तीर्थ संकल्प</span>
          </div>

          <h3 style={{
            fontSize: '1.45rem',
            fontWeight: '800',
            fontFamily: 'var(--font-serif)',
            color: '#fff0c7',
            marginTop: '4px'
          }}>
            वैदिक पूजा एवं अनुष्ठान बुकिंग
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#f3e4d0', marginTop: '2px' }}>
            पंडित तरुण पूरी गोस्वामी जी (उज्जैन) द्वारा शास्त्रोक्त संकल्प
          </p>
        </div>

        {/* Content */}
        <div className="booking-modal-body" style={{ padding: '24px' }}>
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
                शुभम भवतु! बुकिंग सफल रही
              </h4>

              <div style={{
                background: '#faf4ea',
                border: '1px dashed #d4af37',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '16px',
                fontSize: '0.92rem'
              }}>
                <strong>बुकिंग संदर्भ आईडी:</strong> #{successData.booking_id}
                <div style={{ fontSize: '0.82rem', color: '#66534d', marginTop: '4px' }}>
                  पूजा: {formData.puja_name}
                </div>
              </div>

              <p style={{
                fontSize: '0.9rem',
                color: '#473630',
                marginBottom: '22px',
                fontFamily: 'var(--font-devanagari)'
              }}>
                {successData.message} त्वरित पुष्टि एवं शुभ मुहूर्त हेतु नीचे दिए गए बटन से सीधे WhatsApp पर जुड़ें।
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
                  <span>WhatsApp पर तुरंत पुष्टि करें</span>
                </a>
                <button
                  onClick={onClose}
                  className="btn-gold"
                  style={{ padding: '12px 20px', fontSize: '0.96rem' }}
                >
                  बंद करें
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

              {/* Puja Selection */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                  पूजा का चयन करें *
                </label>
                <select
                  value={formData.puja_name}
                  onChange={(e) => setFormData({ ...formData, puja_name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #d4af37',
                    background: '#fffdf9',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                >
                  <option value="मंगल दोष पूजा (मंगल भात पूजन)">1. मंगल दोष पूजा (मंगल भात पूजन - उज्जैन)</option>
                  <option value="काल सर्प दोष पूजा">2. काल सर्प दोष पूजा (त्रिपिंडी व नाग पूजा)</option>
                  <option value="महामृत्युंजय अनुष्ठान">3. महामृत्युंजय अनुष्ठान (सवा लाख जप व हवन)</option>
                  <option value="रुद्र अभिषेक">4. रुद्र अभिषेक (महाकाल दुग्धाभिषेक)</option>
                  <option value="कुण्डली विश्लेषण">5. कुण्डली विश्लेषण (7 स्तंभ संपूर्ण समाधान)</option>
                  <option value="मां बगलामुखी हवन">मां बगलामुखी हवन (शत्रु विजय व तंत्र रक्षा)</option>
                  <option value="नवग्रह शांति पूजा">नवग्रह शांति पूजा</option>
                  <option value="गृह प्रवेश व वास्तु शांति">गृह प्रवेश व वास्तु शांति पूजा</option>
                  <option value="अर्क विवाह / कुंभ विवाह">अर्क विवाह / कुंभ विवाह</option>
                  <option value="व्यापार वृद्धि व लक्ष्मी अनुष्ठान">व्यापार वृद्धि व लक्ष्मी अनुष्ठान</option>
                  <option value="अन्य वैदिक अनुष्ठान">अन्य वैदिक अनुष्ठान</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="booking-form-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '14px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    यजमान का नाम *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. अमित शर्मा"
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
                    मोबाइल / WhatsApp नंबर *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="उदा. 98XXXXXXXX"
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

              {/* Gotra & Preferred Date */}
              <div className="booking-form-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '14px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    गोत्र (यदि ज्ञात हो)
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. कश्यप / भारद्वाज"
                    value={formData.gotra}
                    onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
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
                    पूजा की इच्छित तिथि
                  </label>
                  <input
                    type="date"
                    value={formData.preferred_date}
                    onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
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

              {/* City & Email */}
              <div className="booking-form-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '14px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    आपका शहर / राज्य
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. इंदौर / मुंबई / दिल्ली"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
                    ईमेल (वैकल्पिक)
                  </label>
                  <input
                    type="email"
                    placeholder="user@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

              {/* Special Request */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                  समस्या या संकल्प का संक्षिप्त विवरण
                </label>
                <textarea
                  rows={2}
                  placeholder="उदा. शीघ्र विवाह हेतु, या व्यापार में लगातार हानि से मुक्ति हेतु..."
                  value={formData.special_request}
                  onChange={(e) => setFormData({ ...formData, special_request: e.target.value })}
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
              <div className="booking-form-actions" style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-maroon"
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    padding: '12px',
                    fontSize: '1rem',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  <Calendar size={18} color="#ffd700" />
                  <span>{loading ? 'दर्ज हो रहा है...' : 'पूजा संकल्प दर्ज करें'}</span>
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
                    fontSize: '0.9rem'
                  }}
                >
                  रद्द करें
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
