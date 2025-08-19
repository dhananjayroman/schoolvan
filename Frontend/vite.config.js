import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default build output
  },
  server: {
    port: 5173, // optional for local
  },
  preview: {
    port: 4173, // for preview builds
  },
});

