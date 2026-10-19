import React from 'react';

/**
 * Authentic Sacred Vedic SVG Icons
 * Crafted with traditional Sanatan Dharmic motifs:
 * Stepped Hawan Kund, Naag Devata, Janampatri Chakra, Shivling,
 * Kalash with Coconut, Rudraksha, Vastu Purusha Mandala, etc.
 */

export const VedicIcon = ({ name, size = 36, color = '#730014', accent = '#d4af37' }) => {
  switch (name) {
    // 1. कुण्डली विश्लेषण (Janampatri Birth Chart Kundali)
    case 'kundali':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="52" height="52" rx="4" stroke={color} strokeWidth="2.5" fill="#fffdf8" />
          <line x1="6" y1="6" x2="58" y2="58" stroke={color} strokeWidth="2" />
          <line x1="58" y1="6" x2="6" y2="58" stroke={color} strokeWidth="2" />
          <polygon points="32,6 58,32 32,58 6,32" stroke={accent} strokeWidth="2.2" fill="none" />
          <circle cx="32" cy="32" r="3" fill={color} />
          {/* Planetary symbols dots */}
          <circle cx="32" cy="19" r="2.2" fill={accent} />
          <circle cx="32" cy="45" r="2.2" fill={accent} />
          <circle cx="19" cy="32" r="2.2" fill={accent} />
          <circle cx="45" cy="32" r="2.2" fill={accent} />
        </svg>
      );

    // 2. ज्योतिष परामर्श (Astrology / Surya & Navagraha Orbit)
    case 'jyotish':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sun center */}
          <circle cx="32" cy="32" r="10" fill={color} stroke={accent} strokeWidth="2" />
          {/* Rays */}
          <line x1="32" y1="8" x2="32" y2="16" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="48" x2="32" y2="56" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="8" y1="32" x2="16" y2="32" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="48" y1="32" x2="56" y2="32" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="15" y1="15" x2="21" y2="21" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="43" y1="43" x2="49" y2="49" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="49" y1="15" x2="43" y2="21" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="21" y1="43" x2="15" y2="49" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          {/* Zodiac orbit rings */}
          <ellipse cx="32" cy="32" rx="26" ry="12" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" transform="rotate(-25 32 32)" />
          <circle cx="48" cy="22" r="3.5" fill={accent} stroke={color} strokeWidth="1.2" />
        </svg>
      );

    // 3. वास्तु परामर्श (Vastu Purusha Mandala / Sacred Compass)
    case 'vastu':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="26" stroke={color} strokeWidth="2" fill="#fffdf8" />
          <circle cx="32" cy="32" r="21" stroke={accent} strokeWidth="1.2" strokeDasharray="2 2" />
          {/* 8-point Vastu Compass Star */}
          <polygon points="32,8 35,27 32,24 29,27" fill={color} />
          <polygon points="32,56 35,37 32,40 29,37" fill={accent} />
          <polygon points="8,32 27,29 24,32 27,35" fill={accent} />
          <polygon points="56,32 37,29 40,32 37,35" fill={accent} />
          <polygon points="15,15 29,26 26,29 23,23" fill={color} />
          <polygon points="49,49 35,38 38,35 41,41" fill={accent} />
          <polygon points="49,15 38,29 35,26 41,23" fill={color} />
          <polygon points="15,49 26,35 29,38 23,41" fill={accent} />
          <circle cx="32" cy="32" r="4" fill={color} stroke={accent} strokeWidth="1.5" />
        </svg>
      );

    // 4. यज्ञ एवं अनुष्ठान (Sacred Vedic Hawan Kund with Agni)
    case 'yajna':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stepped Hawan Kund Base */}
          <path d="M10 52 L54 52 L50 42 L14 42 Z" fill="#8c2514" stroke={color} strokeWidth="1.8" />
          <path d="M14 42 L50 42 L46 34 L18 34 Z" fill="#b8381b" stroke={accent} strokeWidth="1.6" />
          <rect x="8" y="52" width="48" height="4" rx="1" fill={color} />
          {/* Sacred Flames (Agni) */}
          <path d="M32 10 C34 16 41 22 39 28 C37 32 32 34 32 34 C32 34 27 32 25 28 C23 22 30 16 32 10 Z" fill="#ff7700" />
          <path d="M32 16 C33 20 37 24 36 28 C35 30 32 32 32 32 C32 32 29 30 28 28 C27 24 31 20 32 16 Z" fill="#ffd700" />
          {/* Side flames */}
          <path d="M23 23 C21 27 23 31 26 33 C23 33 20 30 21 26 C21.5 24.5 22.5 23.5 23 23 Z" fill="#ff5500" />
          <path d="M41 23 C43 27 41 31 38 33 C41 33 44 30 43 26 C42.5 24.5 41.5 23.5 41 23 Z" fill="#ff5500" />
          {/* Sruk Spoon Tip */}
          <line x1="44" y1="18" x2="35" y2="28" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    // 5. गृह वास्तु पूजा (Sacred Mandir Home with Kalash & Dhwaja)
    case 'griha_vastu':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Roof Pavilion */}
          <path d="M32 14 L54 30 L10 30 Z" fill={color} stroke={accent} strokeWidth="1.8" />
          {/* Temple Shikhar / Kalash on top */}
          <line x1="32" y1="6" x2="32" y2="14" stroke={accent} strokeWidth="2" />
          <path d="M32 6 L40 10 L32 12 Z" fill="#ff7700" /> {/* Dhwaja flag */}
          <circle cx="32" cy="6" r="2" fill={accent} />
          {/* Walls and pillars */}
          <rect x="14" y="30" width="36" height="24" fill="#fffdf8" stroke={color} strokeWidth="2" />
          <line x1="21" y1="30" x2="21" y2="54" stroke={accent} strokeWidth="1.8" />
          <line x1="43" y1="30" x2="43" y2="54" stroke={accent} strokeWidth="1.8" />
          {/* Arch Door */}
          <path d="M27 54 L27 40 C27 37 37 37 37 40 L37 54 Z" fill={color} stroke={accent} strokeWidth="1.5" />
          {/* Base */}
          <rect x="8" y="54" width="48" height="4" rx="1" fill={color} />
        </svg>
      );

    // 6. मूर्ति प्राण प्रतिष्ठा (Sacred Deity Idol with Mukut / Aura)
    case 'pran_pratishtha':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Divine Halo */}
          <circle cx="32" cy="24" r="16" stroke={accent} strokeWidth="1.8" strokeDasharray="2 2" />
          {/* Crown (Mukut) */}
          <polygon points="32,8 37,18 32,16 27,18" fill={accent} stroke={color} strokeWidth="1.2" />
          <circle cx="32" cy="7" r="2" fill={color} />
          {/* Face and Body */}
          <circle cx="32" cy="22" r="7" fill="#ffe7ba" stroke={color} strokeWidth="1.8" />
          <path d="M20 50 C20 37 44 37 44 50 Z" fill={color} stroke={accent} strokeWidth="1.8" />
          {/* Folded Hands / Abhaya mudra */}
          <ellipse cx="32" cy="40" rx="5" ry="3.5" fill="#ffe7ba" stroke={color} strokeWidth="1.4" />
          {/* Lotus Pedestal */}
          <path d="M14 56 C20 52 44 52 50 56 L46 60 L18 60 Z" fill={accent} stroke={color} strokeWidth="1.5" />
        </svg>
      );

    // 7. नवचंडी अनुष्ठान (Maa Chandika Trishul & Sacred Yantra)
    case 'navchandi':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Trishul Prongs */}
          <path d="M32 8 L32 54" stroke={color} strokeWidth="3" strokeLinecap="round" />
          {/* Center spear blade */}
          <polygon points="32,6 35,16 32,14 29,16" fill={accent} />
          {/* Left curved prong */}
          <path d="M32 26 C22 26 18 16 18 10 C20 18 26 21 32 21" fill={accent} stroke={color} strokeWidth="1.8" />
          {/* Right curved prong */}
          <path d="M32 26 C42 26 46 16 46 10 C44 18 38 21 32 21" fill={accent} stroke={color} strokeWidth="1.8" />
          {/* Damru below */}
          <polygon points="26,30 38,30 26,38 38,38" fill={accent} stroke={color} strokeWidth="1.4" />
          <circle cx="32" cy="34" r="1.5" fill={color} />
          {/* Sacred red ribbon */}
          <path d="M32 40 C36 43 38 48 37 52" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 8. शिवशक्ति अनुष्ठान (Shivling with Tripundra Tilak)
    case 'shivshakti':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shivling Stone */}
          <path d="M24 38 L24 24 C24 16 40 16 40 24 L40 38 Z" fill="#242120" stroke={accent} strokeWidth="1.5" />
          {/* Tripundra Tilak */}
          <line x1="28" y1="23" x2="36" y2="23" stroke="#f0ede6" strokeWidth="1.2" />
          <line x1="28" y1="25.5" x2="36" y2="25.5" stroke="#f0ede6" strokeWidth="1.2" />
          <line x1="28" y1="28" x2="36" y2="28" stroke="#f0ede6" strokeWidth="1.2" />
          <circle cx="32" cy="25.5" r="1.2" fill="#d00" /> {/* Red Bindi */}
          {/* Jalhari / Yoni Peeth */}
          <path d="M12 44 C12 39 52 39 52 44 L58 45 L58 49 L50 49 C48 53 16 53 14 49 L12 49 Z" fill={color} stroke={accent} strokeWidth="1.8" />
          {/* Peeth Base */}
          <rect x="18" y="51" width="28" height="6" rx="2" fill="#3a120e" stroke={accent} strokeWidth="1.5" />
          {/* Sacred Bilva Patra leaf on top */}
          <circle cx="32" cy="15" r="2.5" fill="#38a169" />
        </svg>
      );

    // 9. मंगल भात पूजन (Mangalnath Shivling with Bhat/Rice & Red Akshat)
    case 'mangal_bhat':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shivling with red-tinted rice texture */}
          <path d="M23 40 L23 23 C23 15 41 15 41 23 L41 40 Z" fill="#a8321a" stroke={accent} strokeWidth="1.8" />
          {/* Cooked Rice Grains Texture (Bhat) */}
          <ellipse cx="32" cy="20" rx="3" ry="1.5" fill="#fff5ea" />
          <ellipse cx="28" cy="25" rx="2.5" ry="1.3" fill="#fff5ea" />
          <ellipse cx="36" cy="26" rx="2.5" ry="1.3" fill="#fff5ea" />
          <ellipse cx="31" cy="30" rx="3" ry="1.4" fill="#fff5ea" />
          <ellipse cx="27" cy="34" rx="2.5" ry="1.3" fill="#fff5ea" />
          <ellipse cx="36" cy="35" rx="2.5" ry="1.3" fill="#fff5ea" />
          {/* Jalhari Base */}
          <path d="M12 45 C12 40 52 40 52 45 L58 46 L58 50 L50 50 C48 54 16 54 14 50 L12 50 Z" fill={color} stroke={accent} strokeWidth="1.8" />
          <rect x="18" y="52" width="28" height="6" rx="2" fill={color} />
          {/* Red Flower at Base */}
          <circle cx="32" cy="44" r="3.5" fill="#e53e3e" stroke="#ffd700" strokeWidth="1" />
        </svg>
      );

    // 10. काल सर्प पूजा (Sacred Serpent / Naag Devata with Spread Hood)
    case 'kalsarp':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Coiled Body */}
          <ellipse cx="32" cy="50" rx="22" ry="7" fill="none" stroke={color} strokeWidth="3" />
          <ellipse cx="32" cy="45" rx="16" ry="5" fill="none" stroke={accent} strokeWidth="2.5" />
          {/* Vertical Rising Body */}
          <path d="M32 46 L32 24" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
          {/* Spread Hood (Phana) */}
          <path d="M32 10 C20 12 18 24 32 25 C46 24 44 12 32 10 Z" fill={accent} stroke={color} strokeWidth="2" />
          {/* Snake Face and Eyes */}
          <circle cx="28" cy="18" r="1.4" fill={color} />
          <circle cx="36" cy="18" r="1.4" fill={color} />
          {/* Sacred Naag Mani / Jewel on top */}
          <circle cx="32" cy="12" r="2.2" fill="#e53e3e" stroke="#ffd700" strokeWidth="1" />
          {/* Swastika / sacred mark on hood */}
          <line x1="32" y1="18" x2="32" y2="22" stroke={color} strokeWidth="1.5" />
          <line x1="30" y1="20" x2="34" y2="20" stroke={color} strokeWidth="1.5" />
        </svg>
      );

    // 11. गुरु चांडाल दोष पूजा (Jupiter / Guru Celestial Orb)
    case 'guru_chandal':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Celestial Planet Sphere */}
          <circle cx="32" cy="32" r="18" fill="url(#guruGrad)" stroke={accent} strokeWidth="2" />
          {/* Planetary rings */}
          <ellipse cx="32" cy="32" rx="27" ry="8" stroke={color} strokeWidth="2.2" transform="rotate(-20 32 32)" />
          {/* Sacred Tilak / Star on planet */}
          <circle cx="32" cy="27" r="3" fill="#ffffff" />
          <path d="M32 19 L32 35" stroke={accent} strokeWidth="1.5" />
          <path d="M24 27 L40 27" stroke={accent} strokeWidth="1.5" />
          <defs>
            <radialGradient id="guruGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffe680" />
              <stop offset="60%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#730014" />
            </radialGradient>
          </defs>
        </svg>
      );

    // 12. नवग्रह शांति (9 Planets Altar Mandala)
    case 'navgrah':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="6" stroke={color} strokeWidth="2" fill="#fffdf9" />
          {/* 3x3 Grid of 9 Planets */}
          {/* Row 1 */}
          <circle cx="18" cy="18" r="4.5" fill="#f6ad55" stroke={color} strokeWidth="1.2" />
          <circle cx="32" cy="18" r="5.5" fill="#e53e3e" stroke={accent} strokeWidth="1.5" /> {/* Surya in top center */}
          <circle cx="46" cy="18" r="4.5" fill="#edf2f7" stroke={color} strokeWidth="1.2" /> {/* Chandra */}
          {/* Row 2 */}
          <circle cx="18" cy="32" r="4.5" fill="#fc8181" stroke={color} strokeWidth="1.2" /> {/* Mangal */}
          <circle cx="32" cy="32" r="6.5" fill={color} stroke={accent} strokeWidth="1.8" /> {/* Central Deity */}
          <circle cx="46" cy="32" r="4.5" fill="#68d391" stroke={color} strokeWidth="1.2" /> {/* Budh */}
          {/* Row 3 */}
          <circle cx="18" cy="46" r="4.5" fill="#ecc94b" stroke={color} strokeWidth="1.2" /> {/* Guru */}
          <circle cx="32" cy="46" r="4.5" fill="#cbd5e0" stroke={color} strokeWidth="1.2" /> {/* Shukra */}
          <circle cx="46" cy="46" r="4.5" fill="#4a5568" stroke={color} strokeWidth="1.2" /> {/* Shani */}
        </svg>
      );

    // 13. अर्क विवाह एवं कुंभ विवाह (Sacred Kalash with Mango Leaves & Coconut)
    case 'ark_kumbh':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Copper Kalash Pot */}
          <path d="M22 30 C15 34 15 48 22 53 C25 55 39 55 42 53 C49 48 49 34 42 30 Z" fill={color} stroke={accent} strokeWidth="2" />
          {/* Kalash Neck */}
          <path d="M24 28 L40 28 L38 31 L26 31 Z" fill={accent} stroke={color} strokeWidth="1.5" />
          {/* Mango Leaves */}
          <path d="M26 28 C22 22 24 16 29 18 C30 22 28 26 26 28 Z" fill="#38a169" stroke="#22543d" strokeWidth="1" />
          <path d="M38 28 C42 22 40 16 35 18 C34 22 36 26 38 28 Z" fill="#38a169" stroke="#22543d" strokeWidth="1" />
          <path d="M32 27 C32 18 30 14 32 12 C34 14 32 18 32 27 Z" fill="#2f855a" stroke="#22543d" strokeWidth="1" />
          {/* Sacred Coconut with Tilak */}
          <circle cx="32" cy="20" r="6" fill="#8d5b4c" stroke={accent} strokeWidth="1.5" />
          <line x1="32" y1="17" x2="32" y2="22" stroke="#e53e3e" strokeWidth="1.4" />
          {/* Swastika on Kalash */}
          <circle cx="32" cy="42" r="3.5" fill={accent} />
          {/* Mauli Sacred Thread */}
          <line x1="23" y1="33" x2="41" y2="33" stroke="#ffd700" strokeWidth="2" />
          <line x1="22" y1="36" x2="42" y2="36" stroke="#ff0000" strokeWidth="1.5" />
        </svg>
      );

    // 14. रत्न एवं रुद्राक्ष परामर्श (Sacred Rudraksha Bead & Auspicious Gem)
    case 'rudraksha':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rudraksha Round Body */}
          <circle cx="32" cy="32" r="18" fill="#78350f" stroke={accent} strokeWidth="2" />
          {/* Natural Mukhi Furrows (5-Mukhi Ridges) */}
          <path d="M32 14 C30 22 30 42 32 50" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 14 C36 22 36 42 32 50" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 28 C22 30 42 30 48 28" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 36 C22 34 42 34 48 36" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
          {/* Red Thread loop */}
          <path d="M32 6 L32 14" stroke="#e53e3e" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 50 L32 58" stroke="#e53e3e" strokeWidth="2.5" strokeLinecap="round" />
          {/* Golden Cap on Rudraksha */}
          <path d="M26 14 C28 12 36 12 38 14 Z" fill={accent} />
          <path d="M26 50 C28 52 36 52 38 50 Z" fill={accent} />
        </svg>
      );

    // 15. सभी प्रकार की पूजा-पाठ (Sacred Golden Om & Lotus)
    case 'sarva_puja':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sacred Lotus Petals */}
          <circle cx="32" cy="32" r="24" stroke={accent} strokeWidth="1.8" fill="#fffdf9" />
          {/* Lotus base petals */}
          <path d="M18 44 C24 38 40 38 46 44 C38 48 26 48 18 44 Z" fill="#e2b740" />
          {/* Sacred OM Symbol in center */}
          <text
            x="32"
            y="39"
            fontSize="26"
            fontWeight="bold"
            fontFamily="'Tiro Devanagari Hindi', serif"
            fill={color}
            textAnchor="middle"
          >
            ॐ
          </text>
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="22" stroke={color} strokeWidth="2" fill="#fffdf9" />
          <text x="32" y="38" fontSize="22" fontWeight="bold" fill={color} textAnchor="middle">ॐ</text>
        </svg>
      );
  }
};
