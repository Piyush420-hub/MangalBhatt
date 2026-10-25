import React, { useState } from 'react';
import { FileText, Compass, Star, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/pujaData';
import { API_BASE } from '../utils/api';

export default function JyotishPage({ onOpenKundaliModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    tob: '',
    pob: '',
    focus_areas: ['धन (Wealth)', 'करियर (Career)'],
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const pillars = [
    { icon: '💰', title: 'धन एवं आर्थिक समृद्धि', desc: 'धन आगमन, रुका हुआ पैसा, शेयर बाजार, कर्ज से मुक्ति के सरल ज्योतिषीय उपाय।' },
    { icon: '❤️', title: 'प्रेम एवं संबंध', desc: 'प्रेम संबंधों में आ रही गलतफहमियां, ब्रेकअप निवारण, प्रेम विवाह में परिवार की सहमति।' },
    { icon: '📈', title: 'व्यवसाय एवं व्यापार वृद्धि', desc: 'नया व्यापार शुरू करने का शुभ समय, पार्टनरशिप अनुकूलता, व्यापार सुरक्षा कवच।' },
    { icon: '🏥', title: 'स्वास्थ्य एवं आरोग्य', desc: 'दीर्घकालिक बीमारियों से सुरक्षा, मारक ग्रह शांति, मानसिक तनाव व अवसाद निवारण।' },
    { icon: '👨‍👩‍👧‍👦', title: 'परिवार एवं संतान सुख', desc: 'संतान प्राप्ति में बाधा निवारण, संतान गोपाल मंत्र, गृह क्लेश व पारिवारिक शांति।' },
    { icon: '💼', title: 'करियर एवं नौकरी', desc: 'सरकारी नौकरी के योग, पदोन्नति, कार्यक्षेत्र में षड्यंत्रों से बचाव, विदेश यात्रा योग।' },
    { icon: '💍', title: 'विवाह एवं दांपत्य सुख', desc: 'मांगलिक दोष, नाड़ी दोष, गुण मिलान, विवाह में आ रहे अनावश्यक विलंब का समाधान।' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const dobStr = formData.dob ? `\n- जन्म दिनांक: ${formData.dob}` : '';
    const tobStr = formData.tob ? `\n- जन्म समय: ${formData.tob}` : '';
    const pobStr = formData.pob ? `\n- जन्म स्थान: ${formData.pob}` : '';
    const notesStr = formData.notes ? `\n- मुख्य समस्या / प्रश्न: ${formData.notes}` : '';

    const text = `जय श्री महाकाल!\nप्रणाम पंडित जी, मुझे अपनी जन्मपत्रिका का विश्लेषण करवाना है:\n\n- जातक का नाम: ${formData.name}\n- मोबाइल: ${formData.phone}${dobStr}${tobStr}${pobStr}${notesStr}\n\nकृपया पत्रिका अध्ययन कर मार्गदर्शन प्रदान करें।`;

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
            || वैदिक पराशर फलित ज्योतिष ||
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            सटीक जन्म कुण्डली विश्लेषण
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: 'var(--font-devanagari)'
          }}>
            ग्रह-नक्षत्रों, महादशा, गोचर एवं वर्ग कुंडलियों के सूक्ष्म अध्ययन द्वारा जीवन की समस्त समस्याओं का प्रामाणिक समाधान
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
            जीवन के 7 प्रमुख क्षेत्रों में दिव्य मार्गदर्शन
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
                className="pillar-card"
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '10px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', color: '#730014', fontWeight: '700', marginBottom: '6px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#55423c', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
                <div style={{ marginTop: '12px', color: '#b8860b', fontSize: '0.8rem', fontWeight: '700' }}>
                  परामर्श लें →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kundali Consultation Form Card */}
        <div style={{
          background: '#ffffff',
          border: '2px solid #d4af37',
          borderRadius: '16px',
          padding: '35px',
          boxShadow: '0 10px 30px rgba(115,0,20,0.08)',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#730014', fontFamily: 'var(--font-serif)', fontWeight: '800' }}>
              अपनी जन्मपत्रिका का विश्लेषण करवाएं
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#6e564f', marginTop: '4px' }}>
              नीचे अपना जन्म विवरण भरें, पंडित जी सूक्ष्म अध्ययन कर आपको व्यक्तिगत समय प्रदान करेंगे।
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ color: '#25d366', marginBottom: '12px' }}>
                <CheckCircle2 size={48} style={{ margin: '0 auto' }} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: '#730014', marginBottom: '8px' }}>
                धन्यवाद! आपका जन्म विवरण दर्ज हो गया है।
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#473630', marginBottom: '20px' }}>
                पंडित जी शीघ्र ही आपकी पत्रिका का विश्लेषण कर संपर्क करेंगे।
              </p>
              <a
                href={getWhatsAppLink(`प्रणाम पंडित जी, मैंने कुण्डली परामर्श हेतु वेबसाइट पर विवरण दर्ज किया है। नाम: ${formData.name}`)}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                style={{ padding: '12px 24px' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp पर तुरंत बात करें</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="jyotish-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    जातक का नाम *
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
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    मोबाइल / WhatsApp नंबर *
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

              <div className="jyotish-form-row jyotish-birth-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    जन्म तिथि
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    style={{ width: '100%', padding: '9px 10px', borderRadius: '8px', border: '1px solid #ebd9bc', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    जन्म समय
                  </label>
                  <input
                    type="time"
                    value={formData.tob}
                    onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                    style={{ width: '100%', padding: '9px 10px', borderRadius: '8px', border: '1px solid #ebd9bc', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                    जन्म स्थान (शहर/राज्य)
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. उज्जैन, म.प्र."
                    value={formData.pob}
                    onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                    style={{ width: '100%', padding: '9px 10px', borderRadius: '8px', border: '1px solid #ebd9bc', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#473630', marginBottom: '6px' }}>
                  आपकी मुख्य समस्या या जिज्ञासा
                </label>
                <textarea
                  rows={3}
                  placeholder="उदा. पिछले 2 वर्षों से नौकरी में तनाव है, क्या कोई परिवर्तन के योग हैं? या विवाह कब तक संपन्न होगा?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ebd9bc', outline: 'none' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: '1rem' }}
              >
                <MessageCircle size={18} />
                <span>{loading ? 'WhatsApp खुल रहा है...' : 'WhatsApp पर कुण्डली विश्लेषण भेजें'}</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .pillar-card:hover {
          transform: translateY(-4px);
          border-color: #d4af37 !important;
          box-shadow: 0 8px 20px rgba(115,0,20,0.1) !important;
        }
      `}</style>
    </div>
  );
}
