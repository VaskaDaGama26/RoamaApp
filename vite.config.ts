import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';
import Sitemap from 'vite-plugin-sitemap';

const routes = [
  '/',
  '/food',
  '/hotel',
  '/dining',
  '/festivals',
  '/directions',
  '/places',
  '/heritage',
  '/practical',
  '/stories',
  '/form',
];

const dynamicRoutes = routes.map((route) => `/RoamaApp/${route}`);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    visualizer({ open: true }),
    Sitemap({
      hostname: 'https://vaskadagama26.github.io/RoamaApp/',
      dynamicRoutes,
    }),
    VitePWA({
      base: '/RoamaApp/',
      registerType: 'autoUpdate', // автообновление service worker
      manifest: {
        name: 'My React Vite PWA',
        short_name: 'ReactPWA',
        description: 'My awesome React app with Vite as PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/RoamaApp/',
        scope: '/RoamaApp/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/RoamaApp/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
});
