import React from 'react';
import { Award, ShieldCheck, Flame, Users, MapPin, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Breadcrumb / Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            || महाकाल धाम उज्जैन ||
          </div>
          <h1 style={{
            fontSize: '2.6rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            {PANDIT_INFO.nameHi} जी का परिचय
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: 'var(--font-devanagari)'
          }}>
            15+ वर्षों से वैदिक कर्मकांड, मंगल भात पूजन, कालसर्प दोष निवारण एवं पराशर ज्योतिष के प्रतिष्ठित मर्मज्ञ
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🕉️</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* Bio Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '50px'
        }} className="about-page-grid">
          {/* Portrait Card */}
          <div style={{
            background: '#ffffff',
            border: '2px solid #d4af37',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 10px 30px rgba(115,0,20,0.1)'
          }}>
            <img
              src="/images/pandit_ji.png"
              alt={PANDIT_INFO.name}
              style={{
                width: '100%',
                borderRadius: '12px',
                marginBottom: '16px'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#730014', fontFamily: 'var(--font-serif)' }}>
                {PANDIT_INFO.nameHi}
              </h3>
              <div style={{ color: '#9e7d18', fontWeight: '600', fontSize: '0.9rem' }}>
                ज्योतिष एवं वास्तु विशेषज्ञ, उज्जैन (म.प्र.)
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '16px'
              }}>
                <a href={`tel:${PANDIT_INFO.phone}`} className="btn-maroon" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  <Phone size={14} />
                  <span>कॉल करें</span>
                </a>
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Biography Text */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #ebd9bc',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            <h3 style={{
              fontSize: '1.4rem',
              color: '#730014',
              fontFamily: 'var(--font-serif)',
              marginBottom: '14px',
              borderBottom: '2px solid #faf0dc',
              paddingBottom: '8px'
            }}>
              वैदिक परंपरा एवं साधना का संकल्प
            </h3>

            <p style={{ fontSize: '0.96rem', lineHeight: 1.8, color: '#3d2e29', marginBottom: '16px' }}>
              उज्जैन की अवंतिका नगरी, जिसे कालगणना का केंद्र और भगवान महाकालेश्वर की राजधानी कहा जाता है, में {PANDIT_INFO.nameHi} जी का जन्म एक प्रतिष्ठित वैदिक कर्मकांडी ब्राह्मण कुल में हुआ। बाल्यावस्था से ही वेद, उपनिषद, तंत्र शास्त्र एवं फलित ज्योतिष के अध्ययन में रुचि रही।
            </p>

            <p style={{ fontSize: '0.96rem', lineHeight: 1.8, color: '#3d2e29', marginBottom: '16px' }}>
              विगत 15 से अधिक वर्षों में पंडित जी ने देश-विदेश के 5000+ से अधिक भक्तों का मंगल भात पूजन, काल सर्प दोष निवारण, सवा लाख महामृत्युंजय अनुष्ठान एवं नवचंडी यज्ञ सफलता पूर्वक संपन्न कराया है। पंडित जी का दृढ़ विश्वास है कि वैदिक मंत्रों में समस्त मानवीय कष्टों को शांत करने की ईश्वरीय शक्ति विद्यमान है।
            </p>

            <h4 style={{ fontSize: '1.15rem', color: '#730014', marginTop: '22px', marginBottom: '12px' }}>
              पंडित जी की प्रमुख विशेषताएं:
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="#730014" />
                <span>100% प्रामाणिक वैदिक कर्मकांड</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="#730014" />
                <span>शास्त्रोक्त शुद्ध सामग्री का प्रयोग</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="#730014" />
                <span>व्यक्तिगत गोत्र संकल्प विधान</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="#730014" />
                <span>ऑनलाइन एवं ऑफलाइन दोनों सुविधाएं</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="#730014" />
                <span>उज्जैन के सिद्ध पीठों पर पूजा</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <CheckCircle size={18} color="#730014" />
                <span>गोपनीय एवं निष्पक्ष ज्योतिषीय सलाह</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '1rem' }}
            >
              पंडित जी से पूजा का समय व परामर्श तय करें
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
