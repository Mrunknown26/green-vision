import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CoreSkills from './components/CoreSkills';
import CreativeProcess from './components/CreativeProcess';
import ClienteleMarquee from './components/ClienteleMarquee';
import SelectedWorks from './components/SelectedWorks';
import ImpactResults from './components/ImpactResults';
import QuoteEstimator from './components/QuoteEstimator';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090B0E] text-white selection:bg-[#00FF66] selection:text-black relative font-sans">
      {/* Noise / Grain Texture Overlay matching PDF design */}
      <div className="grain-overlay" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <AboutUs />
        <CoreSkills />
        <CreativeProcess />
        <ClienteleMarquee />
        <SelectedWorks />
        <ImpactResults />
        <QuoteEstimator />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp & Action Hub at Bottom Right */}
      <FloatingWhatsApp />
    </div>
  );
}
