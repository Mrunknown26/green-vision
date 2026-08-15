export default function manifest() {
  return {
    name: 'Green Vision | Branding & Graphic Design Studio',
    short_name: 'Green Vision',
    description: 'Premier Branding, Graphic Design & 3D Advertising Studio based in Rajkot & Surat, Gujarat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050806',
    theme_color: '#A0C60F',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
