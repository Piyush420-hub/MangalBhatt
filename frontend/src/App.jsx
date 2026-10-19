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

// Dedicated Sub-Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PujaAnushthanPage from './pages/PujaAnushthanPage';
import JyotishPage from './pages/JyotishPage';
import VastuPage from './pages/VastuPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('hi');
  
  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPujaForBooking, setSelectedPujaForBooking] = useState('');
  
  const [kundaliModalOpen, setKundaliModalOpen] = useState(false);
  const [selectedAspectForKundali, setSelectedAspectForKundali] = useState('');

  const handleOpenBooking = (pujaName = '') => {
    setSelectedPujaForBooking(pujaName || 'मंगल दोष पूजा (मंगल भात पूजन)');
    setBookingModalOpen(true);
  };

  const handleOpenKundali = (aspectName = '') => {
    setSelectedAspectForKundali(aspectName || 'धन (Wealth)');
    setKundaliModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Sacred Top Divine Bar */}
      <TopBar lang={lang} setLang={setLang} />

      {/* 2. Main Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 3. Page Router */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero onOpenBooking={() => handleOpenBooking()} />

            {/* Sacred 15 Services Icon Grid (Directly matching screenshot) */}
            <ServicesGrid
              onSelectService={(service) => handleOpenBooking(service)}
              onOpenBooking={handleOpenBooking}
            />

            {/* Top 5 Priority Pujas (As commanded by user prompt) */}
            <TopPujasHighlight
              onOpenBooking={handleOpenBooking}
              onOpenKundaliModal={handleOpenKundali}
            />

            {/* About Pandit Ji Section (matching screenshot layout) */}
            <AboutSection
              onNavigateAbout={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Secondary Pujas & Hawan Section (As requested by user prompt) */}
            <SecondaryPujas onOpenBooking={handleOpenBooking} />

            {/* Popular Pujas 6 Cards Section (matching screenshot) */}
            <PopularPujas onOpenBooking={handleOpenBooking} />

            {/* Gallery Section Carousel with Lightbox (matching screenshot) */}
            <GallerySection
              onNavigateGallery={() => {
                setActivePage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {/* Sub Pages */}
        {activePage === 'about' && (
          <AboutPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            onOpenKundaliModal={handleOpenKundali}
          />
        )}

        {activePage === 'pujas' && (
          <PujaAnushthanPage onOpenBooking={handleOpenBooking} />
        )}

        {activePage === 'jyotish' && (
          <JyotishPage onOpenKundaliModal={handleOpenKundali} />
        )}

        {activePage === 'vastu' && (
          <VastuPage onOpenBooking={handleOpenBooking} />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 4. Solution / CTA Banner (matching screenshot) */}
      <CtaBanner />

      {/* 5. Rich Devotional Footer (matching screenshot 4-columns) */}
      <Footer
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
