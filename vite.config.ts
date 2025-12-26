import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Use relative base so assets load correctly when deployed to GitHub Pages
      // (serving from a subpath). Using './' ensures JS/CSS are requested
      // relative to the HTML file rather than the domain root.
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // Use Vite's import.meta.env for runtime config. Avoid defining legacy process.env keys.
      define: {},
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
