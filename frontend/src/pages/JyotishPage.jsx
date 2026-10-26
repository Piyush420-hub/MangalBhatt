import React, { useState } from 'react';
import { FileText, Compass, Star, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/pujaData';

export default function JyotishPage({ lang = 'hi', onOpenKundaliModal }) {
  const isHi = lang === 'hi';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    tob: '',
    pob: '',
    focus_areas: isHi ? ['धन (Wealth)', 'करियर (Career)'] : ['Wealth', 'Career'],
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const pillars = isHi ? [
    { icon: '💰', title: 'धन एवं आर्थिक समृद्धि', desc: 'धन आगमन, रुका हुआ पैसा, शेयर बाजार, कर्ज से मुक्ति के सरल ज्योतिषीय उपाय।' },
    { icon: '❤️', title: 'प्रेम एवं संबंध', desc: 'प्रेम संबंधों में आ रही गलतफहमियां, ब्रेकअप निवारण, प्रेम विवाह में परिवार की सहमति।' },
    { icon: '📈', title: 'व्यवसाय एवं व्यापार वृद्धि', desc: 'नया व्यापार शुरू करने का शुभ समय, पार्टनरशिप अनुकूलता, व्यापार सुरक्षा कवच।' },
    { icon: '🏥', title: 'स्वास्थ्य एवं आरोग्य', desc: 'दीर्घकालिक बीमारियों से सुरक्षा, मारक ग्रह शांति, मानसिक तनाव व अवसाद निवारण।' },
    { icon: '👨‍👩‍👧‍👦', title: 'परिवार एवं संतान सुख', desc: 'संतान प्राप्ति में बाधा निवारण, संतान गोपाल मंत्र, गृह क्लेश व पारिवारिक शांति।' },
    { icon: '💼', title: 'करियर एवं नौकरी', desc: 'सरकारी नौकरी के योग, पदोन्नति, कार्यक्षेत्र में षड्यंत्रों से बचाव, विदेश यात्रा योग।' },
    { icon: '💍', title: 'विवाह एवं दांपत्य सुख', desc: 'मांगलिक दोष, नाड़ी दोष, गुण मिलान, विवाह में आ रहे अनावश्यक विलंब का समाधान।' }
  ] : [
    { icon: '💰', title: 'Wealth & Prosperity', desc: 'Financial flow, recovering stuck funds, stock investments, and debt liberation remedies.' },
    { icon: '❤️', title: 'Love & Relationships', desc: 'Resolving relationship misunderstandings, preventing heartbreak, family approval for marriage.' },
    { icon: '📈', title: 'Business & Trade Growth', desc: 'Auspicious times to launch ventures, partner compatibility, and enterprise protection shields.' },
    { icon: '🏥', title: 'Health & Vitality', desc: 'Shielding against chronic afflictions, Maraka planet pacification, and mental peace remedies.' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family & Progeny', desc: 'Remedies for delays in progeny, Santana Gopala chants, and peaceful domestic harmony.' },
    { icon: '💼', title: 'Career & Profession', desc: 'Government service prospects, promotions, protection against office malice, foreign travel.' },
    { icon: '💍', title: 'Marriage & Conjugal Bliss', desc: 'Manglik Dosha, Nadi Dosha, Guna Milan, and resolving persistent delays in matrimony.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let text = '';
    if (isHi) {
      const dobStr = formData.dob ? `\n- जन्म दिनांक: ${formData.dob}` : '';
      const tobStr = formData.tob ? `\n- जन्म समय: ${formData.tob}` : '';
      const pobStr = formData.pob ? `\n- जन्म स्थान: ${formData.pob}` : '';
      const notesStr = formData.notes ? `\n- मुख्य समस्या / प्रश्न: ${formData.notes}` : '';
      text = `जय श्री महाकाल!\nप्रणाम पंडित जी, मुझे अपनी जन्मपत्रिका का विश्लेषण करवाना है:\n\n- जातक का नाम: ${formData.name}\n- मोबाइल: ${formData.phone}${dobStr}${tobStr}${pobStr}${notesStr}\n\nकृपया पत्रिका अध्ययन कर मार्गदर्शन प्रदान करें।`;
    } else {
      const dobStr = formData.dob ? `\n- Date of Birth: ${formData.dob}` : '';
      const tobStr = formData.tob ? `\n- Time of Birth: ${formData.tob}` : '';
      const pobStr = formData.pob ? `\n- Place of Birth: ${formData.pob}` : '';
      const notesStr = formData.notes ? `\n- Core Concern / Question: ${formData.notes}` : '';
      text = `Jai Shree Mahakal!\nPranam Pandit Ji, I would like to request an authentic Vedic Kundali / Birth Chart analysis:\n\n- Devotee Name: ${formData.name}\n- Mobile: ${formData.phone}${dobStr}${tobStr}${pobStr}${notesStr}\n\nPlease analyze my chart and provide guidance.`;
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
            {isHi ? '|| वैदिक पराशर फलित ज्योतिष ||' : '|| Classical Parashara Vedic Astrology ||'}
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            {isHi ? 'सटीक जन्म कुण्डली विश्लेषण' : 'Authentic Janampatri & Kundali Analysis'}
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
          }}>
            {isHi
              ? 'ग्रह-नक्षत्रों, महादशा, गोचर एवं वर्ग कुंडलियों के सूक्ष्म अध्ययन द्वारा जीवन की समस्त समस्याओं का प्रामाणिक समाधान'
              : 'Deep examination of planetary positions, Dashas, transits, and divisional charts to provide clear directions and practical remedies'}
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">⭐</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 7 Pillars Showcase */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#730014', fontFamily: 'var(--font-serif)', marginBottom: '20px', textAlign: 'center' }}>
            {isHi ? 'जीवन के 7 प्रमुख क्षेत्रों में दिव्य मार्गदर्शन' : 'Divine Clarity Across 7 Core Life Dimensions'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {pillars.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onOpenKundaliModal(item.title)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #ebd9bc',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                className="jyotish-card"
              >
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', color: '#730014', fontWeight: '700', marginBottom: '6px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#55423c', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kundali Request Form */}
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
            {isHi ? 'ऑनलाइन पत्रिका विश्लेषण परामर्श' : 'Request Birth Chart Consultation'}
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#6e564f', textAlign: 'center', marginBottom: '24px' }}>
            {isHi
              ? 'अपना जन्म विवरण दर्ज करें, पंडित जी सीधे WhatsApp पर मार्गदर्शन प्रदान करेंगे।'
              : 'Enter your birth details; Pandit Ji will review your chart and respond directly via WhatsApp.'}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                {isHi ? 'जातक का पूरा नाम *' : 'Full Name *'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isHi ? 'उदा. राहुल शर्मा' : 'e.g. Rahul Sharma'}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                {isHi ? 'मोबाइल नंबर (WhatsApp) *' : 'Mobile / WhatsApp Number *'}
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                  {isHi ? 'जन्म दिनांक' : 'Date of Birth'}
                </label>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                  {isHi ? 'जन्म समय' : 'Time of Birth'}
                </label>
                <input
                  type="time"
                  value={formData.tob}
                  onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                {isHi ? 'जन्म स्थान (शहर, राज्य)' : 'Place of Birth (City, State)'}
              </label>
              <input
                type="text"
                value={formData.pob}
                onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                placeholder={isHi ? 'उदा. इंदौर, मध्य प्रदेश' : 'e.g. Indore, Madhya Pradesh'}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '4px' }}>
                {isHi ? 'मुख्य प्रश्न / समस्या' : 'Primary Concern / Question'}
              </label>
              <textarea
                rows="3"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={isHi ? 'विवाह में रुकावट, नौकरी में प्रमोशन, व्यापार हानि इत्यादि...' : 'Marital delays, job promotion, business growth, health concern...'}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #ebd9bc', fontSize: '0.92rem', resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="btn-whatsapp"
              style={{ justifyContent: 'center', padding: '13px', fontSize: '1rem', marginTop: '8px' }}
            >
              <MessageCircle size={18} />
              <span>{isHi ? 'व्हाट्सएप पर कुण्डली भेजें' : 'Send Kundali Details via WhatsApp'}</span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .jyotish-card:hover {
          transform: translateY(-4px);
          border-color: #ffd700 !important;
          box-shadow: 0 8px 20px rgba(115,0,20,0.1) !important;
        }
      `}</style>
    </div>
  );
}