import React from 'react';
import { Home, Compass, Building, ShieldCheck, Check, MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '../data/pujaData';

export default function VastuPage({ onOpenBooking }) {
  const vastuServices = [
    {
      title: 'गृह वास्तु परामर्श (Residential Vastu)',
      desc: 'मुख्य द्वार, रसोईघर (आग्नेय कोण), पूजा घर (ईशान कोण), शयनकक्ष (नैऋत्य कोण) एवं जल स्थान की वास्तु सम्मत व्यवस्था।',
      benefits: ['पारिवारिक सुख व प्रेम', 'मानसिक शांति व स्वास्थ्य', 'अनावश्यक खर्चों पर नियंत्रण']
    },
    {
      title: 'व्यापारिक एवं व्यावसायिक वास्तु (Commercial Vastu)',
      desc: 'दुकान, शोरूम, ऑफिस, होटल व फैक्ट्री का वास्तु विश्लेषण जिससे ग्राहकों का आगमन और व्यापार में निरंतर मुनाफा बना रहे।',
      benefits: ['ग्राहकों व ऑर्डर्स में वृद्धि', 'कर्मचारियों की निष्ठा व कार्यकुशलता', 'आर्थिक बाधाओं का शमन']
    },
    {
      title: 'बिना तोड़-फोड़ वास्तु दोष निवारण',
      desc: 'यंत्र, पिरामिड, विशेष रंग, दर्पण एवं नवग्रह शांति पूजा के माध्यम से बिना किसी तोड़-फोड़ के नकारात्मक ऊर्जा को सकारात्मक में बदलना।',
      benefits: ['भवन में बिना किसी निर्माण हानि', 'लागत की भारी बचत', 'तत्काल सकारात्मक ऊर्जा का अनुभव']
    },
    {
      title: 'भूमि एवं भूखंड चयन (Plot Selection)',
      desc: 'नया मकान या फैक्ट्री बनाने से पूर्व भूमि की ऊर्जा (ऊर्जा स्तर), ढलान, दिशा एवं भूखंड के आकार का वैदिक परीक्षण।',
      benefits: ['भविष्य के दोषों से पूर्व सुरक्षा', 'शुभ व मंगलकारी भूमि का चुनाव', 'समृद्ध जीवन की आधारशिला']
    }
  ];

  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            || वास्तु शास्त्र एवं दिशा शुद्धि ||
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            वैदिक वास्तु परामर्श एवं दोष निवारण
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: 'var(--font-devanagari)'
          }}>
            पंचमहाभूत (पृथ्वी, जल, अग्नि, वायु, आकाश) के संतुलन द्वारा घर, दुकान एवं कारखाने में सुख-समृद्धि का प्रवाह
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🧭</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* Hero image & intro */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          alignItems: 'center',
          marginBottom: '45px',
          background: '#ffffff',
          border: '1px solid #ebd9bc',
          borderRadius: '16px',
          overflow: 'hidden',
          padding: '24px'
        }} className="vastu-intro-grid">
          <div>
            <img
              src="/images/navgrah_vastu.jpg"
              alt="Vastu Shanti Altar"
              style={{ width: '100%', borderRadius: '12px', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 style={{ fontSize: '1.45rem', color: '#730014', fontFamily: 'var(--font-serif)', marginBottom: '12px' }}>
              वास्तु दोष से जीवन पर क्या प्रभाव पड़ता है?
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#473630', lineHeight: 1.7, marginBottom: '14px' }}>
              यदि आपके घर या कार्यक्षेत्र में दिशाओं का असंतुलन है, तो कड़ी मेहनत के बाद भी पैसा नहीं रुकता, परिवार के सदस्यों में अकारण कलह रहता है, या घर में कोई न कोई बीमार बना रहता है।
            </p>
            <p style={{ fontSize: '0.94rem', color: '#473630', lineHeight: 1.7, marginBottom: '20px' }}>
              पंडित तरुण पूरी गोस्वामी जी आपकी वास्तु ऊर्जा का सूक्ष्म मुआयना कर वास्तु पुरुष यंत्र स्थापना एवं नवग्रह शांति द्वारा घर को सुख-शांति का धाम बना देते हैं।
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => onOpenBooking('गृह प्रवेश व वास्तु शांति')} className="btn-maroon" style={{ padding: '10px 20px' }}>
                <Calendar size={16} />
                <span>वास्तु शांति पूजा बुक करें</span>
              </button>
              <a href={getWhatsAppLink("प्रणाम पंडित जी, मुझे अपने घर/ऑफिस का वास्तु परामर्श करवाना है।")} target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ padding: '10px 18px' }}>
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Vastu Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {vastuServices.map((srv, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #ebd9bc',
                borderRadius: '12px',
                padding: '22px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
              }}
            >
              <h4 style={{ fontSize: '1.15rem', color: '#730014', fontWeight: '700', marginBottom: '8px' }}>
                {srv.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#55423c', lineHeight: 1.55, marginBottom: '14px' }}>
                {srv.desc}
              </p>
              <div style={{ marginBottom: '16px' }}>
                {srv.benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#3d2e29', marginBottom: '4px' }}>
                    <Check size={14} color="#730014" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onOpenBooking(srv.title)}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '8px', fontSize: '0.86rem' }}
              >
                परामर्श बुक करें
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .vastu-intro-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
