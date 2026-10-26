import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, MapPin, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';
import { translations } from '../data/translations';

export default function BookingModal({ isOpen, onClose, initialPuja = '', lang = 'hi' }) {
  const t = translations[lang]?.bookingModal || translations.hi.bookingModal;
  const isHi = lang === 'hi';

  const defaultPuja = initialPuja || (isHi ? 'मंगल दोष पूजा (मंगल भात पूजन)' : 'Mangal Dosh Bhat Puja (Mangalnath, Ujjain)');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    puja_name: defaultPuja,
    gotra: '',
    preferred_date: '',
    city: '',
    special_request: ''
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialPuja) {
      setFormData((prev) => ({ ...prev, puja_name: initialPuja }));
    }
  }, [initialPuja]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg(t.errorRequired);
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const formattedDate = formData.preferred_date || (isHi ? 'शीघ्र अति शीघ्र' : 'Earliest auspicious date');
    const gotra = formData.gotra ? formData.gotra : (isHi ? 'सामान्य / ज्ञात नहीं' : 'Not known / General');
    const city = formData.city ? formData.city : (isHi ? 'उज्जैन धाम' : 'Ujjain Pilgrimage');
    const request = formData.special_request
      ? `\n- ${isHi ? 'विशेष प्रार्थना / समस्या' : 'Special Note / Question'}: ${formData.special_request}`
      : '';

    const text = isHi
      ? `जय श्री महाकाल!\nप्रणाम पंडित जी, मैंने mangalbhatujjain.com पर पूजा बुक की है:\n\n- यजमान का नाम: ${formData.name}\n- मोबाइल नंबर: ${formData.phone}\n- पूजा का नाम: ${formData.puja_name}\n- इच्छित दिनांक: ${formattedDate}\n- गोत्र: ${gotra}\n- स्थान/शहर: ${city}${request}\n\nकृपया पूजा का शुभ मुहूर्त एवं संपूर्ण वैदिक विधि-विधान की जानकारी प्रदान करें।`
      : `Namaste Pandit Ji!\nI would like to book a Vedic Puja via mangalbhatujjain.com:\n\n- Devotee Name: ${formData.name}\n- Contact Number: ${formData.phone}\n- Puja / Ritual: ${formData.puja_name}\n- Preferred Date: ${formattedDate}\n- Gotra: ${gotra}\n- City / Country: ${city}${request}\n\nKindly provide the auspicious Muhurat and complete Vedic ceremony details.`;

    const waUrl = getWhatsAppLink(text);
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    const bookingId = Math.floor(1000 + Math.random() * 9000);
    setSuccessData({
      booking_id: bookingId,
      message: t.successMsg,
      whatsapp_url: waUrl
    });
    setLoading(false);
  };

  const pujaOptions = isHi
    ? [
        { val: "मंगल दोष पूजा (मंगल भात पूजन)", label: "1. मंगल दोष पूजा (मंगल भात पूजन - उज्जैन)" },
        { val: "काल सर्प दोष पूजा", label: "2. काल सर्प दोष पूजा (त्रिपिंडी व नाग पूजा)" },
        { val: "महामृत्युंजय अनुष्ठान", label: "3. महामृत्युंजय अनुष्ठान (सवा लाख जप व हवन)" },
        { val: "रुद्र अभिषेक", label: "4. रुद्र अभिषेक (महाकाल दुग्धाभिषेक)" },
        { val: "कुण्डली विश्लेषण", label: "5. कुण्डली विश्लेषण (7 स्तंभ संपूर्ण समाधान)" },
        { val: "मां बगलामुखी हवन", label: "मां बगलामुखी हवन (शत्रु विजय व तंत्र रक्षा)" },
        { val: "नवग्रह शांति पूजा", label: "नवग्रह शांति पूजा" },
        { val: "गृह प्रवेश व वास्तु शांति", label: "गृह प्रवेश व वास्तु शांति पूजा" },
        { val: "अर्क विवाह / कुंभ विवाह", label: "अर्क विवाह / कुंभ विवाह" },
        { val: "व्यापार वृद्धि व लक्ष्मी अनुष्ठान", label: "व्यापार वृद्धि व लक्ष्मी अनुष्ठान" },
        { val: "अन्य वैदिक अनुष्ठान", label: "अन्य वैदिक अनुष्ठान" }
      ]
    : [
        { val: "Mangal Dosh Bhat Puja", label: "1. Mangal Dosh Bhat Puja (Mangalnath, Ujjain)" },
        { val: "Kaal Sarp Dosh Nivaran Puja", label: "2. Kaal Sarp Dosh Nivaran Puja" },
        { val: "Maha Mrityunjaya Anushthan", label: "3. Maha Mrityunjaya Anushthan (1.25 Lakh Chants)" },
        { val: "Maha Rudrabhishek", label: "4. Maha Rudrabhishek (Lord Mahakal)" },
        { val: "Kundali & Birth Chart Analysis", label: "5. Kundali & Birth Chart Analysis" },
        { val: "Maa Baglamukhi Hawan", label: "Maa Baglamukhi Hawan (Protection & Victory)" },
        { val: "Navagraha Shanti Puja", label: "Navagraha Shanti Puja" },
        { val: "Griha Pravesh & Vastu Shanti", label: "Griha Pravesh & Vastu Shanti" },
        { val: "Ark Vivah / Kumbh Vivah", label: "Ark Vivah / Kumbh Vivah" },
        { val: "Business Growth & Lakshmi Hawan", label: "Business Growth & Lakshmi Hawan" },
        { val: "Other Vedic Puja & Rituals", label: "Other Vedic Pujas & Rituals" }
      ];

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
            <span>{isHi ? 'पवित्र उज्जैन तीर्थ संकल्प' : 'Sanctified Ujjain Pilgrimage Sankalp'}</span>
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
            {isHi ? `${PANDIT_INFO.nameHi} द्वारा शास्त्रोक्त संकल्प` : `Consecrated by ${PANDIT_INFO.name} (Ujjain)`}
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
                <strong>{isHi ? 'बुकिंग संदर्भ आईडी:' : 'Booking Ref ID:'}</strong> #{successData.booking_id}
                <div style={{ fontSize: '0.82rem', color: '#66534d', marginTop: '4px' }}>
                  {isHi ? 'पूजा:' : 'Puja:'} {formData.puja_name}
                </div>
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
                  <span>{t.waDirectBtn}</span>
                </a>
                <button
                  onClick={onClose}
                  className="btn-gold"
                  style={{ padding: '12px 20px', fontSize: '0.96rem' }}
                >
                  {t.closeBtn}
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
                  {t.pujaLabel}
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
                  {pujaOptions.map((opt, idx) => (
                    <option key={idx} value={opt.val}>
                      {opt.label}
                    </option>
                  ))}
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

              {/* Gotra & Preferred Date */}
              <div className="booking-form-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '14px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    {t.gotraLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.gotraPlaceholder}
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
                    {t.dateLabel}
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
                    {t.cityLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.cityPlaceholder}
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
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
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
                  {t.requestLabel}
                </label>
                <textarea
                  rows={2}
                  placeholder={t.requestPlaceholder}
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
                  {t.closeBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
