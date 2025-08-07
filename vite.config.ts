import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), visualizer({ open: true })],
  base: '/RoamaApp/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lodash')) return 'lodash';
            if (id.includes('recharts')) return 'recharts';
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('leaflet')) return 'leaflet';
            if (id.includes('zod')) return 'zod';
            return 'vendor';
          }
        },
      },
    },
  },
});
