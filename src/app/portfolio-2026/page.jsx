import Navbar from '@/components/Navbar';
import PortfolioShowcase2026 from '@/components/PortfolioShowcase2026';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Portfolio 2026 - Art Direction & Brand Identity Showcase | Green Vision",
  description: "Explore the complete Portfolio 2026 archive featuring 59 masterclass modules of art direction, packaging architecture, 3D character design, and bespoke typographic systems with Yet Another React Lightbox preview.",
  openGraph: {
    title: "Portfolio 2026 - Art Direction & Brand Identity Showcase",
    description: "59 curated visual modules exploring strategic brand systems and digital craftsmanship.",
  }
};

export default function Portfolio2026Page() {
  return (
    <main className="min-h-screen bg-[#080A08] text-white selection:bg-brand-lime selection:text-brand-dark pt-20">
      {/* Navigation */}
      <Navbar />

      {/* Full Behance Portfolio 2026 Component */}
      <PortfolioShowcase2026 />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
