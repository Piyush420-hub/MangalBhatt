import React, { useState, useEffect, useRef } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import TopPujasHighlight from './components/TopPujasHighlight';
import SecondaryPujas from './components/SecondaryPujas';
import AboutSection from './components/AboutSection';
import PopularPujas from './components/PopularPujas';
import GallerySection from './components/GallerySection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import KundaliModal from './components/KundaliModal';
import FloatingActions from './components/FloatingActions';
import { setupDefaultSound } from './utils/omAudio';

// Sub Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PujaAnushthanPage from './pages/PujaAnushthanPage';
import JyotishPage from './pages/JyotishPage';
import VastuPage from './pages/VastuPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

const VALID_PAGES = ['home', 'about', 'services', 'pujas', 'jyotish', 'vastu', 'gallery', 'contact'];

// 1. Helper to determine initial page from URL hash, localStorage, or sessionStorage
const getInitialPage = () => {
  // Check URL hash first (e.g. #services, #contact, #pujas)
  const hash = window.location.hash.replace('#', '').trim().toLowerCase();
  if (VALID_PAGES.includes(hash)) {
    return hash;
  }

  // Check localStorage (persists across reloads, browser restarts, and tabs)
  const savedLocal = localStorage.getItem('mangalbhat_active_page');
  if (VALID_PAGES.includes(savedLocal)) {
    return savedLocal;
  }

  // Check sessionStorage
  const savedSession = sessionStorage.getItem('mangalbhat_active_page');
  if (VALID_PAGES.includes(savedSession)) {
    return savedSession;
  }

  return 'home';
};

// 2. Helper to determine initial language from localStorage
const getInitialLang = () => {
  const saved = localStorage.getItem('mangalbhat_lang');
  return saved === 'en' ? 'en' : 'hi';
};

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const [lang, setLangState] = useState(getInitialLang);
  
  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPujaForBooking, setSelectedPujaForBooking] = useState('');
  
  const [kundaliModalOpen, setKundaliModalOpen] = useState(false);
  const [selectedAspectForKundali, setSelectedAspectForKundali] = useState('');

  const isNavigatingRef = useRef(false);

  // 1. Initialize Sacred Om Sound ON by default on mount
  useEffect(() => {
    setupDefaultSound();
  }, []);

  // 2. Synchronize activePage with URL hash, localStorage, and sessionStorage
  useEffect(() => {
    localStorage.setItem('mangalbhat_active_page', activePage);
    sessionStorage.setItem('mangalbhat_active_page', activePage);

    const currentHash = window.location.hash.replace('#', '').trim().toLowerCase();
    if (activePage === 'home') {
      if (currentHash && VALID_PAGES.includes(currentHash)) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      if (currentHash !== activePage) {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${activePage}`);
      }
    }
  }, [activePage]);

  // 3. Listen to browser back/forward and hash changes
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (VALID_PAGES.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // 4. Preserve scroll position across page reloads in any location
  useEffect(() => {
    let scrollTimer;
    const handleScroll = () => {
      if (isNavigatingRef.current) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        sessionStorage.setItem(`mangalbhat_scroll_${activePage}`, window.scrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activePage]);

  // Restore scroll position on page load / page restore
  useEffect(() => {
    const savedScroll = sessionStorage.getItem(`mangalbhat_scroll_${activePage}`);
    if (savedScroll) {
      const pos = parseInt(savedScroll, 10);
      if (!isNaN(pos) && pos > 0) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.scrollTo({ top: pos, behavior: 'instant' });
          }, 40);
        });
      }
    }
  }, [activePage]);

  // Explicit user navigation (e.g. clicking a navbar link or button)
  const handleNavigate = (pageId, shouldScroll = true) => {
    const targetPage = VALID_PAGES.includes(pageId) ? pageId : 'home';
    
    if (shouldScroll) {
      isNavigatingRef.current = true;
      sessionStorage.removeItem(`mangalbhat_scroll_${targetPage}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 500);
    }

    setActivePage(targetPage);
  };

  // Persist language state
  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('mangalbhat_lang', newLang);
  };

  const handleOpenBooking = (pujaName = '') => {
    setSelectedPujaForBooking(pujaName || (lang === 'hi' ? 'मंगल दोष पूजा (मंगल भात पूजन)' : 'Mangal Dosh Bhat Puja'));
    setBookingModalOpen(true);
  };

  const handleOpenKundali = (aspectName = '') => {
    setSelectedAspectForKundali(aspectName || (lang === 'hi' ? 'धन (Wealth)' : 'Wealth'));
    setKundaliModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Sacred Top Divine Bar with Active Language Switcher & Sound Mute/Unmute Pill */}
      <TopBar lang={lang} setLang={setLang} />

      {/* 2. Main Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 3. Page Router with State & Location Preservation */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              lang={lang}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Sacred 15 Services Icon Grid with Authentic Vedic Motifs */}
            <ServicesGrid
              lang={lang}
              onSelectService={(service) => handleOpenBooking(service)}
              onOpenBooking={handleOpenBooking}
            />

            {/* Top 5 Priority Pujas */}
            <TopPujasHighlight
              lang={lang}
              onOpenBooking={handleOpenBooking}
              onOpenKundaliModal={handleOpenKundali}
            />

            {/* About Pandit Ji Section */}
            <AboutSection
              lang={lang}
              onNavigateAbout={() => handleNavigate('about')}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Secondary Pujas & Hawan Section */}
            <SecondaryPujas
              lang={lang}
              onOpenBooking={handleOpenBooking}
            />

            {/* Popular Pujas Section */}
            <PopularPujas
              lang={lang}
              onOpenBooking={handleOpenBooking}
            />

            {/* Gallery Carousel Section with Lightbox */}
            <GallerySection
              lang={lang}
              onNavigateGallery={() => handleNavigate('gallery')}
            />
          </>
        )}

        {/* Sub Pages */}
        {activePage === 'about' && (
          <AboutPage lang={lang} onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'services' && (
          <ServicesPage
            lang={lang}
            onOpenBooking={handleOpenBooking}
            onOpenKundaliModal={handleOpenKundali}
          />
        )}

        {activePage === 'pujas' && (
          <PujaAnushthanPage lang={lang} onOpenBooking={handleOpenBooking} />
        )}

        {activePage === 'jyotish' && (
          <JyotishPage lang={lang} onOpenKundaliModal={handleOpenKundali} />
        )}

        {activePage === 'vastu' && (
          <VastuPage lang={lang} onOpenBooking={handleOpenBooking} />
        )}

        {activePage === 'gallery' && (
          <GalleryPage lang={lang} />
        )}

        {activePage === 'contact' && (
          <ContactPage lang={lang} />
        )}
      </main>

      {/* 4. Solution / CTA Banner */}
      <CtaBanner lang={lang} />

      {/* 5. Rich Devotional Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 6. Floating Action Buttons (Sticky WhatsApp, Call, Om Sound, Mobile Bar) */}
      <FloatingActions lang={lang} onOpenBooking={() => handleOpenBooking()} />

      {/* 7. Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialPuja={selectedPujaForBooking}
        lang={lang}
      />

      <KundaliModal
        isOpen={kundaliModalOpen}
        onClose={() => setKundaliModalOpen(false)}
        initialAspect={selectedAspectForKundali}
        lang={lang}
      />
    </div>
  );
}
