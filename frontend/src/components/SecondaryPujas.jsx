import React from 'react';
import { Calendar, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/pujaData';

// 12 Dedicated Sacred Dharmic Emblems
export const SacredHawanEmblem = ({ type }) => {
  switch (type) {
    // 1. Maa Baglamukhi Hawan (Golden Pitambari Agni with Trishul & Sudarshana aura)
    case 'p1':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad1)" stroke="#d4af37" strokeWidth="1.5" />
          <path d="M16 48 L48 48 L44 38 L20 38 Z" fill="#8c2514" stroke="#ffd700" strokeWidth="1.2" />
          {/* Yellow Pitambari Flames */}
          <path d="M32 12 C35 18 42 24 39 30 C36 34 32 36 32 36 C32 36 28 34 25 30 C22 24 29 18 32 12 Z" fill="#ffd700" />
          <path d="M32 18 C33 22 37 26 36 30 C35 32 32 34 32 34 C32 34 29 32 28 30 C27 26 31 22 32 18 Z" fill="#ff7700" />
          {/* Trishul in flame */}
          <path d="M32 8 L32 24" stroke="#730014" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 14 C30 18 34 18 36 14" stroke="#730014" strokeWidth="1.5" fill="none" />
          <defs>
            <radialGradient id="bgGrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff8db" />
              <stop offset="100%" stopColor="#f7e6b5" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 2. Political Success (Royal Crown & Surya Chakra)
    case 'p2':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad2)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Sun Rays */}
          <circle cx="32" cy="32" r="14" stroke="#ff7700" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Royal Crown / Mukut */}
          <polygon points="18,42 46,42 43,26 36,32 32,20 28,32 21,26" fill="#730014" stroke="#ffd700" strokeWidth="1.5" />
          <circle cx="32" cy="18" r="2.5" fill="#ffd700" />
          <circle cx="21" cy="24" r="1.8" fill="#ffd700" />
          <circle cx="43" cy="24" r="1.8" fill="#ffd700" />
          {/* Base gem */}
          <rect x="22" y="42" width="20" height="4" rx="1" fill="#ffd700" />
          <defs>
            <radialGradient id="bgGrad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffdf6" />
              <stop offset="100%" stopColor="#faecd0" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 3. Santan Gopal (Sacred Kalash with Lotus & Peacock feather motif)
    case 'p3':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad3)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Auspicious Kalash */}
          <path d="M24 32 C18 35 18 46 24 50 C26 52 38 52 40 50 C46 46 46 35 40 32 Z" fill="#730014" stroke="#ffd700" strokeWidth="1.5" />
          {/* Coconut */}
          <circle cx="32" cy="25" r="6" fill="#8d5b4c" stroke="#ffd700" strokeWidth="1.2" />
          {/* Peacock Feather Motif */}
          <path d="M32 10 C36 12 38 18 36 21 C34 23 32 23 32 23 C32 23 30 23 28 21 C26 18 28 12 32 10 Z" fill="#2b6cb0" stroke="#ffd700" strokeWidth="1" />
          <circle cx="32" cy="16" r="2.2" fill="#38a169" />
          <circle cx="32" cy="16" r="1" fill="#ffd700" />
          <defs>
            <radialGradient id="bgGrad3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffaf0" />
              <stop offset="100%" stopColor="#fcead2" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 4. Tantra Badha Mukti (Bhairav Protection Shield / Sudarshan Chakra)
    case 'p4':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad4)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Shield */}
          <path d="M32 12 L48 20 C48 36 32 48 32 52 C32 48 16 36 16 20 Z" fill="#730014" stroke="#ffd700" strokeWidth="1.8" />
          {/* Sacred Trishul on Shield */}
          <path d="M32 20 L32 42" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 26 C28 30 36 30 38 26" stroke="#ffd700" strokeWidth="1.8" fill="none" />
          <polygon points="32,17 34,22 32,20 30,22" fill="#ffd700" />
          <defs>
            <radialGradient id="bgGrad4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff5f5" />
              <stop offset="100%" stopColor="#fed7d7" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 5. Shatru Badha Nivaran (Divine Sudarshana Chakra & Trishul)
    case 'p5':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad5)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Chakra Ring */}
          <circle cx="32" cy="32" r="18" stroke="#ff7700" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="32" cy="32" r="12" fill="#730014" stroke="#ffd700" strokeWidth="1.5" />
          {/* 8 Blades of Chakra */}
          <line x1="32" y1="10" x2="32" y2="54" stroke="#ffd700" strokeWidth="2" />
          <line x1="10" y1="32" x2="54" y2="32" stroke="#ffd700" strokeWidth="2" />
          <line x1="16" y1="16" x2="48" y2="48" stroke="#ffd700" strokeWidth="2" />
          <line x1="48" y1="16" x2="16" y2="48" stroke="#ffd700" strokeWidth="2" />
          <circle cx="32" cy="32" r="4" fill="#ffd700" />
          <defs>
            <radialGradient id="bgGrad5" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffaf0" />
              <stop offset="100%" stopColor="#fcead2" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 6. Vyapar Suraksha Kavach (Golden Swastik & Protective Mandala)
    case 'p6':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad6)" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="21" stroke="#ff7700" strokeWidth="1.2" strokeDasharray="2 2" />
          {/* Sacred Golden Swastik */}
          <path d="M32 16 L32 48" stroke="#730014" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 32 L48 32" stroke="#730014" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 16 L44 16" stroke="#730014" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 32 L48 44" stroke="#730014" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 48 L20 48" stroke="#730014" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 32 L16 20" stroke="#730014" strokeWidth="3" strokeLinecap="round" />
          {/* 4 Auspicious Bindus */}
          <circle cx="24" cy="24" r="1.8" fill="#ffd700" />
          <circle cx="40" cy="24" r="1.8" fill="#ffd700" />
          <circle cx="24" cy="40" r="1.8" fill="#ffd700" />
          <circle cx="40" cy="40" r="1.8" fill="#ffd700" />
          <defs>
            <radialGradient id="bgGrad6" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffdfa" />
              <stop offset="100%" stopColor="#fdf0d5" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 7. Vyapar Vriddhi Maha Lakshmi (Sacred Kalash with Overflowing Gold Coins)
    case 'p7':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad7)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Wealth Pot */}
          <path d="M22 34 C16 38 16 50 22 54 C25 56 39 56 42 54 C48 50 48 38 42 34 Z" fill="#730014" stroke="#ffd700" strokeWidth="1.8" />
          {/* Overflowing Gold Coins */}
          <circle cx="32" cy="24" r="5" fill="#ffd700" stroke="#b7791f" strokeWidth="1.2" />
          <circle cx="25" cy="28" r="4.5" fill="#ffd700" stroke="#b7791f" strokeWidth="1.2" />
          <circle cx="39" cy="28" r="4.5" fill="#ffd700" stroke="#b7791f" strokeWidth="1.2" />
          <circle cx="32" cy="15" r="4" fill="#ffd700" stroke="#b7791f" strokeWidth="1.2" />
          {/* Sparkles of Gold */}
          <polygon points="32,7 33,10 36,11 33,12 32,15 31,12 28,11 31,10" fill="#ffd700" />
          <defs>
            <radialGradient id="bgGrad7" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffcf0" />
              <stop offset="100%" stopColor="#fef3c7" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 8. Prem Vivah Samadhan (Twin Auspicious Sacred Lotuses / Gathbandhan Knot)
    case 'p8':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad8)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Twin sacred lotus petals */}
          <path d="M24 42 C18 36 22 24 28 26 C30 32 28 38 24 42 Z" fill="#e53e3e" stroke="#ffd700" strokeWidth="1.2" />
          <path d="M40 42 C46 36 42 24 36 26 C34 32 36 38 40 42 Z" fill="#e53e3e" stroke="#ffd700" strokeWidth="1.2" />
          {/* Central Blooming Heart Lotus */}
          <path d="M32 46 C24 38 22 28 32 20 C42 28 40 38 32 46 Z" fill="#730014" stroke="#ffd700" strokeWidth="1.5" />
          {/* Sacred knot in center */}
          <circle cx="32" cy="30" r="3" fill="#ffd700" />
          <defs>
            <radialGradient id="bgGrad8" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff5f5" />
              <stop offset="100%" stopColor="#fed7e2" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 9. Court Case Vijaya (Dharma Nyaya Chakra & Vijaya Flag)
    case 'p9':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad9)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Balance Scales of Justice & Dharma */}
          <line x1="32" y1="14" x2="32" y2="50" stroke="#730014" strokeWidth="2.5" />
          <line x1="16" y1="22" x2="48" y2="22" stroke="#730014" strokeWidth="2.5" />
          {/* Left Pan */}
          <line x1="18" y1="22" x2="14" y2="34" stroke="#ffd700" strokeWidth="1.2" />
          <line x1="26" y1="22" x2="22" y2="34" stroke="#ffd700" strokeWidth="1.2" />
          <path d="M12 34 C12 40 24 40 24 34 Z" fill="#ffd700" stroke="#730014" strokeWidth="1.2" />
          {/* Right Pan (Higher / Victorious) */}
          <line x1="38" y1="22" x2="36" y2="30" stroke="#ffd700" strokeWidth="1.2" />
          <line x1="46" y1="22" x2="44" y2="30" stroke="#ffd700" strokeWidth="1.2" />
          <path d="M34 30 C34 36 46 36 46 30 Z" fill="#ffd700" stroke="#730014" strokeWidth="1.2" />
          {/* Crown top */}
          <polygon points="32,9 35,14 29,14" fill="#ffd700" />
          <defs>
            <radialGradient id="bgGrad9" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffaf0" />
              <stop offset="100%" stopColor="#feebc8" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 10. Vivah Badha Nivaran (Sacred Vivah Kumbh & Mangal Sutra)
    case 'p10':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad10)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Auspicious Vivah Kalash */}
          <path d="M22 34 C16 38 16 50 22 54 C25 56 39 56 42 54 C48 50 48 38 42 34 Z" fill="#730014" stroke="#ffd700" strokeWidth="1.8" />
          {/* Mango Leaves */}
          <path d="M26 34 C22 28 24 22 29 24 C30 28 28 32 26 34 Z" fill="#38a169" />
          <path d="M38 34 C42 28 40 22 35 24 C34 28 36 32 38 34 Z" fill="#38a169" />
          {/* Coconut with Haldi Tilak */}
          <circle cx="32" cy="24" r="6" fill="#8d5b4c" stroke="#ffd700" strokeWidth="1.2" />
          <circle cx="32" cy="24" r="2" fill="#ffd700" />
          {/* Red Auspicious Thread */}
          <path d="M14 42 C24 48 40 48 50 42" stroke="#ff0000" strokeWidth="2" strokeDasharray="3 2" fill="none" />
          <defs>
            <radialGradient id="bgGrad10" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffdfa" />
              <stop offset="100%" stopColor="#fed7d7" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 11. Rin Mukti Rinmochak (Rinmochak Mangal Yantra & Kuber Coin)
    case 'p11':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad11)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Rinmochak Hexagon Yantra */}
          <polygon points="32,14 46,22 46,38 32,46 18,38 18,22" fill="#730014" stroke="#ffd700" strokeWidth="1.8" />
          {/* Central Inverted Triangle */}
          <polygon points="32,40 23,24 41,24" fill="#a8321a" stroke="#ffd700" strokeWidth="1.2" />
          {/* Golden Bindu */}
          <circle cx="32" cy="29" r="3.5" fill="#ffd700" stroke="#730014" strokeWidth="1" />
          <defs>
            <radialGradient id="bgGrad11" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffaf0" />
              <stop offset="100%" stopColor="#fed7d7" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 12. Lakshmi Prapti Shree Suktam Hawan (Holy Shree Yantra with Blooming Lotus)
    case 'p12':
      return (
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="url(#bgGrad12)" stroke="#d4af37" strokeWidth="1.5" />
          {/* Lotus Pedestal */}
          <path d="M16 48 C22 40 42 40 48 48 C38 52 26 52 16 48 Z" fill="#e2b740" stroke="#730014" strokeWidth="1.2" />
          {/* Sacred Shree Yantra Interlocking Triangles */}
          <polygon points="32,14 48,40 16,40" stroke="#730014" strokeWidth="1.8" fill="#ffd700" />
          <polygon points="32,44 48,18 16,18" stroke="#730014" strokeWidth="1.8" fill="none" />
          {/* Central Maha Bindu */}
          <circle cx="32" cy="29" r="3" fill="#ff0000" stroke="#ffd700" strokeWidth="1" />
          <defs>
            <radialGradient id="bgGrad12" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffdf0" />
              <stop offset="100%" stopColor="#fef08a" />
            </radialGradient>
          </defs>
        </svg>
      );

    default:
      return null;
  }
};

