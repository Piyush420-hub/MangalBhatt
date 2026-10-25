import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';

export default function ContactPage({ lang = 'hi' }) {
  const isHi = lang === 'hi';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let text = '';
    if (isHi) {
      const emailStr = formData.email ? `\n- ईमेल: ${formData.email}` : '';
      const subjectStr = formData.subject ? `\n- विषय: ${formData.subject}` : '';
      text = `जय श्री महाकाल!\nप्रणाम पंडित जी, मैंने ${PANDIT_INFO.websiteName} पर संदेश भेजा है:\n\n- नाम: ${formData.name}\n- मोबाइल: ${formData.phone}${emailStr}${subjectStr}\n- संदेश: ${formData.message}\n\nकृपया मार्गदर्शन प्रदान करें।`;
    } else {
      const emailStr = formData.email ? `\n- Email: ${formData.email}` : '';
      const subjectStr = formData.subject ? `\n- Subject: ${formData.subject}` : '';
      text = `Jai Shree Mahakal!\nPranam Pandit Ji, I sent an inquiry via ${PANDIT_INFO.websiteName}:\n\n- Name: ${formData.name}\n- Mobile: ${formData.phone}${emailStr}${subjectStr}\n- Message: ${formData.message}\n\nPlease advise on consultation and booking.`;
    }

    const waUrl = getWhatsAppLink(text);
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            {isHi ? '|| संपर्क एवं तीर्थ मार्गदर्शन ||' : '|| Pilgrimage & Holy Sanctuary Guidance ||'}
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            {isHi ? 'पंडित जी से संपर्क करें' : 'Contact Pandit Ji'}
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '650px',
            margin: '8px auto 0',
            fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
          }}>
            {isHi
              ? 'पूजा बुकिंग, शुभ मुहूर्त निर्धारण अथवा कुंडली परामर्श हेतु निसंकोच संपर्क करें।'
              : 'Reach out directly for ritual bookings, auspicious Muhurat timings, or personalized astrological guidance.'}
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">📍</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 4 Quick Contact Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {/* Card 1: Address */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #ebd9bc',
            borderRadius: '12px',
            padding: '24px 20px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#fcf6e8',
              border: '1px solid #d4af37',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ff7700',
              marginBottom: '12px'
            }}>
              <MapPin size={24} />
            </div>
            <h4 style={{ fontSize: '1.05rem', color: '#730014', fontWeight: '700', marginBottom: '4px' }}>
              {isHi ? 'हमारा स्थान' : 'Holy Sanctuary'}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#55423c' }}>
              {isHi ? PANDIT_INFO.locationHi : PANDIT_INFO.locationEn}
            </p>
          </div>

          {/* Card 2: Phone */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #ebd9bc',
            borderRadius: '12px',
            padding: '24px 20px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#fcf6e8',
              border: '1px solid #d4af37',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#730014',
              marginBottom: '12px'
            }}>
              <Phone size={24} />
            </div>
            <h4 style={{ fontSize: '1.05rem', color: '#730014', fontWeight: '700', marginBottom: '4px' }}>
              {isHi ? 'सीधा संपर्क (कॉल)' : 'Direct Phone'}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#55423c' }}>
              <a href={`tel:${PANDIT_INFO.phone}`} style={{ color: '#730014', fontWeight: '700' }}>
                {PANDIT_INFO.phone}
              </a>
            </p>
          </div>

          {/* Card 3: WhatsApp */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #ebd9bc',
            borderRadius: '12px',
            padding: '24px 20px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#e8f8ee',
              border: '1px solid #25d366',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#25d366',
              marginBottom: '12px'
            }}>
              <MessageCircle size={24} />
            </div>
            <h4 style={{ fontSize: '1.05rem', color: '#730014', fontWeight: '700', marginBottom: '4px' }}>
              WhatsApp 24x7
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#55423c' }}>
              <a
                href={getWhatsAppLink(
                  isHi
                    ? `प्रणाम पंडित जी, मुझे ${PANDIT_INFO.websiteName} से जानकारी चाहिए।`
                    : `Pranam Pandit Ji, I am inquiring via ${PANDIT_INFO.websiteName}.`
                )}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#25d366', fontWeight: '700' }}
              >
                +91 {PANDIT_INFO.phone}
              </a>
            </p>
          </div>

          {/* Card 4: Email */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #ebd9bc',
            borderRadius: '12px',
            padding: '24px 20px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#fcf6e8',
              border: '1px solid #d4af37',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#d4af37',
              marginBottom: '12px'
            }}>
              <Mail size={24} />
            </div>
            <h4 style={{ fontSize: '1.05rem', color: '#730014', fontWeight: '700', marginBottom: '4px' }}>
              {isHi ? 'ईमेल' : 'Email Address'}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#55423c' }}>
              <a href={`mailto:${PANDIT_INFO.email}`} style={{ color: '#730014' }}>
                {PANDIT_INFO.email}
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form Box */}
        <div style={{
          maxWidth: '650px',
          margin: '0 auto',
          background: '#ffffff',
          border: '2px solid #d4af37',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 8px 30px rgba(115,0,20,0.08)'
        }}>
          <h3 style={{
            fontSize: '1.4rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            marginBottom: '8px',
            textAlign: 'center'
          }}>
            {isHi ? 'संदेश अथवा पूजा परामर्श प्रपत्र' : 'Send Message or Inquire for Puja'}
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#6e564f', textAlign: 'center', marginBottom: '24px' }}>
            {isHi
              ? 'अपना विवरण नीचे भरें, हम यथाशीघ्र आपसे संपर्क करेंगे।'
              : 'Fill in your details below; we will connect with you promptly.'}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                {isHi ? 'आपका शुभ नाम *' : 'Your Name *'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isHi ? 'उदा. अमित कुमार' : 'e.g. Amit Kumar'}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                  {isHi ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={isHi ? 'उदा. 9876543210' : 'e.g. +91 9876543210'}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                  {isHi ? 'ईमेल (वैकल्पिक)' : 'Email (Optional)'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@email.com"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                {isHi ? 'विषय (किस पूजा या सेवा के लिए)' : 'Subject / Inquiring For'}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={isHi ? 'उदा. मंगल भात पूजा मुहूर्त' : 'e.g. Mangal Bhat Puja Muhurat'}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                {isHi ? 'आपका संदेश *' : 'Your Message *'}
              </label>
              <textarea
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={isHi ? 'कृपया अपना संदेश या प्रश्न यहाँ लिखें...' : 'Please write your question, preferred dates, or query here...'}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem', resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="btn-whatsapp"
              style={{ justifyContent: 'center', padding: '13px', fontSize: '1rem', marginTop: '8px' }}
            >
              <MessageCircle size={18} />
              <span>{isHi ? 'संदेश व्हाट्सएप पर भेजें' : 'Send Inquiry via WhatsApp'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}