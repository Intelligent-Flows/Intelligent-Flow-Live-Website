import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Explicitly set the root to the current directory
  root: './',
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // This ensures the output still goes to the 'dist' folder for Netlify
    outDir: 'dist',
    // Ensures Vite looks for the entry point in the root
    rollupOptions: {
      input: './index.html',
    },
  },
});