export const HAWAN_PUJAS_LIST = [
    {
      id: "p1",
      titleHi: "मां बगलामुखी हवन",
      titleEn: "Maa Baglamukhi Hawan",
      badgeHi: "हवन अनुष्ठान",
      badgeEn: "Vedic Hawan",
      focusHi: "शत्रुओं पर विजय, अचल सुरक्षा एवं तंत्र रक्षा",
      focusEn: "Victory over enemies, absolute protection & tantric defense"
    },
    {
      id: "p2",
      titleHi: "राजनीतिक सफलता अनुष्ठान",
      titleEn: "Political Success Anushthan",
      badgeHi: "विशेष सिद्धि",
      badgeEn: "Special Siddhi",
      focusHi: "पद, प्रतिष्ठा, जनसमर्थन और चुनाव में विजय",
      focusEn: "High office, public prestige, leadership & election victory"
    },
    {
      id: "p3",
      titleHi: "संतान सुख की प्राप्ति",
      titleEn: "Santan Gopal Blessing",
      badgeHi: "पारिवारिक सुख",
      badgeEn: "Family Blessing",
      focusHi: "संतान गोपाल अनुष्ठान, वंश वृद्धि व दीर्घायु संतान",
      focusEn: "Child blessing, lineage expansion & healthy progeny"
    },
    {
      id: "p4",
      titleHi: "तंत्र-बाधा से मुक्ति",
      titleEn: "Tantra Badha Removal",
      badgeHi: "सुरक्षा कवच",
      badgeEn: "Protection Shield",
      focusHi: "बुरी नजर, ऊपरी बाधा एवं नकारात्मक ऊर्जा का नाश",
      focusEn: "Eradication of evil eye, negative aura & unseen obstacles"
    },
    {
      id: "p5",
      titleHi: "शत्रु-बाधा निवारण",
      titleEn: "Enemy Obstacle Remedy",
      badgeHi: "दोष शांति",
      badgeEn: "Dosh Shanti",
      focusHi: "गुप्त एवं प्रत्यक्ष विरोधियों के षड्यंत्रों से सुरक्षा",
      focusEn: "Shielding from hidden adversaries and hostile plots"
    },
    {
      id: "p6",
      titleHi: "व्यापार सुरक्षा कवच",
      titleEn: "Business Shield (Kavach)",
      badgeHi: "व्यापारिक सिद्धि",
      badgeEn: "Business Siddhi",
      focusHi: "व्यापार में नजर दोष एवं अचानक घाटे से रक्षा",
      focusEn: "Protection from commercial evil eye & sudden losses"
    },
    {
      id: "p7",
      titleHi: "व्यापार वृद्धि महालक्ष्मी",
      titleEn: "Business Growth & Lakshmi",
      badgeHi: "लक्ष्मी कृपा",
      badgeEn: "Lakshmi Grace",
      focusHi: "ग्राहकों की संख्या में वृद्धि व निरंतर आर्थिक प्रगति",
      focusEn: "Continuous customer surge & lasting financial progress"
    },
    {
      id: "p8",
      titleHi: "प्रेम व विवाह संबंध समाधान",
      titleEn: "Love & Marriage Harmony",
      badgeHi: "संबंध सुधार",
      badgeEn: "Harmony Remedy",
      focusHi: "आपसी मतभेद दूर करना व दांपत्य में मधुरता",
      focusEn: "Resolving conflicts, mutual understanding & affection"
    },
    {
      id: "p9",
      titleHi: "कोर्ट केस में विजय",
      titleEn: "Court & Legal Case Victory",
      badgeHi: "कानूनी विजय",
      badgeEn: "Legal Victory",
      focusHi: "न्यायालयीन विवादों एवं मुकदमों में अनुकूल परिणाम",
      focusEn: "Favorable triumph in judicial disputes & litigation"
    },
    {
      id: "p10",
      titleHi: "विवाह बाधा निवारण",
      titleEn: "Marriage Delay Remedy",
      badgeHi: "विवाह योग",
      badgeEn: "Marriage Yoga",
      focusHi: "उम्र बीतने, दोषों या रिश्तों के टूटने की समस्या का हल",
      focusEn: "Overcoming alliance delays, doshas & broken ties"
    },
    {
      id: "p11",
      titleHi: "ऋण-मुक्ति ऋणमोचक पूजा",
      titleEn: "Debt Relief Rinmochak Puja",
      badgeHi: "ऋण निवारण",
      badgeEn: "Debt Relief",
      focusHi: "कर्ज के दलदल से मुक्ति एवं स्थायी आर्थिक संबल",
      focusEn: "Liberation from crippling debt & lasting stability"
    },
    {
      id: "p12",
      titleHi: "लक्ष्मी प्राप्ति श्री सूक्त हवन",
      titleEn: "Shree Suktam Maha Hawan",
      badgeHi: "श्री महालक्ष्मी",
      badgeEn: "Maha Lakshmi",
      focusHi: "स्थिर धन, वैभव, ऐश्वर्य एवं दरिद्रता का नाश",
      focusEn: "Bestowal of enduring wealth, grace & eradication of lack"
    }
  ];

