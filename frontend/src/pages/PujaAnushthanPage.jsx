import React from 'react';
import { Calendar, MessageCircle, Flame, Check, Sparkles, AlertCircle } from 'lucide-react';
import { TOP_PUJAS, SECONDARY_PUJAS, getWhatsAppLink } from '../data/pujaData';

export default function PujaAnushthanPage({ onOpenBooking }) {
  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            || शास्त्रोक्त वैदिक कर्मकांड ||
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            पूजा एवं महा अनुष्ठान विधान
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: 'var(--font-devanagari)'
          }}>
            उज्जैन महाकाल एवं मंगलनाथ की पावन धरा पर संपन्न होने वाले विशेष दोष निवारण अनुष्ठान व वैदिक नियम
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🔱</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* Essential Rules / Niyam Box */}
        <div style={{
          background: 'linear-gradient(135deg, #fffcf5, #fbf2e2)',
          border: '2px solid #d4af37',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '40px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#730014',
            fontSize: '1.2rem',
            fontWeight: '800',
            fontFamily: 'var(--font-serif)',
            marginBottom: '10px'
          }}>
            <Sparkles size={20} color="#ff7700" />
            <span>उज्जैन पूजा अनुष्ठान के आवश्यक नियम व सावधानियां:</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', fontSize: '0.9rem', color: '#473630' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#730014', fontWeight: '700' }}>१.</span>
              <span>पूजा के दिन जातक को हल्के व सात्विक वस्त्र (धोती, कुर्ता या साड़ी) धारण करना चाहिए।</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#730014', fontWeight: '700' }}>२.</span>
              <span>पूजा के समय यजमान का शुद्ध मन से संकल्प एवं अपने गोत्र व पितरों का स्मरण आवश्यक है।</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#730014', fontWeight: '700' }}>३.</span>
              <span>पूजा से एक दिन पूर्व सात्विक भोजन ग्रहण करें एवं तामसिक पदार्थों से परहेज करें।</span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: '#730014', fontWeight: '700' }}>४.</span>
              <span>यदि आप उज्जैन नहीं आ सकते, तो लाइव वीडियो कॉल द्वारा पंडित जी संकल्प करवाकर पूर्ण विधि संपन्न करते हैं।</span>
            </div>
          </div>
        </div>

        {/* Featured Deep Dive: Mangal Bhat Puja */}
        <div style={{
          background: '#ffffff',
          border: '2px solid #730014',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '40px',
          boxShadow: '0 8px 30px rgba(115,0,20,0.1)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #730014, #4a0309)',
            color: '#ffd700',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontWeight: '800' }}>
              विशेष महात्म्य: उज्जैन मंगल भात पूजन
            </h3>
            <span style={{ background: '#ffd700', color: '#730014', padding: '4px 14px', borderRadius: '20px', fontWeight: '700', fontSize: '0.82rem' }}>
              उज्जैन मंगलनाथ धाम
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            padding: '24px'
          }} className="mangal-detail-grid">
            <div>
              <img
                src="/images/mangal_bhat.jpg"
                alt="Mangal Bhat Puja"
                style={{ width: '100%', borderRadius: '10px', height: '280px', objectFit: 'cover', marginBottom: '14px' }}
              />
              <p style={{ fontSize: '0.9rem', color: '#55423c', lineHeight: 1.6 }}>
                मंगलनाथ मंदिर उज्जैन का वह पावन केंद्र है जहां पृथ्वी के नाभि स्थल पर भगवान शिव मंगल स्वरूप में पूजित हैं। यहाँ भात पूजन करने से जन्म कुंडली का अंगारक दोष, मांगलिक दोष और विवाह में आ रही समस्त रुकावटें समाप्त हो जाती हैं।
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#730014', marginBottom: '10px' }}>
                  भात पूजन विधि के चरण:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#3d2e29' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>१. गणेश-गौरी पूजन:</strong> विघ्नों के नाश एवं कार्य की निर्विघ्नता हेतु।</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>२. नवग्रह एवं मंगल यंत्र स्थापना:</strong> मंगल देव के वैदिक मंत्रों द्वारा आह्वान।</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>३. पंचामृत अभिषेक:</strong> दूध, दही, घी, शहद, शक्कर द्वारा अभिषेक।</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>४. भात (चावल) अर्पण:</strong> शिवलिंग पर कुंकुम व भात का विशेष लेप।</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>५. दशांश हवन एवं आरती:</strong> लाल पुष्प, समिधा एवं शुद्ध घी से आहुति।</span>
                  </li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button
                  onClick={() => onOpenBooking('मंगल दोष पूजा (मंगल भात पूजन)')}
                  className="btn-maroon"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
                >
                  <Calendar size={16} />
                  <span>मंगल भात पूजा बुक करें</span>
                </button>
                <a
                  href={getWhatsAppLink("प्रणाम पंडित जी, मुझे मंगल भात पूजा की तिथि एवं व्यवस्था की जानकारी चाहिए।")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '12px 18px' }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Deep Dive: Kaal Sarp Dosh */}
        <div style={{
          background: '#ffffff',
          border: '2px solid #730014',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 30px rgba(115,0,20,0.1)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #730014, #4a0309)',
            color: '#ffd700',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontWeight: '800' }}>
              काल सर्प दोष शांति महापूजा
            </h3>
            <span style={{ background: '#ffd700', color: '#730014', padding: '4px 14px', borderRadius: '20px', fontWeight: '700', fontSize: '0.82rem' }}>
              १२ प्रकार के कालसर्प योग
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            padding: '24px'
          }} className="mangal-detail-grid">
            <div>
              <img
                src="/images/kalsarp.jpg"
                alt="Kaal Sarp Puja"
                style={{ width: '100%', borderRadius: '10px', height: '280px', objectFit: 'cover', marginBottom: '14px' }}
              />
              <p style={{ fontSize: '0.9rem', color: '#55423c', lineHeight: 1.6 }}>
                अनंत, कुलिक, वासुकि, शंखपाल, पद्म, महापद्म, तक्षक, कर्कोटक, शंखनाद, घातक, विषधर और शेषनाग—इन 12 प्रकार के कालसर्प दोषों में से आपकी कुंडली में कौन सा दोष है, इसका सटीक विश्लेषण कर विशिष्ट शांति कराई जाती है।
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#730014', marginBottom: '10px' }}>
                  कालसर्प पूजा में क्या-क्या शामिल है:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#3d2e29' }}>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>नाग-नागिन तांबे व चांदी का जोड़ा:</strong> विशेष वैदिक प्राण प्रतिष्ठा।</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>राहु-केतु शांति जप:</strong> राहु व केतु के बीज मंत्रों का सस्वर पाठ।</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>त्रिपिंडी श्राद्ध व पितृ तर्पण:</strong> पितृ दोष के कारण उत्पन्न बाधा का शमन।</span>
                  </li>
                  <li style={{ display: 'flex', gap: '8px' }}>
                    <Check size={16} color="#730014" />
                    <span><strong>रुद्राभिषेक एवं हवन:</strong> भगवान नागचंद्रेश्वर एवं महाकाल का आशीर्वाद।</span>
                  </li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button
                  onClick={() => onOpenBooking('काल सर्प दोष पूजा')}
                  className="btn-maroon"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
                >
                  <Calendar size={16} />
                  <span>कालसर्प पूजा बुक करें</span>
                </button>
                <a
                  href={getWhatsAppLink("प्रणाम पंडित जी, मुझे कालसर्प दोष शांति पूजा करवानी है, कृपया शुभ मुहूर्त बताएं।")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '12px 18px' }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .mangal-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
