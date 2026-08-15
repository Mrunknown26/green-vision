import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeTicker from '@/components/MarqueeTicker';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import PortfolioShowcase2026 from '@/components/PortfolioShowcase2026';
import ProcessSection from '@/components/ProcessSection';
import ClienteleSection from '@/components/ClienteleSection';
import ImpactSection from '@/components/ImpactSection';
import ProjectEstimator from '@/components/ProjectEstimator';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-lime selection:text-brand-dark">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      {/* <Hero /> */}

      {/* Smooth Marquee Text Ticker */}
      {/* <MarqueeTicker /> */}

      {/* About & Studio Manifesto */}
      {/* <AboutSection /> */}

      {/* Core Design Services & Disciplines */}
      {/* <ServicesSection /> */}

      {/* Selected Works & Case Archives */}
      {/* <PortfolioSection /> */}

      {/* Behance Portfolio 2026 Showcase with Yet Another React Lightbox */}
      <PortfolioShowcase2026 />

      {/* 6-Stage Creative Process */}
      {/* <ProcessSection /> */}

      {/* Enterprise Clientele & Testimonials */}
      {/* <ClienteleSection /> */}

      {/* Impact & Business Outcomes */}
      {/* <ImpactSection /> */}

      {/* Interactive Scope & Quote Estimator */}
      {/* <ProjectEstimator /> */}

      {/* Frequently Asked Questions */}
      {/* <FAQSection /> */}

      {/* Contact & Inquiry Section */}
      {/* <ContactSection /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </main>
  );
}
