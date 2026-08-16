import { faqList } from '@/data/testimonialsData';
import { STUDIO_PHONE, STUDIO_EMAIL, STUDIO_LOCATIONS } from '@/lib/utils';

export default function StructuredData() {
  const baseUrl = 'https://www.greenvisionbranding.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    '@id': `${baseUrl}/#organization`,
    name: 'Green Vision',
    legalName: 'Green Vision Branding Studio',
    alternateName: [
      'Green Vision',
      'Green Vision Branding',
      'Green Vision Graphics Design',
      'Green Vision Studio',
      'Green Vision Design Studio',
      'Green Vision Rajkot',
      'Green Vision Surat',
      'Green Vision Gujarat'
    ],
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    image: `${baseUrl}/og-image.svg`,
    description:
      'Green Vision is a premier Branding, Graphic Design & 3D Advertising Studio based in Rajkot and Surat, Gujarat. We craft impactful brand identities, commercial packaging design, 3D product visualizations, mascots, outdoor hoardings, and bespoke graphics.',
    telephone: STUDIO_PHONE,
    email: STUDIO_EMAIL,
    priceRange: '₹₹ - ₹₹₹',
    currenciesAccepted: 'INR, USD, EUR, AED',
    paymentAccepted: 'Bank Transfer, UPI, Credit Card',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rajkot & Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
      postalCode: '360001',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.3039',
      longitude: '70.8022',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Rajkot',
      },
      {
        '@type': 'City',
        name: 'Surat',
      },
      {
        '@type': 'City',
        name: 'Morbi',
      },
      {
        '@type': 'City',
        name: 'Ahmedabad',
      },
      {
        '@type': 'State',
        name: 'Gujarat',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    knowsAbout: [
      'Brand Identity Design',
      'Graphic Design',
      '3D Mascot Modeling',
      '3D Product Visualization',
      'Tile & Ceramic Packaging Design',
      'Industrial Box Packaging',
      'Highway Hoarding & Mega Billboard Design',
      'Social Media Art Direction',
      'Luxury Sample Presentation Kits',
      'Editorial Lookbook Publishing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Green Vision Design & Branding Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Branding & Corporate Identity Design',
            description:
              'Complete trademark design, logo systems, brand books, typography and corporate visual guidelines by Green Vision.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '3D Product Visualization & Mascot Creation',
            description:
              'Photorealistic 3D rendering, porcelain tile shaders, and custom 3D character mascot creation by Green Vision.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Packaging & Presentation Box Kits',
            description:
              'Retail box packaging, industrial bag sacks, custom luxury sample briefcases and dieline engineering by Green Vision.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hoarding & Outdoor Mega Billboards',
            description:
              'High-speed highway billboards, gantry displays, exhibition backdrops, and large-format outdoor visibility graphics by Green Vision.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Visuals & Content Direction',
            description:
              'Curated Instagram grid architecture, launch campaigns, and digital art direction by Green Vision.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creative Direction & Graphics Design',
            description:
              'Editorial lookbook publishing, luxury ceramic catalogs, and digital web design experiences by Green Vision.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.98',
      reviewCount: '45',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://wa.me/919484525694',
      'https://instagram.com',
      'https://linkedin.com',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Green Vision | Branding & Graphic Design Studio',
    alternateName: [
      'Green Vision',
      'Green Vision Branding',
      'Green Vision Graphics Design',
      'Green Vision Studio',
      'Green Vision Design Studio',
    ],
    url: baseUrl,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Branding & Graphics Design Services',
        item: `${baseUrl}/#services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Selected Portfolio Works',
        item: `${baseUrl}/#work`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact Green Vision Studio',
        item: `${baseUrl}/#contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
