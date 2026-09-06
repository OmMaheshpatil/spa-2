import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OfferPopupWidget from './components/OfferPopupWidget';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyBar from './components/MobileStickyBar';
import BookingModal from './components/BookingModal';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import OffersPage from './pages/OffersPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-espresso-950 text-stone-200">
      <ScrollToTop />

      {/* Global Header */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenBookingModal={handleOpenBookingModal} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home onOpenBookingModal={handleOpenBookingModal} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Widgets */}
      <OfferPopupWidget />
      <FloatingWhatsApp />
      <MobileStickyBar />

      {/* Booking Form Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseBookingModal} />
    </div>
  );
}

export default App;
