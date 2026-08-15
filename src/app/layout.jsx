import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  metadataBase: new URL("https://greenvisionstudio.com"),
  title: {
    default: "Green Vision | Branding, Graphic Design & 3D Advertising Studio • Rajkot & Surat",
    template: "%s | Green Vision - Branding & Graphics Design",
  },
  description: "Green Vision is an elite Branding, Graphic Design and 3D Advertising Studio based in Rajkot and Surat, Gujarat. We engineer high-recall corporate brand identities, 3D product visualizations, character mascots, commercial packaging architectures, and mega highway billboard hoardings.",
  keywords: [
    "Green Vision",
    "Green Vision Branding",
    "Green Vision Graphics Design",
    "Green Vision Studio",
    "Green Vision Design Studio",
    "Green Vision Branding Studio",
    "Green Vision Rajkot",
    "Green Vision Surat",
    "Green Vision Gujarat",
    "branding agency rajkot",
    "branding studio surat",
    "graphic design rajkot",
    "graphic design surat",
    "graphic design gujarat",
    "3D mascot design",
    "3D character design",
    "3D product visualization",
    "tile packaging design",
    "ceramic packaging design",
    "industrial box packaging",
    "outdoor hoarding design gujarat",
    "highway billboard design",
    "creative advertising agency gujarat",
    "corporate identity design",
    "sample presentation box kit",
    "luxury catalog lookbook design"
  ],
  authors: [{ name: "Green Vision Branding Studio", url: "https://greenvisionstudio.com" }],
  creator: "Green Vision Studio",
  publisher: "Green Vision Studio",
  category: "Design & Creative Agency",
  classification: "Branding, Graphic Design, 3D Mascot Design, Packaging, Advertising",
  alternates: {
    canonical: "https://greenvisionstudio.com",
  },
  openGraph: {
    title: "Green Vision | Branding, Graphic Design & 3D Advertising Studio",
    description: "Where vision meets impact — Crafting brands that resonate. Premier branding, 3D mascot visualization, packaging architecture, and mega outdoor hoardings in Rajkot & Surat.",
    url: "https://greenvisionstudio.com",
    siteName: "Green Vision Branding Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Green Vision | Branding, Graphic Design & 3D Advertising Studio",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Vision | Branding, Graphic Design & 3D Advertising Studio",
    description: "Where vision meets impact — Crafting brands that resonate across Gujarat and global export markets.",
    images: ["/og-image.svg"],
    creator: "@greenvisionstudio",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#A0C60F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&family=Nanum+Pen+Script&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org Structured Data (JSON-LD) */}
        <StructuredData />
        {/* Anti-flash theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('gv_theme');
                  var root = document.documentElement;
                  if (savedTheme === 'light') {
                    root.classList.remove('dark');
                    root.classList.add('light');
                    root.style.colorScheme = 'light';
                  } else {
                    root.classList.remove('light');
                    root.classList.add('dark');
                    root.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-brand-dark text-zinc-100 antialiased selection:bg-brand-lime selection:text-brand-dark min-h-screen relative overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {/* Ambient background glows & noise overlay */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-brand-lime/5 blur-[140px]" />
            <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-brand-green/4 blur-[160px]" />
            <div className="absolute bottom-[-10%] left-[30%] w-[800px] h-[800px] rounded-full bg-brand-lime/4 blur-[180px]" />
            <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
          </div>

          {/* Custom cursor effect */}
          <CustomCursor />

          {/* Floating WhatsApp Widget in Bottom Right */}
          <WhatsAppWidget />

          {/* Page Content */}
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
