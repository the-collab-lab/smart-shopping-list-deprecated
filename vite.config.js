import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const PWAConfig = {
  includeAssets: ['favicon.ico', 'robots.txt'],
  manifest: {
    short_name: 'Smart Shopping List',
    name: 'TCL Smart Shopping List',
    description:
      "A smart shopping list that learns your purchase habits and makes suggestions, so you don't forget to buy what's important.",
    icons: [
      {
        src: 'favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: 'logo192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: 'logo512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    start_url: '.',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#ffffff',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir: './build' },
  plugins: [VitePWA(PWAConfig), react(), splitVendorChunkPlugin()],
  server: { open: true },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
