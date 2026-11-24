import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

// GitHub Pages serves 404.html for unknown paths. Copying index.html there lets
// old URLs such as /publications/ or /cv/ load the app, which then scrolls to
// the matching section.
const spaFallback = () => ({
  name: 'spa-fallback-404',
  closeBundle() {
    const out = resolve(__dirname, 'dist');
    copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'));
  },
});

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
});