export default function SecondaryPujas({ lang = 'hi', onOpenBooking }) {
  const items = HAWAN_PUJAS_LIST;

  return (
    <section style={{
      padding: '60px 0 50px',
      background: 'linear-gradient(180deg, #faf5eb 0%, #f4ede1 50%, #efe5d3 100%)',
      borderBottom: '2px solid #d4af37',
      position: 'relative'
    }}>
      <div className="container">
        {/* Sacred Heading */}
        <div className="sacred-heading">
          <div className="sacred-heading-title">
            <span className="om-symbol">ॐ</span>
            <span>{lang === 'hi' ? 'वैदिक पूजा-पाठ एवं विशिष्ट हवन अनुष्ठान' : 'Vedic Hawan & Specialized Anushthan'}</span>
            <span className="om-symbol">ॐ</span>
          </div>
          <p className="sacred-heading-sub">
            {lang === 'hi'
              ? 'शत्रु बाधा, व्यापार वृद्धि, कोर्ट केस विजय, तंत्र निवारण एवं लक्ष्मी प्राप्ति हेतु सिद्ध अनुष्ठान'
              : 'Sacred ceremonies for victory over obstacles, business protection, court success, and prosperity'}
          </p>
          <div className="sacred-divider">
            <div className="sacred-divider-line" />
            <span className="sacred-divider-icon">🔥</span>
            <div className="sacred-divider-line" />
          </div>
        </div>

        {/* 12 Auspicious Hawan Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {items.map((item) => {
            const displayTitle = lang === 'hi' ? item.titleHi : item.titleEn;
            const displayBadge = lang === 'hi' ? item.badgeHi : item.badgeEn;
            const displayFocus = lang === 'hi' ? item.focusHi : item.focusEn;

            return (
              <div
                key={item.id}
                style={{
                  background: 'linear-gradient(145deg, #fffcf7 0%, #fff9ec 50%, #fef5e4 100%)',
                  border: '1.5px solid #d4af37',
                  borderRadius: '16px',
                  padding: '22px 20px 18px',
                  boxShadow: '0 4px 16px rgba(115, 0, 20, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="spiritual-hawan-card"
              >
                {/* Decorative Sacred Background Watermark */}
                <div style={{
                  position: 'absolute',
                  right: '-12px',
                  bottom: '-12px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  fontSize: '8rem',
                  color: '#730014',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1
                }}>
                  ॐ
                </div>

                {/* Top Row: Sacred Emblem & Badge */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px'
                  }}>
                    {/* Handcrafted Sacred Vedic Emblem */}
                    <div style={{
                      filter: 'drop-shadow(0 2px 6px rgba(212, 175, 55, 0.4))',
                      transition: 'transform 0.3s ease'
                    }} className="hawan-emblem-wrap">
                      <SacredHawanEmblem type={item.id} />
                    </div>

                    {/* Gold Ribbon Capsule Badge */}
                    <div style={{
                      background: 'linear-gradient(135deg, #730014, #4a0309)',
                      color: '#ffd700',
                      border: '1px solid #ffd700',
                      borderRadius: '20px',
                      padding: '4px 12px',
                      fontSize: '0.76rem',
                      fontWeight: '800',
                      letterSpacing: '0.5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      boxShadow: '0 2px 8px rgba(115, 0, 20, 0.25)'
                    }}>
                      <span style={{ fontSize: '0.7rem' }}>✦</span>
                      <span>{displayBadge}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 style={{
                    fontSize: '1.22rem',
                    fontWeight: '800',
                    color: '#730014',
                    fontFamily: lang === 'hi' ? 'var(--font-serif)' : 'var(--font-sans)',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}>
                    {displayTitle}
                  </h4>

                  {/* Focus / Divine Remedy Description */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '7px',
                    marginBottom: '18px'
                  }}>
                    <span style={{ color: '#d4af37', fontSize: '0.9rem', lineHeight: 1.4 }}>✦</span>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#4a3832',
                      lineHeight: 1.5,
                      fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
                    }}>
                      {displayFocus}
                    </p>
                  </div>
                </div>

                {/* Action Buttons with Divine Styling */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  paddingTop: '14px',
                  borderTop: '1px dashed #e5d1b3'
                }}>
                  {/* Primary Booking Button */}
                  <button
                    onClick={() => onOpenBooking(displayTitle)}
                    style={{
                      background: 'linear-gradient(135deg, #730014 0%, #54000e 100%)',
                      color: '#ffffff',
                      border: '1px solid #ffd700',
                      borderRadius: '25px',
                      padding: '8px 14px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      flex: 1.2,
                      justifyContent: 'center',
                      boxShadow: '0 3px 10px rgba(115, 0, 20, 0.2)',
                      transition: 'all 0.2s ease'
                    }}
                    className="spiritual-btn-book"
                  >
                    <Calendar size={14} color="#ffd700" />
                    <span>{lang === 'hi' ? 'संकल्प बुक करें' : 'Book Puja'}</span>
                  </button>

                  {/* WhatsApp Ask Button */}
                  <a
                    href={getWhatsAppLink(
                      lang === 'hi'
                        ? `प्रणाम पंडित जी, मुझे ${item.titleHi} (${item.focusHi}) के बारे में जानना है।`
                        : `Pranam Pandit Ji, I would like consultation regarding ${item.titleEn}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #25d366 0%, #1da851 100%)',
                      color: '#ffffff',
                      border: '1px solid rgba(255,255,255,0.4)',
                      borderRadius: '25px',
                      padding: '8px 12px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      textDecoration: 'none',
                      justifyContent: 'center',
                      boxShadow: '0 3px 10px rgba(37, 211, 102, 0.25)',
                      transition: 'all 0.2s ease'
                    }}
                    className="spiritual-btn-wa"
                  >
                    <MessageCircle size={15} />
                    <span>{lang === 'hi' ? 'पूछें' : 'Inquire'}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sacred Assurance Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #730014 0%, #4a0309 60%, #300105 100%)',
          border: '2px solid #ffd700',
          borderRadius: '16px',
          padding: '24px 30px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(115, 0, 20, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle gold filigree lines */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '1.8rem', color: '#ffd700' }}>🕉️</span>
            <h3 style={{
              fontSize: 'clamp(1.15rem, 2.3vw, 1.55rem)',
              fontWeight: '800',
              color: '#fff0c7',
              fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)',
              letterSpacing: '0.4px',
              textShadow: '0 2px 6px rgba(0,0,0,0.4)'
            }}>
              {lang === 'hi'
                ? '"सभी प्रकार की पूजा-पाठ विधि-विधान से संपन्न कराये जाते हैं।"'
                : '"All types of pujas and rituals are performed strictly according to Vedic scriptures."'}
            </h3>
            <span style={{ fontSize: '1.8rem', color: '#ffd700' }}>🕉️</span>
          </div>
          <p style={{
            fontSize: '0.92rem',
            color: '#f7ebd6',
            marginTop: '8px',
            maxWidth: '820px',
            margin: '8px auto 0',
            fontFamily: lang === 'hi' ? 'var(--font-devanagari)' : 'var(--font-sans)'
          }}>
            {lang === 'hi'
              ? 'चाहे आप स्वयं उज्जैन पधारकर पूजा में सम्मिलित हों, अथवा ऑनलाइन लाइव संकल्प द्वारा अनुष्ठान करवाएं—सम्पूर्ण वैदिक कर्मकांड का प्रामाणिक पालन किया जाता है।'
              : 'Whether you attend in person at holy Ujjain or participate via live online video sankalp, complete traditional Vedic rituals are observed with sanctified devotion.'}
          </p>
        </div>
      </div>

      <style>{`
        .spiritual-hawan-card:hover {
          transform: translateY(-6px);
          border-color: #ffd700 !important;
          box-shadow: 0 14px 35px rgba(184, 134, 11, 0.25), 0 0 15px rgba(255, 119, 0, 0.12) !important;
          background: linear-gradient(145deg, #ffffff 0%, #fff9ec 40%, #fef3d6 100%) !important;
        }
        .spiritual-hawan-card:hover .hawan-emblem-wrap {
          transform: scale(1.1);
        }
        .spiritual-btn-book:hover {
          background: linear-gradient(135deg, #911224 0%, #730014 100%) !important;
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(115, 0, 20, 0.4) !important;
        }
        .spiritual-btn-wa:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(37, 211, 102, 0.45) !important;
        }
      `}</style>
    </section>
  );
}
