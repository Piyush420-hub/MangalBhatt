import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (e) {
      console.log('offline');
    }
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            || संपर्क एवं तीर्थ मार्गदर्शन ||
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            पंडित जी से संपर्क करें
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '650px',
            margin: '8px auto 0',
            fontFamily: 'var(--font-devanagari)'
          }}>
            पूजा बुकिंग, शुभ मुहूर्त निर्धारण अथवा कुंडली परामर्श हेतु निसंकोच संपर्क करें।
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
              हमारा स्थान
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#55423c' }}>
              उज्जैन, मध्य प्रदेश (महाकाल धाम)
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
              सीधा फोन कॉल
            </h4>
            <a href={`tel:${PANDIT_INFO.phone}`} style={{ fontSize: '1.05rem', color: '#730014', fontWeight: '800' }}>
              {PANDIT_INFO.phone}
            </a>
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
              background: '#e8fdec',
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
              WhatsApp बुकिंग
            </h4>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: '0.95rem', color: '#1eb956', fontWeight: '700' }}
            >
              24x7 सेवा उपलब्ध
            </a>
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
              color: '#9e7d18',
              marginBottom: '12px'
            }}>
              <Mail size={24} />
            </div>
            <h4 style={{ fontSize: '1.05rem', color: '#730014', fontWeight: '700', marginBottom: '4px' }}>
              ईमेल संपर्क
            </h4>
            <a href={`mailto:${PANDIT_INFO.email}`} style={{ fontSize: '0.84rem', color: '#55423c' }}>
              {PANDIT_INFO.email}
            </a>
          </div>
        </div>

        {/* Contact Form & Pilgrim Guide Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '30px'
        }} className="contact-bottom-grid">

          {/* Form */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #ebd9bc',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: '#730014', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>
              संदेश भेजें
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={44} color="#25d366" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '1.25rem', color: '#730014' }}>आपका संदेश प्राप्त हुआ!</h4>
                <p style={{ fontSize: '0.9rem', color: '#55423c', marginTop: '6px' }}>
                  पंडित जी शीघ्र ही आपसे संपर्क करेंगे।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', marginBottom: '4px' }}>
                      आपका नाम *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. राहुल शर्मा"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ebd9bc', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', marginBottom: '4px' }}>
                      फोन नंबर *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="उदा. 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ebd9bc', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', marginBottom: '4px' }}>
                    विषय / पूजा का नाम
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. मंगल भात पूजा की जानकारी"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ebd9bc', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: '700', marginBottom: '4px' }}>
                    संदेश / प्रश्न *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="कृपया अपने प्रश्न या समस्या का विवरण लिखें..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ebd9bc', outline: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-maroon"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  <Send size={16} color="#ffd700" />
                  <span>{loading ? 'भेजा जा रहा है...' : 'संदेश भेजें'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Pilgrim Travel Guide to Ujjain */}
          <div style={{
            background: 'linear-gradient(135deg, #fdfaf3, #f7efe1)',
            border: '1px solid #d4af37',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#730014', marginBottom: '12px' }}>
              <Navigation size={20} color="#ff7700" />
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: '700' }}>
                उज्जैन तीर्थ यात्री मार्गदर्शिका
              </h3>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#55423c', lineHeight: 1.6, marginBottom: '16px' }}>
              यदि आप अन्य शहर या राज्य से पूजा हेतु उज्जैन पधार रहे हैं, तो आपके ठहरने एवं मंदिर दर्शन की सुचारू व्यवस्था में पंडित जी का मार्गदर्शन उपलब्ध है।
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#3d2e29' }}>
              <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc' }}>
                <strong>🚆 निकटतम रेलवे स्टेशन:</strong> उज्जैन जंक्शन (UJN) - मात्र 2 से 3 किमी दूरी।
              </div>
              <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc' }}>
                <strong>✈️ निकटतम हवाई अड्डा:</strong> देवी अहिल्याबाई होल्कर एयरपोर्ट, इंदौर (IDR) - 55 किमी।
              </div>
              <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc' }}>
                <strong>🛕 मंगलनाथ मंदिर दूरी:</strong> रेलवे स्टेशन से लगभग 6 किमी (सुगम ऑटो व टैक्सी उपलब्ध)।
              </div>
              <div style={{ background: '#ffffff', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc' }}>
                <strong>🔱 महाकालेश्वर मंदिर:</strong> स्टेशन से 2 किमी की दूरी पर।
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .contact-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
