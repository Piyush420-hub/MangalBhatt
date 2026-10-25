import React from 'react';
import { Award, ShieldCheck, Flame, Users, MapPin, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { PANDIT_INFO, getWhatsAppLink } from '../data/pujaData';

export default function AboutPage({ lang = 'hi', onOpenBooking }) {
  const isHi = lang === 'hi';
  const panditDisplayName = isHi ? PANDIT_INFO.nameHi : PANDIT_INFO.name;
  const panditDisplayTitle = isHi ? PANDIT_INFO.titleHi : PANDIT_INFO.title;

  const features = isHi ? [
    '100% प्रामाणिक वैदिक कर्मकांड',
    'शास्त्रोक्त शुद्ध सामग्री का प्रयोग',
    'व्यक्तिगत गोत्र संकल्प विधान',
    'ऑनलाइन एवं ऑफलाइन दोनों सुविधाएं',
    'उज्जैन के सिद्ध पीठों पर पूजा',
    'गोपनीय एवं निष्पक्ष ज्योतिषीय सलाह'
  ] : [
    '100% Authentic Scriptural Vedic Rituals',
    'Pure, Consecrated Vedic Samagri',
    'Personalized Gotra Sankalp Vidhan',
    'Both In-Person & Live Online Ceremonies',
    'Consecration at Historic Holy Shrines of Ujjain',
    'Strictly Confidential & Honest Astrological Guidance'
  ];

  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Breadcrumb / Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            {isHi ? '|| महाकाल धाम उज्जैन ||' : '|| Sacred Mahakal Dham, Ujjain ||'}
          </div>
          <h1 style={{
            fontSize: '2.6rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            {isHi ? `${panditDisplayName} जी का परिचय` : `About ${panditDisplayName}`}
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
          }}>
            {isHi
              ? '15+ वर्षों से वैदिक कर्मकांड, मंगल भात पूजन, कालसर्प दोष निवारण एवं पराशर ज्योतिष के प्रतिष्ठित मर्मज्ञ'
              : 'Renowned authority in Vedic Rituals, Mangal Bhat Puja, Kaal Sarp Dosh Nivaran & Parashara Astrology with 15+ years of devoted service'}
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
              src="/images/pandit_tarun_puri.png?v=2"
              alt={panditDisplayName}
              style={{
                width: '100%',
                height: '440px',
                objectFit: 'cover',
                objectPosition: 'center 12%',
                borderRadius: '12px',
                marginBottom: '16px'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#730014', fontFamily: 'var(--font-serif)' }}>
                {panditDisplayName}
              </h3>
              <div style={{ color: '#9e7d18', fontWeight: '600', fontSize: '0.9rem' }}>
                {panditDisplayTitle}, {isHi ? 'उज्जैन (म.प्र.)' : 'Ujjain (M.P.), India'}
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '16px'
              }}>
                <a href={`tel:${PANDIT_INFO.phone}`} className="btn-maroon" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  <Phone size={14} />
                  <span>{isHi ? 'कॉल करें' : 'Call Now'}</span>
                </a>
                <a
                  href={getWhatsAppLink(
                    isHi
                      ? `प्रणाम पंडित जी, मुझे आपके बारे में ${PANDIT_INFO.websiteName} पर जानकारी मिली। मुझे पूजा/ज्योतिष परामर्श चाहिए।`
                      : `Pranam Pandit Ji, I learned about your sacred services on ${PANDIT_INFO.websiteName}. I would like to consult with you.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
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
              {isHi ? 'वैदिक परंपरा एवं साधना का संकल्प' : 'Vedic Heritage & Sacred Spiritual Dedication'}
            </h3>

            <p style={{
              fontSize: '0.96rem',
              lineHeight: 1.8,
              color: '#3d2e29',
              marginBottom: '16px',
              fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              {isHi
                ? `उज्जैन की अवंतिका नगरी, जिसे कालगणना का केंद्र और भगवान महाकालेश्वर की राजधानी कहा जाता है, में ${PANDIT_INFO.nameHi} जी का जन्म एक प्रतिष्ठित वैदिक कर्मकांडी ब्राह्मण कुल में हुआ। बाल्यावस्था से ही वेद, उपनिषद, तंत्र शास्त्र एवं फलित ज्योतिष के अध्ययन में रुचि रही।`
                : `Born into an esteemed Vedic Brahmin lineage in the sacred city of Ujjain (Avantika)—the prime meridian of ancient astronomical time calculation and the holy capital of Lord Mahakaleshwar—${PANDIT_INFO.name} was immersed from early childhood in the rigorous study of the Vedas, Upanishads, Tantra Shastra, and Parashara predictive astrology.`}
            </p>

            <p style={{
              fontSize: '0.96rem',
              lineHeight: 1.8,
              color: '#3d2e29',
              marginBottom: '16px',
              fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
            }}>
              {isHi
                ? `विगत 15 से अधिक वर्षों में पंडित जी ने देश-विदेश के 5000+ से अधिक भक्तों का मंगल भात पूजन, काल सर्प दोष निवारण, सवा लाख महामृत्युंजय अनुष्ठान एवं नवचंडी यज्ञ सफलता पूर्वक संपन्न कराया है। पंडित जी का दृढ़ विश्वास है कि वैदिक मंत्रों में समस्त मानवीय कष्टों को शांत करने की ईश्वरीय शक्ति विद्यमान है।`
                : `Over the past 15+ years, Pandit Ji has successfully consecrated Mangal Bhat Puja, Kaal Sarp Dosh Nivaran, 1.25 Lakh Mahamrityunjaya Chants, and Navchandi Mahayajna for over 5,000+ devotees across India and abroad. He holds the deep conviction that scriptural Vedic mantras possess divine potency to alleviate suffering and restore cosmic equilibrium.`}
            </p>

            <h4 style={{ fontSize: '1.15rem', color: '#730014', marginTop: '22px', marginBottom: '12px' }}>
              {isHi ? 'पंडित जी की प्रमुख विशेषताएं:' : "Hallmarks of Pandit Ji's Vedic Ministry:"}
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '24px' }}>
              {features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#3d2e29' }}>
                  <CheckCircle size={18} color="#730014" style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)' }}>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '1rem' }}
            >
              {isHi ? 'पंडित जी से पूजा का समय व परामर्श तय करें' : 'Schedule Consultation & Puja Muhurat with Pandit Ji'}
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