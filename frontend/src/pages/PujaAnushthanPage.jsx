import React from 'react';
import { Calendar, MessageCircle, Flame, Check, Sparkles, AlertCircle } from 'lucide-react';
import { TOP_PUJAS, SECONDARY_PUJAS, getWhatsAppLink } from '../data/pujaData';

export default function PujaAnushthanPage({ lang = 'hi', onOpenBooking }) {
  const isHi = lang === 'hi';

  const niyamList = isHi ? [
    { num: '१.', text: 'पूजा के दिन जातक को हल्के व सात्विक वस्त्र (धोती, कुर्ता या साड़ी) धारण करना चाहिए।' },
    { num: '२.', text: 'पूजा के समय यजमान का शुद्ध मन से संकल्प एवं अपने गोत्र व पितरों का स्मरण आवश्यक है।' },
    { num: '३.', text: 'पूजा से एक दिन पूर्व सात्विक भोजन ग्रहण करें एवं तामसिक पदार्थों से परहेज करें।' },
    { num: '४.', text: 'यदि आप उज्जैन नहीं आ सकते, तो लाइव वीडियो कॉल द्वारा पंडित जी संकल्प करवाकर पूर्ण विधि संपन्न करते हैं।' }
  ] : [
    { num: '1.', text: 'Devotees should wear clean, sattvic traditional attire (kurta-dhoti or saree) on the day of puja.' },
    { num: '2.', text: 'Pure intention, conscious presence, and remembering your ancestral Gotra are essential during the Sankalp.' },
    { num: '3.', text: 'Devotees are advised to maintain a sattvic vegetarian diet starting from the day prior to ceremonies.' },
    { num: '4.', text: 'If unable to visit Ujjain in person, interactive live video-call Sankalp is conducted with full scriptural sanctity.' }
  ];

  const mangalSteps = isHi ? [
    { title: '१. गणेश-गौरी पूजन:', desc: 'विघ्नों के नाश एवं कार्य की निर्विघ्नता हेतु।' },
    { title: '२. नवग्रह एवं मंगल यंत्र स्थापना:', desc: 'मंगल देव के वैदिक मंत्रों द्वारा आह्वान।' },
    { title: '३. पंचामृत अभिषेक:', desc: 'दूध, दही, घी, शहद, शक्कर द्वारा अभिषेक।' },
    { title: '४. भात (चावल) अर्पण:', desc: 'शिवलिंग पर कुंकुम व भात का विशेष लेप।' },
    { title: '५. दशांश हवन एवं आरती:', desc: 'लाल पुष्प, समिधा एवं शुद्ध घी से आहुति।' }
  ] : [
    { title: '1. Ganesh-Gauri Pujan:', desc: 'Invocation for removal of all obstacles and auspicious start.' },
    { title: '2. Navagraha & Mangal Yantra Sthapana:', desc: 'Scriptural invocation of Planet Mars (Mangal Dev) with Vedic mantras.' },
    { title: '3. Panchamrit Abhishek:', desc: 'Sacred ablution with milk, curd, honey, pure ghee, and sugar.' },
    { title: '4. Bhat (Rice) Offering:', desc: 'Consecration of special cooked rice paste and kumkum onto the Shivling.' },
    { title: '5. Dashansh Hawan & Aarti:', desc: 'Fire oblations with red flowers, samidha, and cow ghee followed by Mahamangal Aarti.' }
  ];

  const kalsarpInclusions = isHi ? [
    { title: 'नाग-नागिन तांबे व चांदी का जोड़ा:', desc: 'विशेष वैदिक प्राण प्रतिष्ठा।' },
    { title: 'राहु-केतु शांति जप:', desc: 'राहु व केतु के बीज मंत्रों का सस्वर पाठ।' },
    { title: 'त्रिपिंडी श्राद्ध व पितृ तर्पण:', desc: 'पितृ दोष के कारण उत्पन्न बाधा का शमन।' },
    { title: 'रुद्राभिषेक एवं हवन:', desc: 'भगवान नागचंद्रेश्वर एवं महाकाल का आशीर्वाद।' }
  ] : [
    { title: 'Silver & Copper Serpent Pair:', desc: 'Sacred consecration and life-force invocation of the Nag-Nagin pair.' },
    { title: 'Rahu-Ketu Shanti Mantras:', desc: 'Rhythmic scriptural chanting of Rahu and Ketu seed mantras.' },
    { title: 'Tripindi Shraddha & Pitru Tarpan:', desc: 'Pacification of ancestral doshas causing karmic delays.' },
    { title: 'Rudrabhishek & Hawan:', desc: 'Seeking the supreme grace of Lord Nagchandreshwar and Mahakal.' }
  ];

  return (
    <div style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#d4af37', fontWeight: '700', fontSize: '0.9rem', marginBottom: '6px' }}>
            {isHi ? '|| शास्त्रोक्त वैदिक कर्मकांड ||' : '|| Scriptural Vedic Rituals ||'}
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#730014',
            fontFamily: 'var(--font-serif)',
            fontWeight: '800'
          }}>
            {isHi ? 'पूजा एवं महा अनुष्ठान विधान' : 'Puja & Sacred Anushthan Vidhan'}
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6e564f',
            maxWidth: '680px',
            margin: '8px auto 0',
            fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
          }}>
            {isHi
              ? 'उज्जैन महाकाल एवं मंगलनाथ की पावन धरा पर संपन्न होने वाले विशेष दोष निवारण अनुष्ठान व वैदिक नियम'
              : 'Specialized Vedic dosha nivaran ceremonies and ritual guidelines at the holy shrines of Mahakal & Mangalnath, Ujjain'}
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
            <span>
              {isHi
                ? 'उज्जैन पूजा अनुष्ठान के आवश्यक नियम व सावधानियां:'
                : 'Essential Guidelines & Spiritual Code for Ujjain Puja Rituals:'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', fontSize: '0.9rem', color: '#473630' }}>
            {niyamList.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#730014', fontWeight: '700' }}>{item.num}</span>
                <span style={{ fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)' }}>{item.text}</span>
              </div>
            ))}
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
              {isHi ? 'विशेष महात्म्य: उज्जैन मंगल भात पूजन' : 'Sacred Significance: Ujjain Mangal Bhat Puja'}
            </h3>
            <span style={{ background: '#ffd700', color: '#730014', padding: '4px 14px', borderRadius: '20px', fontWeight: '700', fontSize: '0.82rem' }}>
              {isHi ? 'उज्जैन मंगलनाथ धाम' : 'Mangalnath Temple, Ujjain'}
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
                alt={isHi ? 'मंगल भात पूजा' : 'Mangal Bhat Puja'}
                style={{ width: '100%', borderRadius: '10px', height: '280px', objectFit: 'cover', marginBottom: '14px' }}
              />
              <p style={{
                fontSize: '0.9rem',
                color: '#55423c',
                lineHeight: 1.6,
                fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
              }}>
                {isHi
                  ? 'मंगलनाथ मंदिर उज्जैन का वह पावन केंद्र है जहां पृथ्वी के नाभि स्थल पर भगवान शिव मंगल स्वरूप में पूजित हैं। यहाँ भात पूजन करने से जन्म कुंडली का अंगारक दोष, मांगलिक दोष और विवाह में आ रही समस्त रुकावटें समाप्त हो जाती हैं।'
                  : 'Mangalnath Temple in Ujjain is the sanctified geographic navel of the Earth where Lord Shiva is worshipped as the divine progenitor of Planet Mars. Consecrating Mangal Bhat Puja here cools Mars’ fiery affliction, nullifying Angarak and Manglik Dosha and removing marital obstacles.'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#730014', marginBottom: '10px' }}>
                  {isHi ? 'भात पूजन विधि के चरण:' : 'Sequential Steps of Bhat Puja Vidhan:'}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#3d2e29' }}>
                  {mangalSteps.map((st, i) => (
                    <li key={i} style={{ display: 'flex', gap: '8px' }}>
                      <Check size={16} color="#730014" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)' }}>
                        <strong>{st.title}</strong> {st.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button
                  onClick={() => onOpenBooking(isHi ? 'मंगल दोष पूजा (मंगल भात पूजन)' : 'Mangal Bhat Puja (Mangal Dosh Nivaran)')}
                  className="btn-maroon"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
                >
                  <Calendar size={16} />
                  <span>{isHi ? 'मंगल भात पूजा बुक करें' : 'Book Mangal Bhat Puja'}</span>
                </button>
                <a
                  href={getWhatsAppLink(
                    isHi
                      ? "प्रणाम पंडित जी, मुझे मंगल भात पूजा की तिथि एवं व्यवस्था की जानकारी चाहिए।"
                      : "Pranam Pandit Ji, I would like information regarding the Muhurat and arrangements for Mangal Bhat Puja."
                  )}
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
              {isHi ? 'काल सर्प दोष शांति महापूजा' : 'Kaal Sarp Dosh Shanti Mahapuja'}
            </h3>
            <span style={{ background: '#ffd700', color: '#730014', padding: '4px 14px', borderRadius: '20px', fontWeight: '700', fontSize: '0.82rem' }}>
              {isHi ? '१२ प्रकार के कालसर्प योग' : '12 Variations of Kaal Sarp Yoga'}
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
                alt={isHi ? 'कालसर्प पूजा' : 'Kaal Sarp Puja'}
                style={{ width: '100%', borderRadius: '10px', height: '280px', objectFit: 'cover', marginBottom: '14px' }}
              />
              <p style={{
                fontSize: '0.9rem',
                color: '#55423c',
                lineHeight: 1.6,
                fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)'
              }}>
                {isHi
                  ? 'अनंत, कुलिक, वासुकि, शंखपाल, पद्म, महापद्म, तक्षक, कर्कोटक, शंखनाद, घातक, विषधर और शेषनाग—इन 12 प्रकार के कालसर्प दोषों में से आपकी कुंडली में कौन सा दोष है, इसका सटीक विश्लेषण कर विशिष्ट शांति कराई जाती है।'
                  : 'Anant, Kulik, Vasuki, Shankhpal, Padma, Mahapadma, Takshak, Karkotak, Shankhnad, Ghatak, Vishdhar, and Sheshnag—Pandit Ji accurately identifies which of these 12 distinct Kaal Sarp yogas affects your chart, performing tailored pacification.'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#730014', marginBottom: '10px' }}>
                  {isHi ? 'कालसर्प पूजा में क्या-क्या शामिल है:' : 'What Kaal Sarp Puja Includes:'}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#3d2e29' }}>
                  {kalsarpInclusions.map((inc, i) => (
                    <li key={i} style={{ display: 'flex', gap: '8px' }}>
                      <Check size={16} color="#730014" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontFamily: isHi ? 'var(--font-devanagari)' : 'var(--font-sans)' }}>
                        <strong>{inc.title}</strong> {inc.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button
                  onClick={() => onOpenBooking(isHi ? 'काल सर्प दोष पूजा' : 'Kaal Sarp Dosh Puja')}
                  className="btn-maroon"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
                >
                  <Calendar size={16} />
                  <span>{isHi ? 'कालसर्प पूजा बुक करें' : 'Book Kaal Sarp Puja'}</span>
                </button>
                <a
                  href={getWhatsAppLink(
                    isHi
                      ? "प्रणाम पंडित जी, मुझे कालसर्प दोष शांति पूजा करवानी है, कृपया शुभ मुहूर्त बताएं।"
                      : "Pranam Pandit Ji, I need to perform Kaal Sarp Dosh Shanti Puja, please advise auspicious Muhurat."
                  )}
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