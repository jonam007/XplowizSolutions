import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
   publicDir: 'public', 
   build: {
    assetsDir: 'assets', // Directory for assets in dist
    copyPublicDir: true // Ensure public files are copied to dist
  }
});
