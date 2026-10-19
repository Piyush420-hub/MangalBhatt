import React, { useState } from 'react';
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

// Sub Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PujaAnushthanPage from './pages/PujaAnushthanPage';
import JyotishPage from './pages/JyotishPage';
import VastuPage from './pages/VastuPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('hi'); // 'hi' or 'en'
  
  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPujaForBooking, setSelectedPujaForBooking] = useState('');
  
  const [kundaliModalOpen, setKundaliModalOpen] = useState(false);
  const [selectedAspectForKundali, setSelectedAspectForKundali] = useState('');

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
      {/* 1. Sacred Top Divine Bar with Active Language Switcher */}
      <TopBar lang={lang} setLang={setLang} />

      {/* 2. Main Navigation Bar */}
      <Navbar
        lang={lang}
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 3. Page Router */}
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
              onNavigateAbout={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
              onNavigateGallery={() => {
                setActivePage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
        onNavigate={(pageId) => {
          setActivePage(pageId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 6. Floating Action Buttons (Sticky WhatsApp, Call, Om Sound, Mobile Bar) */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* 7. Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialPuja={selectedPujaForBooking}
      />

      <KundaliModal
        isOpen={kundaliModalOpen}
        onClose={() => setKundaliModalOpen(false)}
        initialAspect={selectedAspectForKundali}
      />
    </div>
  );
}
