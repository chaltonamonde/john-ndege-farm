import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LivestockCatalog } from './components/LivestockCatalog';
import { CowshedEstimator } from './components/CowshedEstimator';
import { AcademyBooking } from './components/AcademyBooking';
import { PortfolioGallery } from './components/PortfolioGallery';
import { VideoTestimonials } from './components/VideoTestimonials';
import { GoogleReviewsWidget } from './components/GoogleReviewsWidget';
import { RoiCalculator } from './components/RoiCalculator';
import { AboutJohnNdege } from './components/AboutJohnNdege';
import { ContactFooter } from './components/ContactFooter';
import { MpesaModal } from './components/MpesaModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [currency, setCurrency] = useState('KES');
  const [mpesaModalOpen, setMpesaModalOpen] = useState(false);
  const [reservationData, setReservationData] = useState(null);

  // Trigger M-Pesa Modal from Cattle Catalog
  const handleSelectCowForMpesa = (cow) => {
    setReservationData({
      title: `${cow.tag} (${cow.breed}) - Deposit`,
      amountKES: cow.depositKES,
      amountUSD: Math.round(cow.depositKES / 130),
      itemType: "cattle",
      cowId: cow.id
    });
    setMpesaModalOpen(true);
  };

  // Trigger M-Pesa Modal from Academy Booking
  const handleOpenMpesaWithDetails = (details) => {
    setReservationData({
      title: details.title,
      amountKES: details.amountKES,
      amountUSD: details.amountUSD,
      customerName: details.customerName,
      customerPhone: details.customerPhone,
      itemType: "academy",
      date: details.date
    });
    setMpesaModalOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c1810] text-[#e5ece7] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation & Announcement */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenMpesa={() => {
          setReservationData({
            title: "General Farm Consultation & Reservation Deposit",
            amountKES: 10000,
            amountUSD: 80
          });
          setMpesaModalOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenEstimator={() => scrollToSection('estimator')}
          onOpenCatalog={() => scrollToSection('catalog')}
          onWatchVideo={() => scrollToSection('portfolio')}
        />

        {/* 2. Live Livestock Catalog */}
        <LivestockCatalog
          currency={currency}
          onSelectCowForMpesa={handleSelectCowForMpesa}
        />

        {/* 3. Interactive Cowshed Cost Estimator */}
        <CowshedEstimator
          currency={currency}
        />

        {/* 4. Academy & Farm Visits Booking Engine */}
        <AcademyBooking
          currency={currency}
          onOpenMpesaWithDetails={handleOpenMpesaWithDetails}
        />

        {/* 5. Verified Cowshed Portfolio (500+ Built) */}
        <PortfolioGallery />

        {/* 6. Video Testimonials */}
        <VideoTestimonials />

        {/* 7. Dairy ROI & Silage Cashflow Calculator */}
        <RoiCalculator
          currency={currency}
        />

        {/* 8. Google Reviews Widget (4.9★ Social Proof) */}
        <GoogleReviewsWidget />

        {/* 9. About John Ndege & Trust Pillars */}
        <AboutJohnNdege />
      </main>

      {/* Footer */}
      <ContactFooter />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      
      <MobileStickyBar
        onOpenEstimator={() => scrollToSection('estimator')}
        onOpenCatalog={() => scrollToSection('catalog')}
      />

      {/* M-Pesa Interactive Reservation Modal */}
      <MpesaModal
        isOpen={mpesaModalOpen}
        onClose={() => setMpesaModalOpen(false)}
        reservationData={reservationData}
        currency={currency}
      />
    </div>
  );
}
