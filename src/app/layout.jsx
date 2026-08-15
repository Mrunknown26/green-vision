import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Green Vision | Branding & Advertising Agency • Rajkot & Surat",
  description: "Green Vision is a premier Branding & Advertising Studio based in Rajkot & Surat. We craft impactful brand identities, 3D product visualizations, mascots, packaging, and high-converting outdoor hoardings.",
  keywords: "branding agency rajkot, branding studio surat, 3D visualization, mascot design, tile packaging design, outdoor hoarding design, graphic design gujarat",
  authors: [{ name: "Green Vision Branding Studio" }],
  creator: "Green Vision Studio",
  metadataBase: new URL("https://greenvisionstudio.com"),
  openGraph: {
    title: "Green Vision | Branding & Advertising Agency",
    description: "Where vision meets impact — Crafting brands that resonate. Premier branding, 3D visualization, and packaging studio.",
    url: "https://greenvisionstudio.com",
    siteName: "Green Vision Branding Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Vision | Branding & Advertising Agency",
    description: "Where vision meets impact — Crafting brands that resonate.",
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
